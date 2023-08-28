'use client';

import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import CreatorsList from '@/ui/creatorsPage/CreatorsList';
import { type Creators, type Creator } from '@/types/creators.type';

import { searchCreatorsFromAlgolia } from '@/server/controllers/creators';
import { useState } from 'react';

import NavigationTab from '@/components/NavigationTab';

export default function Page() {
  const [inputs, setInputs] = useState({
    creators: '',
    lectures: '',
  });

  const [creators, setCreators] = useState<Creators>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  const searchCreators = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const search = inputs.creators;
    const res = await searchCreatorsFromAlgolia(search);

    console.log(res);
    setCreators(res);
  };

  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input
          id="creators"
          value={inputs.creators}
          onChange={handleChange}
          onKeyDown={searchCreators}
          placeholder="크리에이터 검색"
        />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <NavigationTab />
        <h1>Creators Page</h1>
        <CreatorsList creators={creators}></CreatorsList>
      </PageLayout.Contents>
    </>
  );
}
