import Header from '@/components/Header';
import Input from '@/components/Input';
import NavigationTab from '@/components/NavigationTab';
import PageLayout from '@/components/PageLayout';
import MainContainer from '@/ui/mainPage/MainContainer';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <MainContainer />
        <h1 className="my-4 text-3xl">Main Page</h1>
        <div className="flex flex-col items-center">
          <Input readOnly />
        </div>
        <NavigationTab />
      </PageLayout.Contents>
    </>
  );
}
