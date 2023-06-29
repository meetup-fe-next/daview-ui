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
