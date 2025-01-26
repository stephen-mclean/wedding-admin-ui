import { CreateInvite } from "@/components/invite/create-invite";

export default async function NewInvitePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">New Invite</h1>
      </div>

      <CreateInvite />
    </div>
  );
}
