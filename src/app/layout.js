import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '👩‍💻 Portfolio | Kasturi P Shinde',
  description: 'Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen w-full bg-white text-black antialiased overflow-x-hidden flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
