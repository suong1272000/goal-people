import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/nav';
import Footer from './_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '골때리는 MZ축구',
  description:
    '지금, 현역 선수와 함께하는 MZ축구 레슨으로 실력 향상의 기회를 놓치지 마세요!',
  keywords:
    '축구 레슨, 축구, MZ축구, 서울, 경기도, 김포, 현역 축구 선수, 코칭, 실력 향상, 리더십, 역동적',
  openGraph: {
    title: '골때리는 MZ축구',
    type: 'website',
    url: 'https://goal-people.vercel.app/',
  },
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
        <section className="bg-black h-full" style={{ marginTop: '68px' }}>
          {children}
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
