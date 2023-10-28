interface FormSectionWrapper {
  children: React.ReactNode;
  text: string;
}

const FormSectionWrapper = ({ children, text }: FormSectionWrapper) => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-lg font-semibold'>{text}</p>
      {children}
    </div>
  );
};

export default FormSectionWrapper;
