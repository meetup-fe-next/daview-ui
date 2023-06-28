import cn from 'classnames';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'blue' | 'gray';
  sort?: 'default' | 'leftIcon';
};

const Badge = (props: BadgeProps) => {
  const { children, color = 'primary', sort = 'default', ...rest } = props;

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
    <span
      className={cn(
        'box-border flex h-[24px] flex-row items-center justify-center gap-[10px] rounded-[40px] text-[12px] font-medium',
        COLOR_STYLE[color].bg,
        COLOR_STYLE[color].text,
        sort === 'default' ? 'w-[54px]' : 'w-[72px]',
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Badge;
