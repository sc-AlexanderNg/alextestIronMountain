import type { Meta, StoryObj } from '@storybook/react';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=930-1163&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  args: {},
};
