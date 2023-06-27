type BodyType = 'body1' | 'body2' | 'body3';

export type BodyProps = {
  children: React.ReactNode;
  type: BodyType;
};

const fontSizes = {
  body1: 'text-base', // 16px
  body2: 'text-sm', // 14px
  body3: 'text-xs', // 12px
} as const;

const fontWeights = {
  body1: 'font-normal', // Regular
  body2: 'font-normal', // Regular
  body3: 'font-normal', // Regular
} as const;

const Body = ({ children, type, ...rest }: BodyProps) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const className = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter text-high-emphasis opacity-87`;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Body;
