import { Meta, StoryObj } from '@storybook/react';
import HeadlineComponent, { HeadlineProps } from '../components/Typography/Headline';

const meta: Meta<typeof HeadlineComponent> = {
  title: 'Typography/Headline',
  component: HeadlineComponent,
  argTypes: {
    type: {
      options: ['Headline', 'h2', 'h3', 'h4', 'h5'],
      control: { type: 'select' }
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
    children: {
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<HeadlineProps>;

export const Headline: Story = {
  args: {
    type: 'h1',
    color: 'secondary-900',
    children: 'H1/Pretendard/bold/48px',
  },
  render: (args) => <HeadlineComponent {...args} />,
};

