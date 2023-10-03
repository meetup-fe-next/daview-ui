import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';

import SearchAutoComplete from '@/ui/searchPage/SearchAutoComplete';
import SearchAutoCompleteLoading from '@/ui/searchPage/SearchAutoComplete/SearchAutoComplete.loading';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />

        {/* TODO: Suspense 왜 안되는지 확인해보기 */}
        <SearchAutoComplete />
      </PageLayout.TopFixed>
    </>
  );
}
