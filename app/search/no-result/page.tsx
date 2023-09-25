import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import NoResultContainer from '@/ui/noResult/NoResultContainer';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <nav>강의/크리에이터</nav>
        <NoResultContainer />
      </PageLayout.Contents>
    </>
  );
}
