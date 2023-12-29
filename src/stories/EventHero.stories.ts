import type { Meta, StoryObj } from '@storybook/react';

import EventHero from 'components/EventHero/EventHero';

const meta: Meta<typeof EventHero> = {
  title: 'Components/EventHero',
  component: EventHero,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=333-3871&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventHero>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'EventHero',
      dataSource: 'EventHero',
    },
    fields: {
      PageTitle: {
        value: 'Smarter, Not Harder: Clean Up Your Legacy Paper Records',
      },
      ShortDescription: {
        value: 'Subheading lorem ipsum dolor sit amet',
      },
      EventType: {
        fields: {
          Value: {
            value: 'category',
          },
        },
      },
      Image: {
        value: {
          src: 'https://picsum.photos/396/247',
          alt: '',
        },
      },
      Location: {
        value: 'Online',
      },
      StartDate: {
        value: '2023-06-13T05:00:00Z',
      },
      EndDate: {
        value: '2023-06-13T06:00:00Z',
      },
      Time: { value: '6:00 PM EST' },
      Button: {
        value: {
          href: 'https://www.google.com',
          text: 'Register Now',
        },
      },
    },
  },
};

export const DefaultWithEndDate: Story = {
  args: {
    rendering: {
      componentName: 'EventHero',
      dataSource: 'EventHero',
    },
    fields: {
      PageTitle: {
        value: 'Smarter, Not Harder: Clean Up Your Legacy Paper Records',
      },
      ShortDescription: {
        value: 'Subheading lorem ipsum dolor sit amet',
      },
      EventType: {
        fields: {
          Value: {
            value: 'category',
          },
        },
      },
      Image: {
        value: {
          src: 'https://picsum.photos/396/247',
          alt: '',
        },
      },
      Location: {
        value: 'Online',
      },
      StartDate: {
        value: '2023-06-13T05:00:00Z',
      },
      EndDate: {
        value: '2023-06-14T06:00:00Z',
      },
      Time: { value: '6:00 PM EST' },
      Button: {
        value: {
          href: 'https://www.google.com',
          text: 'Register Now',
        },
      },
    },
  },
};
