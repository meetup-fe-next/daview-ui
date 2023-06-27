import Link from 'next/link';
import cn from 'classnames';

import PlusIcon from '@/components/Icons/Plus';
import { CONTENS_ENROLLMENT_URL } from '@/constants';

import { BACKGROUND_COLOR, HEADER_HEIGHT } from './PageLayout.constants';

type PageLayoutHeaderProps = {
  className?: string;
};

function PageLayoutHeader({ className }: PageLayoutHeaderProps) {
  const backgroundColor = BACKGROUND_COLOR;
  const headerHeight = `h-[60px]`;

  return (
    <header
      className={cn(
        'sticky top-0 flex w-full items-center justify-between px-4',
        backgroundColor,
        headerHeight,
        className,
      )}
    >
      <Link href="/">
        {/* TODO: 로고 디자인 나오면 이미지로 교체하기 */}
        <h1 className="text-lg font-bold">DAVIEW</h1>
      </Link>
      <Link target="_blank" href={CONTENS_ENROLLMENT_URL}>
        <PlusIcon className="cursor-pointer" />
      </Link>
    </header>
  );
}

export default PageLayoutHeader;
