import getCurrentUser from '@/actions/getCurrentUser';
import { redirect } from 'next/navigation';

const Account = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect('/twoje-konto/login');
  }

  return redirect(`/twoje-konto/${currentUser?.id}`);
};

export default Account;
