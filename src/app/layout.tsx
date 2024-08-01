import type { Metadata } from 'next';
import { Poppins, Dancing_Script } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: '400',
  subsets: ['latin'],
});
const dancing_script = Dancing_Script({
  variable: '--font-dancing-script',
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Tripplan',
    default: 'Tripplan',
  },
  description: 'Gerencie sua viagem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.variable} ${dancing_script.variable}`}
    >
      <body className="bg-image-black bg-no-repeat bg-center bg-zinc-950 h-screen text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
