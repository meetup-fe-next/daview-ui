'use client';

import { useRouter } from 'next/navigation';

// TODO: 지수님이 만들어주신 Input 작업 머지되면 갈아끼기

function Input({ readOnly, onClick, ...props }: any) {
  const router = useRouter();

  return (
    <input
      className="h-[60px] w-full border-2 border-solid border-gray-500 bg-transparent p-4"
      placeholder="placeholder (Design System Input으로 교체될 예정...)"
      onClick={readOnly ? () => router.push('/search') : onClick}
      {...props}
    />
  );
}

export default Input;
