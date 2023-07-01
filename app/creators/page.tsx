import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';

export default async function Creators() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1>Creators Page</h1>
      </PageLayout.Contents>
    </>
  );
}
