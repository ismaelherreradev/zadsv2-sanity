import { Inter as FontSans, Familjen_Grotesk as FontSerif } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif',
});
