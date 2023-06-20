import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm'; // TODO: 상수화
  color?: 'primary' | 'dark' | 'white'; // TODO: 상수화
  shape?: 'fill' | 'outline'; // TODO: 상수화
  onClick?: (e: React.MouseEvent) => void;
}

const SIZE_STYLE = {
  lg: {
    padding: 'p-[16px]',
    height: 'h-[52px]',
    fontSize: 'text-[16px]',
    iconSize: '[&>svg]:h-[24px] [&>svg]:w-[24px]',
  },
  md: {
    padding: 'p-[12px]',
    height: 'h-[40px]',
    fontSize: 'text-[14px]',
    iconSize: '[&>svg]:h-[16px] [&>svg]:w-[16px]',
  },
  sm: {
    padding: 'p-[8px]',
    height: 'h-[28px]',
    fontSize: 'text-[12px]',
    iconSize: '[&>svg]:h-[16px] [&>svg]:w-[16px]',
  },
} as const;

const Button = (props: ButtonProps) => {
  const { children, disabled, size = 'md', color = 'dark', shape = 'fill', onClick, ...rest } = props;

  return (
    <button
      className={cn(
        'box-border flex flex-row items-center justify-center gap-x-[8px] rounded-[40px]',
        SIZE_STYLE[size].height,
        SIZE_STYLE[size].padding,
        SIZE_STYLE[size].fontSize,
        SIZE_STYLE[size].iconSize,
        {
          'bg-primary-500': color === 'primary',
          'bg-grey-900': color === 'dark',
          'bg-white': color === 'white',
        },
        {
          'border border-grey-900 bg-transparent text-grey-900 [&>svg]:fill-grey-900': shape === 'outline',
          'text-grey-900 [&>svg]:fill-grey-900': shape === 'fill' && color === 'white',
          'text-white [&>svg]:fill-white': shape === 'fill' && color !== 'white',
        },
        'disabled:opacity-[.32]',
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
