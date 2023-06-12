import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm'; // TODO: 상수화
  color?: 'primary' | 'dark'; // TODO: 상수화
  shape?: 'fill' | 'outline'; // TODO: 상수화
  onClick?: (e: React.MouseEvent) => void;
}

const SIZE_STYLE = {
  lg: {
    paddingX: 'px-[16px]',
    height: 'h-[52px]',
    fontSize: 'text-[16px]',
  },
  md: {
    paddingX: 'px-[12px]',
    height: 'h-[40px]',
    fontSize: 'text-[14px]',
  },
  sm: {
    paddingX: 'px-[8px]',
    height: 'h-[28px]',
    fontSize: 'text-[12px]',
  },
} as const;

const Button = (props: ButtonProps) => {
  const { children, disabled, size = 'md', color = 'dark', shape = 'fill', onClick, ...rest } = props;

  return (
    <button
      className={cn(
        'box-border flex flex-row items-center justify-center rounded-[40px]',
        SIZE_STYLE[size].height,
        SIZE_STYLE[size].paddingX,
        SIZE_STYLE[size].fontSize,
        {
          'bg-primary-500': color === 'primary',
          'bg-grey-100': color === 'dark',
        },
        shape === 'fill'
          ? 'text-white disabled:opacity-[.52]'
          : 'border border-grey-100 bg-transparent text-secondary-100 disabled:opacity-[.32]',
      )}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
