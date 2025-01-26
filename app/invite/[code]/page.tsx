import { fetchInvite } from "@/api";

export default async function InvitePage({
  params,
}: {
  params: { code: string };
}) {
  const { code } = await params;
  const invite = await fetchInvite(code);

  return (
    <div>
      <h1>
        {invite?.code} {invite?.id}
      </h1>
    </div>
  );
}
