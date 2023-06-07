interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm'; // TODO: 상수화
  onClick?: (e: React.MouseEvent) => void;
}

// TODO: 관리?
const SIZE = {
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
  const { children, disabled, size = 'md', onClick } = props;

  return (
    <button
      className={`box-border flex flex-row items-center justify-center
      rounded-[40px]
      bg-primary-500
      text-white 
      enabled:hover:bg-primary-300
      disabled:opacity-[.52]
      ${SIZE[size].height} 
      ${SIZE[size].paddingX}
      ${SIZE[size].fontSize}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
