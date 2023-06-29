import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';

export default async function Lectures() {
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
