'use client';
import CreatorCard from '@/components/CreatorCard';
import Headline from '@/components/Typography/Headline';
import Subtitle from '@/components/Typography/Subtitle';
import BottomSheet from '@/components/BottomSheet';
import { use, useState } from 'react';

import { type Creators } from '@/types/creators.type';
import { type Lectures, type Lecutre } from '@/types/lectures.type';
import { searchLecturesFromAlgolia } from '@/server/controllers/lectures';

export type CreatorsProps = {
  creators: Creators | undefined;
};

async function fetchLectures(search: string) {
  const res = await searchLecturesFromAlgolia(search);
  return res;
}

const CreatorsList = ({ creators }: CreatorsProps) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [items, setItems] = useState<Lecutre[]>([]);
  const [total, setTotal] = useState<number>(0);

  const toggleBottomSheet = async (name: string) => {
    const { items: fetchedItems, total: fetchedTotal } = await fetchLectures(name);
    setItems(fetchedItems);
    setTotal(fetchedTotal);
    setBottomSheetOpen((prevState) => !prevState);
  };

  return (
    <section className="relative pt-2">
      <div>
        {creators?.items && creators?.items?.length > 0 ? (
          <Subtitle type="sub3" color="grey-800" className=" mb-2">
            크리에이터 검색 결과 {creators?.items?.length} 건
          </Subtitle>
        ) : (
          <></>
        )}
      </div>

      {isBottomSheetOpen && (
        <BottomSheet isOpen={isBottomSheetOpen} items={items} total={total} onClose={() => setBottomSheetOpen(false)} />
      )}

      {creators?.items?.map((creator) => (
        <CreatorCard
          key={creator?.name}
          creator={creator}
          onClick={() => toggleBottomSheet(creator?.name)}
        ></CreatorCard>
      ))}
    </section>
  );
};

export default CreatorsList;
