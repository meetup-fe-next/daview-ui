'use client';

import cn from 'classnames';
import { useRef, useState } from 'react';
import { ArrowLeft, CloseCircle, Search } from '@/components/Icons';

export type InputProps = {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClear?: () => void;
  onClickPreviousButton?: () => void;
  onClickSearchButton?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  disabled,
  placeholder,
  value = '',
  onChange,
  onClickClear,
  onClickPreviousButton,
  onClickSearchButton,
  ...rest
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState(value);
  const [isFocus, setIsFocus] = useState(false);

  const isDefaultType = () => {
    return !isFocus && inputValue.length === 0;
    // return true;
  };

  const isActiveType = () => {
    return isFocus;
  };

  const isValueType = () => {
    return inputValue.length > 0;
    // return true;
  };

  return (
    <label className="relative block w-full">
      <span className="sr-only">Search</span>

      {/* 좌측 버튼 */}
      {isDefaultType() && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-[8px]">
          <Search
            className={cn(disabled && 'opacity-[0.32]')}
            color=""
            strokeColor="secondary-900"
            width={24}
            height={24}
          />
        </span>
      )}
      {isActiveType() && (
        <button className="absolute inset-y-0 left-0 flex items-center pl-[8px]">
          <ArrowLeft
            color="black"
            width={24}
            height={24}
            onMouseDown={() => {
              onClickPreviousButton && onClickPreviousButton();
            }}
          />
        </button>
      )}

      <input
        ref={ref}
        className={cn(
          'box-border border-b-2 border-secondary-900 bg-transparent text-[20px] outline-none focus:border-b-primary-500',
          'placeholder:text-secondary-600',
          'w-full py-[8px]',
          'disabled:opacity-[.32]',
          { 'pl-[42px] pr-[15px]': isDefaultType() || isActiveType() },
          { 'pr-[76px]': isValueType() },
          { 'pl-[8px]': !isActiveType() && isValueType() },
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
      {isValueType() && (
        <>
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-[42px]"
            onMouseDown={(e) => {
              e.stopPropagation();
              setValue('');
              onClickClear && onClickClear();
            }}
          >
            <CloseCircle color="grey-700" width={24} height={24} />
          </button>
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-[8px]"
            onMouseDown={(e) => {
              e.stopPropagation();
              onClickSearchButton && onClickSearchButton();
            }}
          >
            <Search width={24} height={24} color="" strokeColor={!isFocus ? 'secondary-900' : 'primary-500'} />
          </button>
        </>
      )}
    </label>
  );
};

export default Input;
