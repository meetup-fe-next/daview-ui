import cn from 'classnames';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type HeadlineProps = {
  className?: string;
  children: React.ReactNode;
  type: HeadlineType;
  color?: keyof typeof TYPOGRAPHY_COLORS;
  font?: 'Poppins' | 'Pretendard';
  weights?: 400 | 500 | 600 | 700;
};

const fontSizes = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
} as const;

const fontWeights = {
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
} as const;

const Headline = ({ children, type, className, color, font, weights = 700, ...rest }: HeadlineProps) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const colorClass = color ? `text-${color}` : 'text-secondary-900';

  const fontClass = font === 'Poppins' ? poppins.className : 'font-pretendard';

  const headlineStyle = `${fontClass} ${fontWeights[weights]} ${fontSizes[type]} leading-150 tracking-tighter ${colorClass}`;

  return (
    <Component className={cn(headlineStyle, className)} {...rest}>
      {children}
    </Component>
  );
};

export default Headline;
