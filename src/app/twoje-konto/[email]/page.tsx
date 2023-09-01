import { CardsContainer, PageTitle, UserInfo } from '@/components';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { notFound, redirect } from 'next/navigation';
import { AccountProps } from '@/types';

const getData = async (email: string) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2
    }/api/twoje-konto/${email}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const Account = async ({ params: { email } }: AccountProps) => {
  const session = await getServerSession(authOptions);
  const data = await getData(email);
  const fixedEmail = email.replace('%40', '@');

  if (!session) {
    redirect('/twoje-konto/login');
  }

  if (session?.user?.email !== fixedEmail) {
    redirect(`/twoje-konto/${session.user?.email}`);
  }

  return (
    <>
      <PageTitle title='Twoje konto' />
      <div className='flex items-center justify-between flex-wrap gap-10 mb-10'>
        <h2 className='text-xl sm:text-3xl'>Witaj, {session?.user?.name}</h2>
        <UserInfo />
      </div>
      <div>
        <h2 className='mb-5'>Ogłoszenia dodane przez Ciebie: </h2>
        <CardsContainer data={data} />
      </div>
    </>
  );
};

export default Account;
