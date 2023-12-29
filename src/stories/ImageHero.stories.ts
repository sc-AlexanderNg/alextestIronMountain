import type { Meta, StoryObj } from '@storybook/react';
import ImageHero from 'components/ImageHero/ImageHero';

const meta: Meta<typeof ImageHero> = {
  title: 'Components/ImageHero',
  component: ImageHero,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=333-3752&t=oNKWO7qSU2SILvPj-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageHero>;

export const Shortened: Story = {
  args: {
    rendering: {
      componentName: 'ImageHero',
      dataSource: 'ImageHero',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountain"}}',
      DynamicPlaceholderId: '1',
      ShortenedHero: 'true',
    },
    fields: {
      Background: {
        value: {
          src: 'https://picsum.photos/1600/900',
        },
      },
      Eyebrow: {
        value: 'Image Hero Shortened SubTitle',
      },
      Description: {
        value: '',
      },
      Button: {
        value: {
          text: 'Shop now on express',
          anchor: '',
          linktype: 'internal',
          class: 'icon-shopping-cart',
          title: '',
          querystring: '',
          id: '{64B359C9-F4EF-41EA-A353-E587C418DAF1}',
          href: '/demo/Articles/Whitepaper-1',
        },
      },
      ButtonIcon: {
        fields: {
          Value: {
            value: '',
          },
        },
      },
    },
  },
};

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ImageHero',
      dataSource: 'ImageHero',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      Background: {
        value: {
          src: 'https://picsum.photos/1600/900',
        },
      },
      Eyebrow: {
        value: 'Image Hero SubTitle',
      },
      Description: {
        value:
          'The safest way to destroy unnecessary paper documents containing confidential information, trusted by 73,000 customers.',
      },
      Button: {
        value: {
          text: 'Shop now on express',
          anchor: '',
          linktype: 'internal',
          class: 'icon-shopping-cart',
          title: '',
          querystring: '',
          id: '{64B359C9-F4EF-41EA-A353-E587C418DAF1}',
          href: '/demo/Articles/Whitepaper-1',
        },
      },
      ButtonIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
    },
  },
};
