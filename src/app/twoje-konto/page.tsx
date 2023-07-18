import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Account = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/twoje-konto/login');
  }

  if (session) {
    redirect(`/twoje-konto/${session.user?.email}`);
  }
};

export default Account;
