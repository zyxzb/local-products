import localFont from 'next/font/local';

export const exo_2 = localFont({
  src: [
    {
      path: './Exo2-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Exo2-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './Exo2-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: './Exo2-Thin.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: './Exo2-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});
