'use client';

import LectureCard, { LectureCardItem } from '@/components/LectureCard';
import ScrollToTop from '@/components/ScrollToTop';
import Subtitle from '@/components/Typography/Subtitle';
import { getLectures } from '@/server/lectures';

// 검색 기능 추가되어야 함.
const LectureContainer = async () => {
  const { items, total } = await getLectures();

  const handleCardClick = (uuid: number) => {
    // 상세페이지로 이동하는 로직 추가 필요
  };

  return (
    <>
      <Subtitle type="sub3" className="mb-2 mt-5">{`검색 결과 ${total}건`}</Subtitle>
      <ul>
        {items.map((item: any) => (
          <LectureCard key={item.uuid} item={item} onClick={handleCardClick} />
        ))}
      </ul>
      <ScrollToTop />
    </>
  );
};

export default LectureContainer;
