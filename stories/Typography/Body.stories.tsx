import { Meta, StoryObj } from '@storybook/react';
import BodyComponent, { BodyProps } from '../../components/Typography/Body';

const meta: Meta<typeof BodyComponent> = {
  title: 'Components/Typography',
  component: BodyComponent,
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

export const Body: Story = {
  args: {
    type: 'body1',
    color: 'secondary-900',
    children: 'Body 1/Pretendard/Regular/16px',
  },
  render: (args) => <BodyComponent {...args} />,
};
