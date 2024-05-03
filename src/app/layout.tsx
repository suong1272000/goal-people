import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/nav';
import Footer from './_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        <section className="bg-black h-full overflow-y-auto ">
          {children}
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
