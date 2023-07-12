import cn from 'classnames';

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type HeadlineProps = {
  className?: string;
  children: React.ReactNode;
  type: HeadlineType;
};

const fontSizes = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
};

const fontWeights = {
  h1: 'font-bold', //우진님 확인으로 변경
  h2: 'font-bold',
  h3: 'font-bold',
  h4: 'font-bold',
  h5: 'font-bold',
} as const;

const Headline = ({ children, type, className, ...rest }: HeadlineProps) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const headlineStyle = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter text-high-emphasis`;

  return (
    <Component className={cn(headlineStyle, className)} {...rest}>
      {children}
    </Component>
  );
};

export default Headline;
