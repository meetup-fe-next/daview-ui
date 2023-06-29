import cn from 'classnames';

export type BadgeProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'blue' | 'gray';
  type?: 'default' | 'leftIcon';
  leftIcon?: React.ReactNode;
};

const Badge = (props: BadgeProps) => {
  const { children, color = 'primary', type = 'default', leftIcon, ...rest } = props;

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
  };

  return (
    <>
      <span
        className={cn(
          'box-border flex h-[24px] flex-row items-center justify-center gap-1 rounded-[40px] text-[12px] font-medium',
          COLOR_STYLE[color].bg,
          COLOR_STYLE[color].text,
          type === 'default' ? 'w-[54px]' : 'w-[72px]',
        )}
        {...rest}
      >
        {leftIcon && <span>{leftIcon}</span>}
        <span className="overflow-hidden truncate whitespace-nowrap">{children}</span>
      </span>
    </>
  );
};

export default Badge;
