import Link from 'next/link';
import cn from 'classnames';

import { Add as AddIcon } from '@/components/Icons';
import { CONTENTS_ENROLLMENT_URL } from '@/constants';

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header className={cn(className, 'flex h-[56px] w-full items-center justify-between px-4')}>
      <Link href="/">
        {/* TODO: 로고 디자인 나오면 이미지로 교체하기 */}
        <h1 className="text-lg font-bold">DAVIEW</h1>
      </Link>
      <Link target="_blank" href={CONTENTS_ENROLLMENT_URL}>
        <AddIcon className="h-[20px] w-[20px] cursor-pointer" />
      </Link>
    </header>
  );
}

export default Header;
