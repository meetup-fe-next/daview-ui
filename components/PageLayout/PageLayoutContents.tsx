import Link from 'next/link';
import cn from 'classnames';

type PageLayoutContentsProps = {
  className?: string;
  children: React.ReactNode;
};

function PageLayoutContents({ className, children }: PageLayoutContentsProps) {
  return <article className={cn('w-full px-4', className)}>{children}</article>;
}

export default PageLayoutContents;
