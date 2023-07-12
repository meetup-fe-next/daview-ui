'use client';

import cn from 'classnames';
import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Subtitle from '@/components/Typography/Subtitle';
import Input from '@/components/Input';
import Headline from '@/components/Typography/Headline';
import Button from '@/components/Button';
import SearchSuggestion from '@/ui/mainPage/SearchSuggestion';
import GithubProfile from '@/ui/mainPage/GithubProfile';

const MainContainer = () => {
  return (
    <>
      <section className={cn('mt-16')}>
        <Headline type="h1">Find Lecture</Headline>
        <Subtitle type="sub1">궁금한 강의 정보를 검색해 보세요.</Subtitle>
        <Input readOnly placeholder="강의명,강의자로 검색" />
      </section>
      <SearchSuggestion />
      <Button size="lg" className={cn('mt-8 w-full')}>
        전체 강의 보기
      </Button>
      <GithubProfile />
    </>
  );
};

export default MainContainer;
