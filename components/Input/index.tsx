'use client';

import cn from 'classnames';
import { useRef, useState } from 'react';
import { CloseCircle, Search } from '@/components/Icons';

export type InputProps = {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClear?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ disabled, placeholder, value = '', onChange, onClickClear, ...rest }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState(value);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label className="relative block w-[343px]">
      <span className="sr-only">Search</span>
      {!isFocus && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-[8px]">
          <Search className={cn(disabled && 'opacity-[0.32]')} color="black" width={24} height={24} />
        </span>
      )}
      <input
        ref={ref}
        className={cn(
          'box-border	border-b-2 border-secondary-900 bg-transparent text-[20px] outline-none focus:border-b-primary-500',
          'placeholder:text-secondary-600',
          'w-full py-[8px] pl-[42px] pr-[15px] focus:-z-10 focus:pl-[8px]',
          'disabled:opacity-[.32]',
        )}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        {...rest}
      />
      {isFocus && inputValue.length > 0 && (
        <button
          className="absolute inset-y-0 right-0 z-10 flex items-center pr-[8px]"
          onMouseDown={() => {
            onClickClear && onClickClear();
          }}
        >
          <CloseCircle color="black" width={24} height={24} />
        </button>
      )}
    </label>
  );
};

export default Input;
