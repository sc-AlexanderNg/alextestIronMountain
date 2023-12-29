import type { Meta, StoryObj } from '@storybook/react';
import Layout from 'src/Layout-test';

const meta: Meta<typeof Layout> = {
  title: 'Layouts/Layout',
  component: Layout,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=621-1325&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {},
};
