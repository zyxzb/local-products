import { Footer, Nav, SearchBar } from '@/app/components';
import './globals.css';

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
        <Nav />
        <div className='w-full max-w-[1200px] min-h-[calc(100vh_-_70px)] mx-auto flex flex-col pt-[70px] px-[15px] md:px-[30px] pb-[30px]'>
          <SearchBar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
