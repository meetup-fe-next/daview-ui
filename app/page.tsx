import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';

export default async function Home() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1>Main Page</h1>
      </PageLayout.Contents>
    </>
  );
}
