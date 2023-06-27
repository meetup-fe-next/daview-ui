import cn from 'classnames';

import PageLayoutHeader from './PageLayoutHeader';
import PageLayoutContents from './PageLayoutContents';
import PageLayoutSearch from './PageLayoutSearch';

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
      <div className={cn('mx-auto min-h-[100vh] min-w-[375px] max-w-[768px] border-4 border-red-500', innerClassName)}>
        {children}
      </div>
    </main>
  );
}

PageLayout.Header = PageLayoutHeader;
PageLayout.Contents = PageLayoutContents;
PageLayout.Search = PageLayoutSearch;

export default PageLayout;
