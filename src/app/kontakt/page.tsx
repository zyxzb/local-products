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
      <PageTitle
        title='Skontaktuj się z nami'
        subtitle='Zachęcamy do kontaktu. Jeśli jesteś zainteresowany współpracą lub potrzebujesz wsparcia, jesteśmy tu, aby Ci pomóc.'
      />
      <div className='grid md:grid-cols-2 gap-20'>
        <ContactForm />
        <div className='animate-move hidden md:flex'>
          <Image
            src={FormImg}
            alt='form'
            className='w-full h-full'
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
