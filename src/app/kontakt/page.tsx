import { ContactForm, PageTitle } from '@/components';
import FormImg from 'public/undraw_form.svg';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - WybierzLokalnie.pl',
  alternates: {
    canonical: 'https://www.wybierzlokalnie.pl/kontakt',
  },
};

const Contact = () => {
  return (
    <>
      <PageTitle title='Skontaktuj się z nami' />
      <div className='grid md:grid-cols-2 gap-20'>
        <div className='animate-move'>
          <Image src={FormImg} alt='form' className='w-full h-full' />
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
