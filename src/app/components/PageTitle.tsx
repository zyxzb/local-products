interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className='mb-20 bg-gradient-to-b from-lightGreen to-darkColor bg-clip-text text-transparent text-5xl md:text-6xl pb-2'>
      {title}
    </h1>
  );
};

export default PageTitle;
