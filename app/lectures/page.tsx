import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import NavigationTab from '@/components/NavigationTab';
import LecturesContainer from '@/ui/lecturesPage/LecturesContainer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input placeholder="강의명,강의자로 검색" />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <NavigationTab />
        <LecturesContainer />
      </PageLayout.Contents>
    </>
  );
}
