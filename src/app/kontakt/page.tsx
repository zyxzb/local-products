import { ContactForm, PageTitle } from '@/components';
import FormImg from 'public/undraw_form.svg';
import Image from 'next/image';

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
