import cn from 'classnames';

type BodyType = 'body1' | 'body2' | 'body3';

export type BodyProps = {
  children: React.ReactNode;
  type: BodyType;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: keyof typeof TYPOGRAPHY_COLORS;
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

const Body = ({ children, type, tag: Component = 'span', color, className, ...rest }: BodyProps) => {
  const colorClass = color ? `text-${color}` : 'secondary-900';
  const bodyStyle = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter ${colorClass}`;

  return (
    <Component className={cn(bodyStyle, className)} {...rest}>
      {children}
    </Component>
  );
};

export default Body;
