import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import InputContainer from '@/ui/searchPage/InputContainer';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <InputContainer />
      </PageLayout.Contents>
    </>
  );
}
