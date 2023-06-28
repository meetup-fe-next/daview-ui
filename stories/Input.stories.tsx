import React, { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import Input from '../components/Input';

export default {
  title: 'components/Input',
  component: Input,
};

const DefaultInput = (props: any) => {
  const [value, setValue] = useState('');

  return (
    <>
      <Input
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClickClear={() => {
          setValue('');
        }}
      />
      <h3>value: {value}</h3>
    </>
  );
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <DefaultInput {...args} />,
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onClickClear: {
      table: {
        disable: true,
      },
    },
    onClickPreviousButton: {
      table: {
        disable: true,
      },
    },
    onClickSearchButton: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disabled: false,
    placeholder: '강의명,강의자로 검색',
  },
};
