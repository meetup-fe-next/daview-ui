'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';

type SearchInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setIsDebouncing: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchInput = ({ value, setValue, setIsDebouncing }: SearchInputProps) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 input 요소에 포커스를 설정합니다.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setIsDebouncing(true);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') router.push(`/lectures?search=${value}`);
      }}
      onClickPreviousButton={() => router.push('/')}
      onClickClear={() => setValue('')}
      onClickSearchButton={() => router.push(`/lectures?search=${value}`)}
    />
  );
};

export default SearchInput;
