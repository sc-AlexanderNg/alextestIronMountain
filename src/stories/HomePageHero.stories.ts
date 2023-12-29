import type { Meta, StoryObj } from '@storybook/react';
import HomePageHero from 'components/HomePageHero/HomePageHero';

const meta: Meta<typeof HomePageHero> = {
  title: 'Components/HomePageHero',
  component: HomePageHero,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=504%3A169&t=UdjoXaIpAgLk83up-1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomePageHero>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'HomePageHero',
      dataSource: 'HomePageHero',
    },
    params: {
      Theme: '{"Value":{"value":"ltTheme"}}',
    },
    fields: {
      PersonaImage: {
        value: {
          src: 'https://picsum.photos/1000',
          alt: 'Alt Text',
        },
      },

      Title: {
        value: 'Elevate the power of your work',
      },
      Description: {
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      Button: {
        value: {
          text: 'Explore More',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{64B359C9-F4EF-41EA-A353-E587C418DAF1}',
          href: '/',
        },
      },
    },
  },
};
