'use client';
import CreatorCard from '@/components/CreatorCard';
import Subtitle from '@/components/Typography/Subtitle';
import BottomSheet from '@/components/BottomSheet';
import { use, useEffect, useState } from 'react';

import { Creator } from '@/types/creators.type';
import { type Lecutre } from '@/types/lectures.type';
import { searchLecturesFromAlgolia } from '@/server/controllers/lectures';
import { useSearchParams } from 'next/navigation';
import { searchCreatorsFromAlgolia } from '@/server/controllers/creators';
import NoResultContainer from '../noResult/NoResultContainer';

export type CreatorsProps = {
  creators: Creator[];
};

async function fetchLectures(search: string) {
  const res = await searchLecturesFromAlgolia(search);
  return res;
}
const searchCreators = async (search: string) => {
  const res = await searchCreatorsFromAlgolia(search);

  return res;
};

const CreatorsList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const [itemsByCreators, setItemsByCreators] = useState<Creator[]>([]);
  const [totalByCreators, setTotalByCreators] = useState<number>(0);

  useEffect(() => {
    const fetchCreators = async () => {
      const result = await searchCreators(search);
      setItemsByCreators(result.items);
      setTotalByCreators(result.total);
    };

    fetchCreators();
  }, [search]);

  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [items, setItems] = useState<Lecutre[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [clickedCreator, setClickedCreator] = useState('');

  const toggleBottomSheet = async (name: string) => {
    const { items: fetchedItems, total: fetchedTotal } = await fetchLectures(name);
    setItems(fetchedItems);
    setTotal(fetchedTotal);
    setBottomSheetOpen((prevState) => !prevState);
    setClickedCreator(name);
  };

  return (
    <div>
      <section className="relative pt-2">
        {isBottomSheetOpen && (
          <BottomSheet
            isOpen={isBottomSheetOpen}
            items={items}
            total={total}
            onClose={() => setBottomSheetOpen(false)}
            clickedCreator={clickedCreator}
          />
        )}
        <div>
          {itemsByCreators && itemsByCreators?.length > 0 ? (
            <Subtitle type="sub3" color="grey-800" className=" mb-2 mt-1">
              크리에이터 검색 결과 {totalByCreators} 건
            </Subtitle>
          ) : (
            <NoResultContainer />
          )}
        </div>

        {itemsByCreators.map((creator) => (
          <CreatorCard
            key={creator?.name}
            creator={creator}
            onClick={() => toggleBottomSheet(creator?.name)}
          ></CreatorCard>
        ))}
      </section>
    </div>
  );
};

export default CreatorsList;
