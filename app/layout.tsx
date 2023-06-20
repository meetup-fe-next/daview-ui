import Link from 'next/link';

import './globals.css';

export const metadata = {
  title: 'DAVIEW',
  description: 'CHIC COLLECTION OF RESOURCES',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="mx-4 my-8">
        <ul className="flex gap-4 text-xl border-solid border-2 border-sky-500 mb-8">
          메뉴:
          <li>
            <Link href="/search/lectures">
              <h3>강의 바로가기</h3>
            </Link>
          </li>
          <li>
            <Link href="/search/creators">
              <h3>강의자 바로가기</h3>
            </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
