import PageLayout from '@/components/PageLayout';
import './globals.css';

export const metadata = {
  title: 'DAVIEW',
  description: 'CHIC COLLECTION OF RESOURCES',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageLayout>
          <PageLayout.Header />
          <PageLayout.Search />
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
