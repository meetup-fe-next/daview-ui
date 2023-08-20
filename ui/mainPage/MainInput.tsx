'use client';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';

const MainInput = () => {
  const router = useRouter();
  const moveToSearch = () => {
    router.push('/search');
  };
  return <Input readOnly placeholder="강의명,강의자로 검색" onClick={moveToSearch} />;
};

export default MainInput;
