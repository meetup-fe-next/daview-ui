import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import SearchPageContainer from '@/ui/search/SearchPageContainer';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1 className="my-4">Search Page</h1>

        <SearchPageContainer />
      </PageLayout.Contents>
    </>
  );
}
