import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

interface Options {
  threshold: number;
  wait: number;
}

export const useThrottleScroll = (options: Options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsVisible(window.scrollY > options.threshold);
    }, options.wait);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [options]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return { isVisible, handleScrollToTop };
};
