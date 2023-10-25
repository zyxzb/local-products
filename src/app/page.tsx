import { Metadata } from 'next';
import { Suspense } from 'react';

import { HomeBannerSection, DetailsSummary, Loader } from '@/components';
import NewAds from '@/components/NewAds';

import getInitialListings from '@/actions/getInitialListings';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.wybierzlokalnie.pl',
  },
};

export const revalidate = 60;

const Home = async () => {
  const data = await getInitialListings();

  return (
    <div className='flex flex-col gap-10 md:gap-20'>
      <HomeBannerSection />
      <section>
        <div className='mb-10'>
          <h2 className='md:text-xl mb-4 md:mb-8'>
            Dla kogo jest aplikacja WybierzLokalnie.pl?
          </h2>
          <p className='text-sm md:text-base'>
            Aplikacja WybierzLokalnie.pl została stworzona z myślą o tych,
            którzy pragną być bardziej świadomymi konsumentami, wspierać lokalne
            gospodarstwa i cieszyć się najświeższymi, wysokiej jakości
            produktami.
          </p>
        </div>
        <div>
          <h2 className='md:text-xl mb-4 md:mb-8'>
            Korzystanie z aplikacji WybierzLokalnie.pl - dodaj lub wyszukaj
            lokalnych producentów żywnosci.
          </h2>
          <p className='text-sm md:text-base'>
            Aplikacja WybierzLokalnie.pl jest narzędziem zbudowanym dla
            wszystkich miłośników lokalnej żywności. Jej głównym celem jest
            zachęcanie do wsparcia lokalnych producentów żywności oraz
            ułatwienie znalezienia takich producentów w okolicy.
            <strong>
              {` `}
              Aplikacja umożliwia dwie główne funkcje: dodawanie nowych
              producentów lokalnej żywności oraz ich wyszukiwanie.
              {` `}
            </strong>
            Jeśli jesteś lokalnym producentem, możesz skorzystać z aplikacji aby
            promować swoje produkty, dotrzeć do szerszego grona klientów i
            współpracować z lokalną społecznością. Z drugiej strony, jeśli
            jesteś świadomym konsumentem, aplikacja pozwala na szybkie i łatwe
            znalezienie różnorodnych lokalnych produktów spożywczych, wspierając
            tym samym rozwój lokalnej gospodarki i pomagając w budowaniu
            bardziej zrównoważonej społeczności.
          </p>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <NewAds data={data} />
      </Suspense>
      <section>
        <h2 className='md:text-xl mb-4 md:mb-8'>
          Jakie korzyści niesie ze sobą używanie aplikacji WybierzLokalnie.pl?
        </h2>
        <DetailsSummary />
      </section>
    </div>
  );
};
export default Home;
