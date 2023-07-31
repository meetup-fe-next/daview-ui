import cn from 'classnames';
import Subtitle from '../Typography/Subtitle';
// import Subtitle from '@/components/Typography/Subtitle';
// Subtitle으로 변경 필요

type BadgeProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'blue' | 'gray';
  className?: string;
};

const Badge = (props: BadgeProps) => {
  const { children, color = 'gray', className, ...rest } = props;

  const COLOR_STYLE = {
    primary: {
      bg: 'bg-primary-100',
      text: 'text-primary-500',
    },
    secondary: {
      bg: 'bg-secondary-300',
      text: 'text-secondary-700',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-500',
    },
    gray: {
      bg: 'bg-grey-50',
      text: 'text-grey-700',
    },
  } as const;

  return (
    <>
      <span
        className={cn(
          'box-border flex h-[24px] w-[54px] flex-row items-center justify-center rounded-[40px] px-2 py-[3px] text-left text-xs font-medium',
          COLOR_STYLE[color].bg,
          COLOR_STYLE[color].text,
          {
            'bg-opacity-60': color === 'gray',
          },
          className,
        )}
        {...rest}
      >
        <Subtitle type="sub4" className="overflow-hidden truncate whitespace-nowrap">
          {children}
        </Subtitle>
      </span>
    </>
  );
};

export default Badge;
