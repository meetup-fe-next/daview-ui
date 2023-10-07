import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';

import SearchAutoComplete from '@/ui/searchPage/SearchAutoComplete';

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <SearchAutoComplete />
      </PageLayout.TopFixed>
    </>
  );
}
