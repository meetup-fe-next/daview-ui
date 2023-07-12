'use client';

import cn from 'classnames';
import { useMemo, useRef, useState } from 'react';
import { ArrowLeft, CloseCircle, Search } from '@/components/Icons';
import { INPUT_STYLE } from './index.constant';

export type InputProps = {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClear?: () => void;
  onClickPreviousButton?: () => void;
  onClickSearchButton?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  disabled,
  placeholder,
  value = '',
  className,
  onChange,
  onClickClear,
  onClickPreviousButton,
  onClickSearchButton,
  ...rest
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState(value);
  const [isFocus, setIsFocus] = useState(false);

  const isDefaultType = useMemo(() => {
    return !isFocus && inputValue.length === 0;
  }, [isFocus, inputValue]);

  const isActiveType = useMemo(() => {
    return isFocus;
  }, [isFocus]);

  const isValueType = useMemo(() => {
    return inputValue.length > 0;
  }, [inputValue]);

  return (
    <label className="relative block w-full">
      <span className="sr-only">Search</span>

      {isDefaultType && (
        <span className={INPUT_STYLE.LEFT_ICON}>
          <Search className={cn(disabled && 'opacity-[0.32]')} color="" strokeColor="secondary-900" size="md" />
        </span>
      )}
      {isActiveType && (
        <button className={INPUT_STYLE.LEFT_ICON}>
          <ArrowLeft
            color="black"
            size="md"
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
          { 'pl-[42px] pr-[15px]': isDefaultType || isActiveType },
          { 'pr-[76px]': isValueType },
          { 'pl-[8px]': !isActiveType && isValueType },
          className,
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

      {isValueType && (
        <>
          <button
            className={cn(INPUT_STYLE.RIGHT_ICON, 'pr-[42px]')}
            onMouseDown={(e) => {
              e.stopPropagation();
              setValue('');
              onClickClear && onClickClear();
            }}
          >
            <CloseCircle color="grey-700" size="md" />
          </button>
          <button
            className={cn(INPUT_STYLE.RIGHT_ICON, 'pr-[8px]')}
            onMouseDown={(e) => {
              e.stopPropagation();
              onClickSearchButton && onClickSearchButton();
            }}
          >
            <Search size="md" color="" strokeColor={!isFocus ? 'secondary-900' : 'primary-500'} />
          </button>
        </>
      )}
    </label>
  );
};

export default Input;
