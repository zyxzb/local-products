interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className='mb-10 md:mb-20 text-darkColor'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl pb-2'>{title}</h1>
      {subtitle && (
        <p className='text-darkColor text-sm sm:text-md xl:text-lg italic'>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
