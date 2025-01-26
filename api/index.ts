"use server";

import { revalidatePath } from "next/cache";

type Guest = {
  id?: number;
  name: string;
  isAttending?: boolean;
  isPlusOne?: boolean;
};

export type Invite = {
  id: number;
  notes: string;
  submitCount: number;
  code: string;
  guests: Guest[];
};

type CreateInvite = Omit<Invite, "id" | "submitCount" | "code">;
type UpdateInvite = Omit<Invite, "code">;

export const createInvite = async (invite: CreateInvite): Promise<Invite> => {
  const response = await fetch(`${process.env.API_URL}/invite`, {
    method: "POST",
    body: JSON.stringify(invite),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateInvite = async (invite: UpdateInvite): Promise<Invite> => {
  const response = await fetch(`${process.env.API_URL}/invite/${invite.id}`, {
    method: "PUT",
    body: JSON.stringify(invite),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const fetchInvites = async (): Promise<Invite[]> => {
  try {
    const response = await fetch(`${process.env.API_URL}/invites`);
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchInvite = async (code: string): Promise<Invite | null> => {
  try {
    const response = await fetch(`${process.env.API_URL}/invite/${code}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteInvite = async (id: number): Promise<void> => {
  try {
    await fetch(`${process.env.API_URL}/invite/${id}`, { method: "DELETE" });
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};
