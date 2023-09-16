import { Footer, Nav, SearchBar, AuthProvider } from '@/components';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { CreateAdContextProvider } from '@/context/createAddContext';
import { AddToFavoritesContextProvider } from '@/context/addToFavoritesContext';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wybierzlokalnie.pl'),
  title: 'Lokalni Producenci Żywności w Twojej Okolicy - WybierzLokalnie.pl',
  description:
    'Ciesz się świeżymi produktami z Twojego sąsiedztwa ⭐ Dołącz do społeczności, która docenia wysoką jakość i autentyczność ✔️ Wybierz lokalną żywność.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pl'>
      <body>
        <NextTopLoader showSpinner={false} shadow={false} color='#adc698' />
        <AuthProvider>
          <AddToFavoritesContextProvider>
            <CreateAdContextProvider>
              <Nav />
              <div className='w-full min-h-[calc(100vh_-_70px)] mx-auto flex flex-col pt-[70px] pb-10 md:pb-20'>
                <div className='bg-lightGreen mb-10 md:mb-20'>
                  <SearchBar />
                </div>
                <main className='w-full max-w-[1200px] mx-auto px-[15px] md:px-[30px] text-darkColor'>
                  {children}
                </main>
              </div>
              <Footer />
            </CreateAdContextProvider>
          </AddToFavoritesContextProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
