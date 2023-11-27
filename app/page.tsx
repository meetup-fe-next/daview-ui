import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@/utils/tanstack-query/getQueryClient';
import { getContributors } from '@/server/controllers/contributors';
import { contributorKeys } from '@/hooks/queries/contributor';

import Header from '@/components/Header';
import PageLayout from '@/components/PageLayout';
import MainContainer from '@/ui/mainPage/MainContainer';

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: contributorKeys.ALL(), queryFn: getContributors });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <MainContainer />
      </PageLayout.Contents>
    </Hydrate>
  );
}
