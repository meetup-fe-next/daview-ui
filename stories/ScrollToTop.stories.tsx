import React from 'react';
import type { StoryObj } from '@storybook/react';
import ScrollToTopComponent from '@/components/ScrollToTop';

export default {
  title: 'Components/ScrollToTop',
  component: ScrollToTopComponent,
};

type Story = StoryObj<typeof ScrollToTopComponent>;

export const ScrollToTop: Story = {
  render: () => (
    <>
      <div className="h-screen bg-gray-200">page 1</div>
      <div className="h-screen bg-blue-200">page 2</div>
      <div className="h-screen bg-pink-200">page 3</div>
      <ScrollToTopComponent />
    </>
  ),
};
