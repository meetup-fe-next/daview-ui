'use client';

import cn from 'classnames';
import { useRouter } from 'next/navigation';
import Subtitle from '@/components/Typography/Subtitle';
import Headline from '@/components/Typography/Headline';
import Button from '@/components/Button';
import SearchSuggestion from '@/ui/mainPage/SearchSuggestion';
import ContributorsProfile from '@/ui/mainPage/ContributorsProfile';
import MainInput from './MainInput';

const MainContainer = () => {
  const router = useRouter();

  return (
    <>
      <section className={cn('mt-16')}>
        <Headline type="h1" color="secondary-900" font="Poppins" weights={500}>
          Find Lecture
        </Headline>
        <Subtitle type="sub1">궁금한 강의 정보를 검색해 보세요.</Subtitle>
        <MainInput />
      </section>
      <SearchSuggestion />
      <Button
        size="lg"
        className={cn('mt-8 w-full')}
        onClick={() => {
          router.push(`/lectures`);
        }}
      >
        전체 강의 보기
      </Button>
      <ContributorsProfile />
    </>
  );
};

export default MainContainer;
