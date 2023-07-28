import DetailsSummary from './DetailsSummary';

const HomeTextSection = () => {
  return (
    <section className='flex flex-col'>
      <h2 className='md:text-xl mb-10'>
        Poznaj kilka powodów, dla których warto korzystać z aplikacji
        WybierzLokalnie:
      </h2>
      <DetailsSummary />
    </section>
  );
};

export default HomeTextSection;
