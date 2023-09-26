'use client';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';

import LecturesCard from '@/components/LecturesCard';
import Subtitle from '@/components/Typography/Subtitle';

import { searchLecturesFromAlgolia } from '@/server/controllers/lectures';
import ScrollToTop from '@/components/ScrollToTop';
import NoResultContainer from '../noResult/NoResultContainer';

async function fetchLectures(search: string) {
  const res = await searchLecturesFromAlgolia(search);
  return res;
}

/**
 * NOTE: 컴포넌트에 async 함수로 선언하면 무한루프에 빠지는 이슈가 있음.
 */
export default function LecturesContainer() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const { items, total } = use(fetchLectures(search));

  const handleCardClick = (objectID: string) => {
    // 상세페이지로 이동하는 로직 추가 필요
  };

  return (
    <>
      <Subtitle type="sub3" className="mb-2 mt-5">{`강의 검색 결과 ${total}건`}</Subtitle>
      {items.length > 0 ? (
        <ul>
          {items.map((item: any) => (
            <li key={item.objectID}>
              <LecturesCard key={item.objectID} item={item} onClick={handleCardClick} />
            </li>
          ))}
        </ul>
      ) : (
        <NoResultContainer />
      )}
      <ScrollToTop />
    </>
  );
}
