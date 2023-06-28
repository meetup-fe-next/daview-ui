import cn from 'classnames';

import PageLayoutContents from './PageLayoutContents';
import PageLayoutTopFixed from './PageLayoutTopFixed';

import { BACKGROUND_COLOR } from './PageLayout.constants';

type PageLayoutProps = {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

function PageLayout({ className, innerClassName, children }: PageLayoutProps) {
  const backgroundColor = BACKGROUND_COLOR;

  return (
    <main className={cn(backgroundColor, className)}>
      <div className={cn('mx-auto min-h-[100vh] min-w-[375px] max-w-[768px]', innerClassName)}>{children}</div>
    </main>
  );
}

PageLayout.Contents = PageLayoutContents;
PageLayout.TopFixed = PageLayoutTopFixed;

export default PageLayout;
