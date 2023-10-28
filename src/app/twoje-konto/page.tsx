import { redirect } from 'next/navigation';
import { LoginForm, PageTitle, RegisterForm } from '@/components';
import getCurrentUser from '@/actions/getCurrentUser';

const Account = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return redirect(`/twoje-konto/${currentUser.id}`);
  }

  return (
    <>
      <PageTitle title='Logowanie / Rejestracja' />
      <div className='grid sm:grid-cols-2 gap-20 w-full'>
        <LoginForm />
        <RegisterForm />
      </div>
    </>
  );
};

export default Account;
