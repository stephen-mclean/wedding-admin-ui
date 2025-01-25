type Guest = {
  name: string;
  isAttending: boolean;
};

type Invite = {
  id: number;
  notes: string;
  submitCount: number;
  code: string;
  guests: Guest[];
};

export const fetchInvites = async (): Promise<Invite[]> => {
  const response = await fetch(`${process.env.API_URL}/invites`);
  return response.json();
};
