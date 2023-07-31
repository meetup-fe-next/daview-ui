import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import LectureContainer from '@/ui/lecturePage/LectureContainer';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        {/* @ts-expect-error Async Server Component */}
        <LectureContainer />
      </PageLayout.Contents>
    </>
  );
}
