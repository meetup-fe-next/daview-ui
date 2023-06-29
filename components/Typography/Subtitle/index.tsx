type SubtitleType = 'sub1' | 'sub2' | 'sub3' | 'sub4';

export type SubtitleProps = {
  children: React.ReactNode;
  type: SubtitleType;
  tag?: keyof JSX.IntrinsicElements;
};

const fontSizes = {
  sub1: 'text-lg', // 20px
  sub2: 'text-base', // 16px
  sub3: 'text-sm', // 14px
  sub4: 'text-xs', // 12px
} as const;

const fontWeights = {
  sub1: 'font-medium',
  sub2: 'font-medium',
  sub3: 'font-medium',
  sub4: 'font-medium',
} as const;

const Subtitle = ({ children, type, tag: Component = 'div', ...rest }: SubtitleProps) => {
  const className = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter text-high-emphasis `;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Subtitle;
