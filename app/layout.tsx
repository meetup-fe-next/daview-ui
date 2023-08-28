import PageLayout from '@/components/PageLayout';
import './globals.css';

export const metadata = {
  title: 'DAVIEW',
  description: 'CHIC COLLECTION OF RESOURCES',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="font-pretendard">
      {/**
       * TODO: 전체 default font, pretendard 안 먹는 이슈 해결하기
       */}
      <body>
        {/**
         * NOTE: PageLayout 컴포넌트를 layout에 감싸주어 모든 페이지 컴포넌트에 적용될 수 있도록 해주었습니다.
         * - PageLayout.TopFixed 안에 들어갈 요소들(Header, Input)이 페이지 별로 상이하여,
         * - PageLayout.TopFixed 컴포넌트는 각 page.tsx에서 선언할 수 있도록 했습니다.
         */}
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
