import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1>Lectures Detail Page</h1>
      </PageLayout.Contents>
    </>
  );
}
