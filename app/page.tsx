import Header from '@/components/Header';
import NavigationTab from '@/components/NavigationTab';
import PageLayout from '@/components/PageLayout';
import MainContainer from '@/ui/mainPage/MainContainer';
import NavigationTab from '@/components/NavigationTab';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <MainContainer />
        <NavigationTab />
      </PageLayout.Contents>
    </>
  );
}
