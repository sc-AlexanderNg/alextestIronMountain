import type { Meta, StoryObj } from '@storybook/react';
import EmbeddedComponent from 'components/EmbeddedComponent/EmbeddedComponent';

const meta: Meta<typeof EmbeddedComponent> = {
  title: 'Remaining/EmbeddedComponent',
  component: EmbeddedComponent,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmbeddedComponent>;

export const Default: Story = {
  args: {},
};
