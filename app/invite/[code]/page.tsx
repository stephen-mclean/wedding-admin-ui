import { fetchInvite } from "@/api";
import { DeleteButton } from "@/components/invite/delete-button";
import { UpdateInvite } from "@/components/invite/update-invite";

export default async function InvitePage({
  params,
}: {
  params: { code: string };
}) {
  const { code } = await params;
  const invite = await fetchInvite(code);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Invite: {invite?.code}</h1>
        {invite?.id ? <DeleteButton id={invite?.id} /> : null}
      </div>

      {invite ? <UpdateInvite invite={invite} /> : null}
    </div>
  );
}
