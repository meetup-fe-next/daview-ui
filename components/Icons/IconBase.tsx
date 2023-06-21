import cn from 'classnames';
import React, { SVGProps } from 'react';

export type IconProps = {
  /**
   * 기본적으로는 디자인 시스템에 정의된 size token 사용
   * custom 원하는 경우, 밑에 width와 hegight로 px값 사용
   */
  size?: 'sm' | 'md' | 'lg';
  width?: number | string;
  height?: number | string;

  /**
   * 기본적으로 디자인 시스템에 정의된 color token
   */
  color?: string;
  fillColor?: string;
  className?: string;
  children: React.ReactNode;
} & SVGProps<SVGSVGElement>;

const ICON_SIZE = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

const ICON_COLOR: { [key: string]: string } = {
  black: 'fill-black',
  white: 'fill-white',
  'primary-300': 'fill-primary-300',
} as const;

const IconBase = ({ size = 'md', width, height, color = 'black', className, children, ...rest }: IconProps) => {
  return (
    <svg
      className={cn(ICON_COLOR[color], className)}
      width={width ? width : ICON_SIZE[size]}
      height={height ? height : ICON_SIZE[size]}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default IconBase;
