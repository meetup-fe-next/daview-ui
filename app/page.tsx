import Header from '@/components/Header';
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
      </PageLayout.Contents>
    </>
  );
}
