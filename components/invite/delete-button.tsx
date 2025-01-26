"use client";

import { deleteInvite } from "@/api";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const DeleteButton = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    setIsLoading(true);
    await deleteInvite(id);
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Button onClick={onDelete} disabled={isLoading} variant="destructive">
      Delete
    </Button>
  );
};
