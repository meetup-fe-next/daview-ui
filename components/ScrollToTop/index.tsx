'use client';

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ArrowUp } from '@/components/Icons';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return isVisible ? (
    <button
      className={cn(
        'fixed bottom-5 right-5 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center gap-1 rounded-full bg-white p-4 shadow-md transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-105',
      )}
      onClick={handleToggle}
    >
      <ArrowUp color="black" size="md" />
    </button>
  ) : null;
}
