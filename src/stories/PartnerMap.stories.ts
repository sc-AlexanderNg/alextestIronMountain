import type { Meta, StoryObj } from '@storybook/react';
import PartnerMap from 'components/PartnerMap/PartnerMap';

const meta: Meta<typeof PartnerMap> = {
  title: 'Remaining/PartnerMap',
  component: PartnerMap,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.ironmountain.com/residential-shredding-partner-search',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PartnerMap>;

export const Default: Story = {
  args: {},
};
