import React from 'react';

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeadlineProps {
  children: React.ReactNode;
  type: HeadlineType;
}

const fontSizes = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
};

const fontWeights = {
  h1: 'font-extrabold',
  h2: 'font-bold',
  h3: 'font-bold',
  h4: 'font-bold',
  h5: 'font-bold',
};

const Headline: React.FC<HeadlineProps> = ({ children, type }) => {
  let Component;

  switch (type) {
    case 'h1':
      Component = 'h1';
      break;
    case 'h2':
      Component = 'h2';
      break;
    case 'h3':
      Component = 'h3';
      break;
    case 'h4':
      Component = 'h4';
      break;
    case 'h5':
      Component = 'h5';
      break;
    default:
      Component = 'h1';
  }
  return React.createElement(
    Component,
    {
      className: `font-pretendard ${fontWeights[type]} font-bold ${fontSizes[type]} leading-150 tracking-tighter text-high-emphasis`,
    },
    children,
  );
};

export default Headline;
