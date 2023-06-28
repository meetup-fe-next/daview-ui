import { Meta, StoryObj } from '@storybook/react';
import Headline, { HeadlineProps } from '../components/Typography/Headline';

const meta: Meta<typeof Headline> = {
  title: 'Components/Headline',
  component: Headline,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<HeadlineProps>;

export const H1: Story = {
  args: {
    type: 'h1',
    children: 'H1/Pretendard/Bold/48px',
  },
  render: (args) => <Headline {...args} />,
};

export const H2: Story = {
  args: {
    type: 'h2',
    children: 'H2/Pretendard/Bold/34px',
  },
  render: (args) => <Headline {...args} />,
};

export const H3: Story = {
  args: {
    type: 'h3',
    children: 'H3/Pretendard/Bold/24px',
  },
  render: (args) => <Headline {...args} />,
};

export const H4: Story = {
  args: {
    type: 'h4',
    children: 'H4/Pretendard/Bold/20px',
  },
  render: (args) => <Headline {...args} />,
};

export const H5: Story = {
  args: {
    type: 'h5',
    children: 'H5/Pretendard/Bold/16px',
  },
  render: (args) => <Headline {...args} />,
};
