'use client';
import Input from '@/components/Input';
import { useState } from 'react';

export default function InputText() {
  const [value, setValue] = useState('');

  return (
    <>
      <Input
        placeholder="강의명,강의자로 검색"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClickClear={() => {
          setValue('');
        }}
      />
      <h2>{value}</h2>
    </>
  );
}
