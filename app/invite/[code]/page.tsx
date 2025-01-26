import { fetchInvite } from "@/api";

export default async function InvitePage({
  params,
}: {
  params: { code: string };
}) {
  const { code } = await params;
  const invite = await fetchInvite(code);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Invite: {invite?.code}</h1>
    </div>
  );
}
