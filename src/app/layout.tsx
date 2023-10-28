// import { Cairo } from 'next/font/google';

import { Footer, Nav, SearchBar, SearchBarLoader } from '@/components';
import Providers from '@/providers/Providers';
import { Suspense } from 'react';

import './globals.css';
import { Metadata } from 'next';

// const cairo = Cairo({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wybierzlokalnie.pl'),
  title: 'Lokalni Producenci Żywności w Twojej Okolicy - WybierzLokalnie.pl',
  description:
    'Świeże produkty z Twojego sąsiedztwa ✔️ Dołącz do społeczności, która docenia wysoką jakość ⚡ Znajdź lokalnych producentów żywności ⭐ Wybierz świadomie.',
  openGraph: {
    title: 'Lokalni Producenci Żywności w Twojej Okolicy - WybierzLokalnie.pl',
    url: 'https://www.wybierzLokalnie.pl',
    description:
      'Lokalni Producenci Żywności w Twojej Okolicy - WybierzLokalnie.pl',
    type: 'website',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pl'>
      <body
      // className={cairo.className}
      >
        <Providers>
          <Nav />
          <div className='w-full min-h-[calc(100vh_-_70px)] mx-auto flex flex-col pt-[70px] pb-10 md:pb-20'>
            <div className='bg-lightGreen mb-10 md:mb-20'>
              <Suspense fallback={<SearchBarLoader />}>
                <SearchBar />
              </Suspense>
            </div>
            <main className='w-full max-w-[1200px] mx-auto px-[15px] md:px-[30px] text-darkColor'>
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
