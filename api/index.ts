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
  try {
    const response = await fetch(`${process.env.API_URL}/invites`);
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchInvite = async (code: string): Promise<Invite | null> => {
  try {
    const response = await fetch(`${process.env.API_URL}/invite/${code}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
