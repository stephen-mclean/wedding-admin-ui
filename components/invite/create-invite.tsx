"use client";

import { Invite } from "@/api";
import { createInvite } from "@/api";
import { InviteForm } from "./invite-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateInvite = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (invite: Invite) => {
    setIsLoading(true);
    await createInvite(invite);
    setIsLoading(false);

    router.push("/");
  };

  return <InviteForm onSubmit={onSubmit} disabled={isLoading} />;
};
