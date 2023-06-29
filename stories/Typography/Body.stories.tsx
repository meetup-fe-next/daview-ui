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
    children: 'Body 1/Pretendard/Regular/16px',
  },
  render: (args) => <Body {...args} />,
};

export const Body2: Story = {
  args: {
    type: 'body2',
    children: 'Body 2/Pretendard/Regular/14px',
  },
  render: (args) => <Body {...args} />,
};

export const Body3: Story = {
  args: {
    type: 'body3',
    children: 'Body 3/Pretendard/Regular/12px',
  },
  render: (args) => <Body {...args} />,
};
