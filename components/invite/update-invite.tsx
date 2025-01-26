"use client";

import { Invite } from "@/api";
import { updateInvite } from "@/api";
import { InviteForm } from "./invite-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const UpdateInvite = ({ invite }: { invite: Invite }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (invite: Invite) => {
    setIsLoading(true);
    await updateInvite(invite);
    setIsLoading(false);

    router.push("/");
  };

  return (
    <InviteForm invite={invite} onSubmit={onSubmit} disabled={isLoading} />
  );
};
