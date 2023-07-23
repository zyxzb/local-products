'use client';

import dynamic from 'next/dynamic';
import { AddProducerLabelWrapper, SelectLocation } from '@/components';
import { useCreateAdContext } from '@/context/createAddContext';

const SelectLocationSection = () => {
  const { coord } = useCreateAdContext();

  const Map = dynamic(() => import('./LeafletMap'), {
    loading: () => (
      <div className='w-full h-[500px] grid place-content-center'>
        Loading Map...
      </div>
    ),
    ssr: false,
  });

  return (
    <div className='flex flex-col gap-10 mb-10'>
      <AddProducerLabelWrapper text='Wybierz najblizszą dostępną lokalizacje z listy.'>
        <SelectLocation />
      </AddProducerLabelWrapper>
      {coord ? <Map coord={coord} /> : null}
    </div>
  );
};

export default SelectLocationSection;
