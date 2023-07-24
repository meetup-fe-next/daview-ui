import { Meta, StoryObj } from '@storybook/react';
import Subtitle, { SubtitleProps } from '../../components/Typography/Subtitle';

const meta: Meta<typeof Subtitle> = {
  title: 'Components/Subtitle',
  component: Subtitle,
  argTypes: {
    type: {
      options: ['sub1', 'sub2', 'sub3', 'sub4'],
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

type Story = StoryObj<SubtitleProps>;

export const Sub1: Story = {
  args: {
    type: 'sub1',
    color: 'secondary-900',
    children: 'Subtitle 1/Pretendard/Medium/20px',
  },
  render: (args) => <Subtitle {...args} />,
};

export const Sub2: Story = {
  args: {
    type: 'sub2',
    children: 'Subtitle 2/Pretendard/Medium/20px',
  },
  render: (args) => <Subtitle {...args} />,
};

export const Sub3: Story = {
  args: {
    type: 'sub3',
    children: 'Subtitle 3/Pretendard/Medium/14px',
  },
  render: (args) => <Subtitle {...args} />,
};

export const Sub4: Story = {
  args: {
    type: 'sub4',
    children: 'Subtitle 4/Pretendard/Medium/12px',
  },
  render: (args) => <Subtitle {...args} />,
};
