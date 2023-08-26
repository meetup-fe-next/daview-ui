'use client';
import CreatorCard from '@/components/CreatorCard';
import Headline from '@/components/Typography/Headline';
import Subtitle from '@/components/Typography/Subtitle';
import BottomSheet from '@/components/BottomSheet';
import { useState } from 'react';

import { type Creators } from '@/types/creators.type';

export type CreatorsProps = {
  creators: Creators | undefined;
};

const CreatorsList = ({ creators }: CreatorsProps) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const toggleBottomSheet = () => {
    setBottomSheetOpen((prevState) => !prevState);
  };

  return (
    <section className="pt-2 " onClick={toggleBottomSheet}>
      <div className=" flex py-[9px] ">
        <Headline type="h4" color="secondary-500" className=" mr-[6px]">
          강의
        </Headline>
        <Headline type="h4" color="grey-900" className=" mr-[6px]">
          크리에이터
        </Headline>
      </div>

      <div>
        {creators?.items && creators?.items?.length > 0 ? (
          <Subtitle type="sub3" color="grey-800" className=" mb-2">
            크리에이터 검색 결과 {creators?.items?.length} 건
          </Subtitle>
        ) : (
          <></>
        )}
      </div>

      {isBottomSheetOpen && <BottomSheet isOpen={isBottomSheetOpen} />}

      {creators?.items?.map((creator) => (
        <CreatorCard key={creator?.name} creator={creator}></CreatorCard>
      ))}

      {/* <CreatorCard></CreatorCard> */}
      {/* {isBottomSheetOpen && <BottomSheet isOpen={isBottomSheetOpen} />} */}
    </section>
  );
};

export default CreatorsList;
