import type { Meta, StoryObj } from '@storybook/react';
import MainNavigation from 'components/MainNavigation/MainNavigation';

const meta: Meta<typeof MainNavigation> = {
  title: 'Remaining/MainNavigation',
  component: MainNavigation,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=206-22802&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainNavigation>;

export const Default: Story = {
  args: {},
};
