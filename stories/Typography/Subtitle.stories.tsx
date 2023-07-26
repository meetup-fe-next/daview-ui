import { Meta, StoryObj } from '@storybook/react';
import SubtitleComponent, { SubtitleProps } from '../../components/Typography/Subtitle';

const meta: Meta<typeof SubtitleComponent> = {
  title: 'Components/Typography',
  component: SubtitleComponent,
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

export const Subtitle: Story = {
  args: {
    type: 'sub1',
    color: 'secondary-900',
    children: 'Subtitle 1/Pretendard/Medium/20px',
  },
  render: (args) => <SubtitleComponent {...args} />,
};
