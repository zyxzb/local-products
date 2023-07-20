import { Footer, Nav, SearchBar, AuthProvider } from '@/components';
import './globals.css';
import { CreateAdContextProvider } from '@/context/createAddContext';

export const metadata = {
  title:
    'WybierzLokalnie.pl - Odkryj Lokalnych Producentów Żywności w Twojej Okolicy',
  description:
    'Ciesz się świeżymi produktami z Twojego sąsiedztwa. Dołącz do społeczności, która docenia wysoką jakość i autentyczność. Wybierz lokalnie - smakuj lokalnie!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pl'>
      <body>
        <AuthProvider>
          <CreateAdContextProvider>
            <Nav />
            <div className='w-full min-h-[calc(100vh_-_70px)] mx-auto flex flex-col pt-[70px] pb-[80px]'>
              <div className='bg-lightGreen mb-20'>
                <SearchBar />
              </div>
              <main className='w-full max-w-[1200px] mx-auto px-[15px] md:px-[30px] text-darkColor'>
                {children}
              </main>
            </div>
            <Footer />
          </CreateAdContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
