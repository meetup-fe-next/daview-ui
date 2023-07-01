import cn from 'classnames';

import { BACKGROUND_COLOR } from './PageLayout.constants';

type PageLayoutTopFixedProps = {
  children: React.ReactNode;
  className?: string;
};

function PageLayoutTopFixed({ children, className }: PageLayoutTopFixedProps) {
  const backgroundColor = BACKGROUND_COLOR;

  return <div className={cn('sticky top-0 w-full', backgroundColor, className)}>{children}</div>;
}

export default PageLayoutTopFixed;
