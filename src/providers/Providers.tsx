import { AuthProvider } from '@/components';
import { AddToFavoritesContextProvider } from '@/context/addToFavoritesContext';
import { CreateAdContextProvider } from '@/context/createAddContext';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader showSpinner={false} shadow={false} color='#adc698' />
      <AuthProvider>
        <AddToFavoritesContextProvider>
          <CreateAdContextProvider>{children}</CreateAdContextProvider>
        </AddToFavoritesContextProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default Providers;
