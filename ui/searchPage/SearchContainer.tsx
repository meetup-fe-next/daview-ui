'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';

function SearchContainer() {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/lectures?search=${value}`);
    }
  };

  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1>Search Page</h1>
      </PageLayout.Contents>
    </>
  );
}

export default SearchContainer;
