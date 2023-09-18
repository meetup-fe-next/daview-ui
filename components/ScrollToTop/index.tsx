import cn from 'classnames';
import { THRESHOLD, WAIT } from './ScrollToTop.constants';
import { ArrowUp } from '@/components/Icons';
import { useThrottleScroll } from '@/hooks/useThrottleScroll';

export default function ScrollToTop() {
  const options = {
    threshold: THRESHOLD,
    wait: WAIT,
  };
  const { isVisible, handleScrollToTop } = useThrottleScroll(options);

  return (
    <>
      {isVisible ? (
        <button
          className={cn(
            'fixed bottom-5 right-5 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center gap-1 rounded-full bg-white p-4 shadow-md transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-105',
          )}
          onClick={handleScrollToTop}
        >
          <ArrowUp color="black" size="md" />
        </button>
      ) : null}
    </>
  );
}
