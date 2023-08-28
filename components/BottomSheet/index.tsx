'use client';
import { useState, useRef, useEffect } from 'react';
import LecturesCard from '../LecturesCard';
import { Lecutre } from '@/types/lectures.type';

export type LectureswithBottomSheetProps = {
  items: Lecutre[];
  total: number;
  isOpen: Boolean;
  onClose: () => void;
};

const BottomSheet = ({ items: lectures, total, isOpen, onClose }: LectureswithBottomSheetProps) => {
  const [isOn, setIsOn] = useState(false);
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (bottomSheetRef.current && !bottomSheetRef.current.contains(event.target)) {
      onClose(); // 외부 클릭을 감지했을 때 onClose 콜백 호출
    }
  };

  const handleCardClick = (objectID: string) => {
    // 상세페이지로 이동하는 로직 추가 필요
  };

  useEffect(() => {
    setIsOn(isOn);
    isOpen = !isOpen;
  }, [isOn]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="top-100%  absolute  z-10 h-screen max-h-[desiredHeight] w-full overflow-y-auto ">
      <div
        ref={bottomSheetRef}
        className={` w-full rounded-2xl border-t shadow-2xl transition-transform  duration-1000 ease-in-out ${
          isOpen ? 'translate-y-0 ' : 'translate-y-full '
        } `}
      >
        {lectures?.map((item: any) => (
          <LecturesCard key={item.objectID} item={item} onClick={handleCardClick}></LecturesCard>
        ))}
      </div>
    </div>
  );
};

export default BottomSheet;
