import type { StoryObj } from '@storybook/react';
import Button from '../components/Button';
import { Heart } from '../components/Icons';

export default {
  title: 'components/Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Text: Story = {
  render: (args) => (
    <div className='flex gap-[20px]'>
      <Button {...args}></Button>
      <Button {...args}>
        <Heart />
        {args.children}
      </Button>
      <Button {...args}>
        {args.children}
        <Heart />
      </Button>
      <Button {...args}>
        <Heart />
      </Button>
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
