'use client';

import {
  AddProducerLabelWrapper,
  SelectLocation,
  LeafletMap,
} from '@/components';
import { useCreateAdContext } from '@/context/createAddContext';

const SelectLocationSection = () => {
  const { coord } = useCreateAdContext();

  return (
    <div className='flex flex-col gap-10 mb-10'>
      <AddProducerLabelWrapper text='Wybierz najblizszą dostępną lokalizacje z listy.'>
        <SelectLocation />
      </AddProducerLabelWrapper>
      <LeafletMap coord={coord} />
    </div>
  );
};

export default SelectLocationSection;
