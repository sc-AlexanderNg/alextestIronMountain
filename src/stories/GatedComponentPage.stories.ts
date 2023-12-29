import type { Meta, StoryObj } from '@storybook/react';
import GatedComponentPage from './GatedComponentPage';

const meta: Meta<typeof GatedComponentPage> = {
  title: 'Components/GatedComponentPage',
  component: GatedComponentPage,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=683-1549&mode=design&t=L2r19aILjwVqkNQz-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GatedComponentPage>;

export const HasGatedContent: Story = {
  args: {
    hasGatedContent: true,
  },
};

export const DoesNotHaveGatedContent: Story = {
  args: {
    hasGatedContent: false,
  },
};

export const HasCookie: Story = {
  args: {
    hasGatedContent: true,
    hasCookie: true,
  },
};

export const DoesNotHaveCookie: Story = {
  args: {
    hasGatedContent: true,
    hasCookie: false,
  },
};

//spoof query string
