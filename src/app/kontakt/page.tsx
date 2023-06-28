import { ContactForm, PageTitle } from '@/components';
import FormImg from 'public/undraw_form.svg';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      <PageTitle title='Skontaktuj się z nami' />
      <div className='flex justify-center items-center flex-col md:flex-row gap-20'>
        <div className='animate-move -z-10 w-full'>
          <Image src={FormImg} alt='form' className='w-full h-full' />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
