import { CreateAdContextProvider } from '@/context/createAddContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreateAdContextProvider>{children}</CreateAdContextProvider>
      <ToastContainer />
    </>
  );
};

export default Providers;
