import type { StoryObj } from '@storybook/react';
import ButtonComponent from '@/components/Button';
import { Heart } from '@/components/Icons';

export default {
  title: 'components/Button',
  component: ButtonComponent,
};

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => (
    <div className="flex gap-[20px]">
      <ButtonComponent {...args}></ButtonComponent>
      <ButtonComponent {...args}>
        <Heart />
        {args.children}
      </ButtonComponent>
      <ButtonComponent {...args}>
        {args.children}
        <Heart />
      </ButtonComponent>
      <ButtonComponent {...args}>
        <Heart />
      </ButtonComponent>
    </div>
  ),
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disabled: false,
    children: 'BUTTON',
  },
};
