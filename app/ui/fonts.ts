import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const roboto_slab = Roboto_Slab({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})
