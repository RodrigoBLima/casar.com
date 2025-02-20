import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '../lib/icons';

const poppins = Poppins({
  variable: '--font-poppins-sans',
  subsets: ['latin'],
  weight: ['500', '600', '400'],
});

export const metadata: Metadata = {
  title: 'RepoRadar',
  description: 'Busque usuários, explore repositórios e favorite seus projetos favoritos no GitHub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
