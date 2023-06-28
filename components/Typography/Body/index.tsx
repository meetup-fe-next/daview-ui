type BodyType = 'body1' | 'body2' | 'body3';

export type BodyProps = {
  children: React.ReactNode;
  type: BodyType;
  tag?: keyof JSX.IntrinsicElements;
};

const fontSizes = {
  body1: 'text-base', // 16px
  body2: 'text-sm', // 14px
  body3: 'text-xs', // 12px
} as const;

const fontWeights = {
  body1: 'font-normal',
  body2: 'font-normal',
  body3: 'font-normal',
} as const;

const Body = ({ children, type, tag: Component = 'span', ...rest }: BodyProps) => {
  const className = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter text-high-emphasis`;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Body;
