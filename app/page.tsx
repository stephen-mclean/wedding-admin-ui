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

export default async function Home() {
  const invites = await fetchInvites();

  return (
    <div className="mx-auto max-w-7xl">
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
        </TableBody>
      </Table>
    </div>
  );
}
