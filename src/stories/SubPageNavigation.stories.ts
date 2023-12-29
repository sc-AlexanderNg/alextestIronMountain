import type { Meta, StoryObj } from '@storybook/react';
import SubPageNavigation from 'components/SubPageNavigation/SubPageNavigation';

const meta: Meta<typeof SubPageNavigation> = {
  title: 'Remaining/SubPageNavigation',
  component: SubPageNavigation,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=333%3A3752&t=KlCN4qHxWzVJsDo7-1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SubPageNavigation>;

export const Default: Story = {
  args: {},
};
