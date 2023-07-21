import { Card, PageTitle, PageWrapper, UserInfo } from '@/components';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { notFound, redirect } from 'next/navigation';
import { AccountProps, CardProps } from '@/types';

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
  const data = res.json();
  return data;
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
    <PageWrapper>
      <div>
        <PageTitle title='Twoje konto' />
        <h2>Witaj, {session.user?.name}</h2>
        <UserInfo />
        <div>
          <h2>Ogłoszenia dodane przez Ciebie: </h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
            {data.map((item: CardProps) => {
              return <Card key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Account;
