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
      <PageTitle
        title='Logowanie / Rejestracja'
        subtitle='Zaloguj się teraz za pomocą konta Google lub swojego adresu e-mail i ciesz się pełnym dostępem do naszej platformy.'
      />
      <div className='grid sm:grid-cols-2 gap-20 w-full'>
        <LoginForm />
        <RegisterForm />
      </div>
    </>
  );
};

export default Account;
