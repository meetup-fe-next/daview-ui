import cn from 'classnames';

import { BACKGROUND_COLOR, HEADER_HEIGHT } from './PageLayout.constants';

type PageLayoutSearchProps = {
  className?: string;
};

function PageLayoutSearch({ className }: PageLayoutSearchProps) {
  const backgroundColor = BACKGROUND_COLOR;
  const topSize = `top-[${HEADER_HEIGHT}]`;

  return <div className={cn('sticky', backgroundColor, topSize, className)}>input 컴포넌트</div>;
}

export default PageLayoutSearch;
