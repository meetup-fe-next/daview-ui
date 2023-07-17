import React from 'react';
import { StoryObj } from '@storybook/react';
import BadgeComponent from '@/components/Badge';

export default {
  title: 'components/Badge',
  component: BadgeComponent,
};

type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
  render: (args) => (
    <div className="flex gap-5">
      <BadgeComponent {...args}>Badge</BadgeComponent>
      <BadgeComponent {...args}>Too Long~~~~~~~~~~!!!!!!!</BadgeComponent>
    </div>
  ),
};
