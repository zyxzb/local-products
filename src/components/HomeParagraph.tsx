// replaced by DetailsSummary component

// 'use client';

// import { useIntersectionObserver } from 'usehooks-ts';
// import { useEffect, useRef, useState } from 'react';
// import { HomeDataProps } from '@/types';

// const HomePargaraph = ({ data }: { data: HomeDataProps }) => {
//   const { header, content } = data;

//   const ref = useRef<HTMLParagraphElement | null>(null);
//   const entry = useIntersectionObserver(ref, {});
//   const [isVisible, setIsVisible] = useState(false);

//   // animation when paragraph is visible only at the first time
//   useEffect(() => {
//     if (entry && entry.isIntersecting) {
//       setIsVisible(true);
//     }
//   }, [entry]);

//   return (
//     <p
//       className={`mb-10 transition-all duration-[2500ms] ${
//         isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
//       }`}
//       ref={ref}
//     >
//       <strong>{header}</strong>
//       <br />
//       {content}
//     </p>
//   );
// };

// export default HomePargaraph;
