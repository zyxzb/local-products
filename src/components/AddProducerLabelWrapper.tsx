interface AddProducerLabelWrapperProps {
  children: React.ReactNode;
  text: string;
}

const AddProducerLabelWrapper = ({
  children,
  text,
}: AddProducerLabelWrapperProps) => {
  return (
    <div className='p-5 md:p-10 shadow-label rounded-lg'>
      <h2 className='lg:text-xl mb-2'>{text}</h2>
      {children}
    </div>
  );
};

export default AddProducerLabelWrapper;
