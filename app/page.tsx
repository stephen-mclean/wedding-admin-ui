import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchInvites } from "@/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const invites = await fetchInvites();

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-4">
      <div className="flex justify-end">
        <Link href="/invite/new">
          <Button>New Invite</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead>Submit Count</TableHead>
            <TableHead>Guests</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invites.map((invite) => (
            <TableRow key={invite.id}>
              <TableCell>
                <Link href={`/invite/${invite.code}`}>{invite.code}</Link>
              </TableCell>
              <TableCell>{invite.notes}</TableCell>
              <TableCell>{invite.submitCount}</TableCell>
              <TableCell>
                {invite.guests.map((guest) => guest.name).join(", ")}
              </TableCell>
            </TableRow>
          ))}
          {invites.length === 0 && (
            <TableRow>
              <TableCell colSpan={4}>No invites found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
