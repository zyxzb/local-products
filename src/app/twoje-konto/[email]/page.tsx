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
      <div className='flex flex-col gap-10 md:gap-20'>
        <h2 className='text-xl sm:text-3xl'>
          Witaj, {session?.user?.name}! Poniżej znajdują się dodane przez Ciebie
          ogłoszenia.
        </h2>
        <CardsContainer data={data} />
        <UserInfo />
      </div>
    </>
  );
};

export default Account;
