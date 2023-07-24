import { Meta, StoryObj } from '@storybook/react';
import Body, { BodyProps } from '../../components/Typography/Body';

const meta: Meta<typeof Body> = {
  title: 'Components/Body',
  component: Body,
  argTypes: {
    type: {
      options: ['body1', 'body2', 'body3'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary-900', 
      'primary-800', 
      'primary-700',
      'primary-600', 
      'primary-500', 
      'primary-400',
      'primary-300', 
      'primary-200', 
      'primary-100',
      'secondary-900',
      'secondary-800',
      'secondary-700',
      'secondary-600',
      'secondary-500',
      'secondary-400',
      'secondary-300',
      'secondary-200',
      'secondary-100',
      'blue-500',
      'grey-700',
      'grey-500',
      'grey-300',
    ],
      control: { type: 'select' }
    },        
    tag: {
      options: ['div', 'span', 'p'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<BodyProps>;

export const Body1: Story = {
  args: {
    type: 'body1',
    color: 'secondary-900',
    children: 'Body 1/Pretendard/Regular/16px',
  },
  render: (args) => <Body {...args} />,
};

export const Body2: Story = {
  args: {
    type: 'body2',
    color: 'secondary-900',
    children: 'Body 2/Pretendard/Regular/14px',
  },
  render: (args) => <Body {...args} />,
};

export const Body3: Story = {
  args: {
    type: 'body3',
    color: 'secondary-900',
    children: 'Body 3/Pretendard/Regular/12px',
  },
  render: (args) => <Body {...args} />,
};
