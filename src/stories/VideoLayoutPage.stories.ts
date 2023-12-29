import type { Meta, StoryObj } from '@storybook/react';
import VideoLayoutPage from './VideoLayoutPage';

const meta: Meta<typeof VideoLayoutPage> = {
  title: 'Components/VideoLayoutPage',
  component: VideoLayoutPage,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=683-1549&mode=design&t=L2r19aILjwVqkNQz-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoLayoutPage>;

export const Default: Story = {};
