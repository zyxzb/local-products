import Image from 'next/image';
import Link from 'next/link';

import { categories } from '@/data/categories';

const Categories = () => {
  return (
    <section>
      <h2 className='text-lg md:text-xl mb-4 md:mb-8'>
        Popularne kategorie lokalnych porduktów
      </h2>
      <div className='grid grid-cols-5 gap-8 text-base xl:text-lg'>
        {categories.map((category) => (
          <Link href={`/`}>
            <div className='flex flex-col items-center gap-5 border-2 border-lightGreen group h-[200px] p-3'>
              <div className='relative h-full w-full'>
                <Image
                  src={category.icon}
                  alt={category.label}
                  fill={true}
                  className='w-full h-full object-contain p-4'
                />
              </div>
              <div className='group-hover:underline'>{category.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
