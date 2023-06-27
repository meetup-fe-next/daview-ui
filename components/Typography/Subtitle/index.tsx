type SubtitleType = 'sub1' | 'sub2' | 'sub3' | 'sub4';

export type SubtitleProps = {
  children: React.ReactNode;
  type: SubtitleType;
};

const fontSizes = {
  sub1: 'text-xl',
  sub2: 'text-lg',
  sub3: 'text-base',
  sub4: 'text-sm',
} as const;

const fontWeights = {
  sub1: 'font-medium',
  sub2: 'font-medium',
  sub3: 'font-medium',
  sub4: 'font-medium',
} as const;

const Subtitle = ({ children, type, ...rest }: SubtitleProps) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const className = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter text-high-emphasis opacity-87`;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Subtitle;
