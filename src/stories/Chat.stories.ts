import type { Meta, StoryObj } from '@storybook/react';
import Chat from 'components/Chat/Chat';

const meta: Meta<typeof Chat> = {
  title: 'Remaining/Chat',
  component: Chat,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=621-1325&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {
  args: {},
};
