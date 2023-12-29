import type { Meta, StoryObj } from '@storybook/react';

import PartnerSearch from 'components/PartnerSearch/PartnerSearch';

const meta: Meta<typeof PartnerSearch> = {
  title: 'Components/PartnerSearch',
  component: PartnerSearch,
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            height: '50dvh',
          }}
        />
        <Story />
        <div
          style={{
            height: '50dvh',
          }}
        />
      </div>
    ),
  ],
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=333-3414&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PartnerSearch>;

export const Default: Story = {
  args: {
    fields: {
      'Partner Search Title': {
        value: 'Partner Search Title',
      },
      'Partner Search Message': {
        value: 'Partner Search Message',
      },
      'Partner Search Image': {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
    },
  },
};
