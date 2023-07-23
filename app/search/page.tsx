import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1>Search Page</h1>
      </PageLayout.Contents>
    </>
  );
}
