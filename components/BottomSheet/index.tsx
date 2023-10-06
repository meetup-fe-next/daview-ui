'use client';
import { useState, useRef, useEffect } from 'react';
import LecturesCard from '../LecturesCard';
import { Lecutre } from '@/types/lectures.type';
import Headline from '../Typography/Headline';
import Subtitle from '../Typography/Subtitle';

export type LectureswithBottomSheetProps = {
  items: Lecutre[];
  total: number;
  isOpen: Boolean;
  onClose: () => void;
  clickedCreator: String;
};

const BottomSheet = ({ items: lectures, total, isOpen, onClose, clickedCreator }: LectureswithBottomSheetProps) => {
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
    <div className=" top-100% absolute h-screen w-full rounded-2xl bg-secondary-200 shadow-bottomsheet ">
      <div
        ref={bottomSheetRef}
        className={`${
          isOpen ? 'animate-[bottom-sheet-up_200ms_ease-in-out] ' : 'animate-[bottom-sheet-down_200ms_ease-in-out]'
        } `}
      >
        <div className=" px-4 pt-4 ">
          {lectures && lectures.length > 0 ? (
            <>
              <Headline type="h4" className=" mb-[10px]">
                {clickedCreator}
              </Headline>
              <div className=" mr-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M1.33334 13.8334V3.16675H14.6667V13.8334H1.33334ZM2.66668 5.83341V12.5001H13.3333V5.83341H2.66668Z"
                    fill="#48464C"
                  />
                </svg>
                <Subtitle type="sub3" tag="span" color="grey-700" className=" pl-1">
                  {lectures[0]?.frontmatter.platforms}
                </Subtitle>

                <div className=" mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                    <path d="M1 0.5V14.5" stroke="#D1D3DC" />
                  </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H2C1.86739 14 1.74021 13.9473 1.64645 13.8536C1.55268 13.7598 1.5 13.6326 1.5 13.5C1.5 13.3674 1.55268 13.2402 1.64645 13.1464C1.74021 13.0527 1.86739 13 2 13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5ZM14.5 4V11C14.5 11.2652 14.3946 11.5196 14.2071 11.7071C14.0196 11.8946 13.7652 12 13.5 12H2.5C2.23478 12 1.98043 11.8946 1.79289 11.7071C1.60536 11.5196 1.5 11.2652 1.5 11V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H13.5C13.7652 3 14.0196 3.10536 14.2071 3.29289C14.3946 3.48043 14.5 3.73478 14.5 4ZM10.25 7.5C10.25 7.41585 10.2287 7.33307 10.1882 7.25932C10.1476 7.18557 10.0892 7.12325 10.0181 7.07812L7.26813 5.32812C7.19254 5.2801 7.10544 5.25326 7.01593 5.25041C6.92642 5.24756 6.83779 5.26879 6.7593 5.3119C6.68081 5.35501 6.61533 5.41841 6.56972 5.49548C6.52411 5.57255 6.50003 5.66045 6.5 5.75V9.25C6.50003 9.33955 6.52411 9.42745 6.56972 9.50452C6.61533 9.58158 6.68081 9.64499 6.7593 9.6881C6.83779 9.73121 6.92642 9.75245 7.01593 9.74959C7.10544 9.74674 7.19254 9.7199 7.26813 9.67188L10.0181 7.92188C10.0892 7.87675 10.1476 7.81443 10.1882 7.74068C10.2287 7.66693 10.25 7.58415 10.25 7.5Z"
                    fill="#48464C"
                  />
                </svg>
                <Subtitle type="sub3" color="grey-700">
                  총 {lectures.length}개
                </Subtitle>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className=" pb-[10px] "></div>
          {lectures?.map((item: any) => (
            <LecturesCard key={item.objectID} item={item} onClick={handleCardClick}></LecturesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
