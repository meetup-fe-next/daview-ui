'use client';

import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import CreatorsList from '@/ui/creatorsPage/CreatorsList';
import { searchCreatorsFromAlgolia } from '@/server/controllers/creators';
import { use, useState } from 'react';
import NavigationTab from '@/components/NavigationTab';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const [inputs, setInputs] = useState({
    creators: '',
    lectures: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input id="creators" value={inputs.creators} onChange={handleChange} placeholder="크리에이터 검색" />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <NavigationTab />
        <CreatorsList></CreatorsList>
      </PageLayout.Contents>
    </>
  );
}
