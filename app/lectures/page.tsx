import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import NavigationTab from '@/components/NavigationTab';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <NavigationTab />
        <h1>Lectures Page</h1>
      </PageLayout.Contents>
    </>
  );
}
