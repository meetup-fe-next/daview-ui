import cn from 'classnames';

type SubtitleType = 'sub1' | 'sub2' | 'sub3' | 'sub4';

export type SubtitleProps = {
  children: React.ReactNode;
  type: SubtitleType;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  color?: keyof typeof TYPOGRAPHY_COLORS;
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

const Subtitle = ({ children, type, tag: Component = 'div', className, color, ...rest }: SubtitleProps) => {
  const colorClass = color ? `text-${color}` : 'text-secondary-900';
  const subtitleStyle = `font-pretendard ${fontWeights[type]} ${fontSizes[type]} leading-150 tracking-tighter ${colorClass}`;

  return (
    <Component className={cn(subtitleStyle, className)} {...rest}>
      {children}
    </Component>
  );
};

export default Subtitle;
