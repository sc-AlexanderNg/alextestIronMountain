import type { Meta, StoryObj } from '@storybook/react';
import Carousel from 'components/Carousel/Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Molecules/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const style = {
  height: 400,
  width: 300,
  backgroundColor: '#ccc',
};

export const Default: Story = {
  args: {
    children: [
      <div style={style} key={1}>
        Slide 1
      </div>,
      <div style={style} key={2}>
        Slide 2
      </div>,
      <div style={style} key={3}>
        Slide 3
      </div>,
      <div style={style} key={4}>
        Slide 4
      </div>,
      <div style={style} key={5}>
        Slide 5
      </div>,
      <div style={style} key={6}>
        Slide 6
      </div>,
      <div style={style} key={7}>
        Slide 7
      </div>,
      <div style={style} key={8}>
        Slide 8
      </div>,
    ],
  },
};
