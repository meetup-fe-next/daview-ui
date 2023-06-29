import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Badge, { BadgeProps } from '../components/Badge';
import ExclamationMark from '../components/Icons/ExclamationMark';

export default {
  title: 'components/Badge',
  component: Badge,
} as Meta;

export const Primary = () => <Badge color="primary">Badge</Badge>;

export const Secondary = () => <Badge color="secondary">Badge</Badge>;

export const Blue = () => <Badge color="blue">Badge</Badge>;

export const Gray = () => <Badge color="gray">Badge</Badge>;

type Story = StoryObj<typeof Badge>;

export const LeftIconWithPrimary: Story = {
  render: (args) => <Badge {...args} />,
  args: {
    color: 'primary',
    children: 'Badge',
    type: 'leftIcon',
    leftIcon: <ExclamationMark width={14} height={14} />,
  },
};
