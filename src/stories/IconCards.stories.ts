import type { Meta, StoryObj } from '@storybook/react';

import IconCards from 'components/IconCards/IconCards';

const meta: Meta<typeof IconCards> = {
  title: 'Components/IconCards',
  component: IconCards,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=287-12602&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconCards>;

const card = {
  fields: {
    Title: {
      value: 'H4 Headline',
    },
    Icon: {
      value: {
        src: 'https://picsum.photos/40/47',
        alt: 'Image alt text',
      },
    },
    Button: {
      value: {
        href: '/test/',
        text: 'Learn more',
        linktype: 'internal',
      },
    },
    Description: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. <ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul> sed do eiusmod tempor incididunt ut labore et dolore',
    },
  },
};

const cardWithLargeLogos = {
  fields: {
    Title: {
      value: 'H4 Headline',
    },
    Icon: {
      value: {
        src: 'https://picsum.photos/400',
        alt: 'Image alt text',
        width: '600',
        height: '600',
      },
    },
    Button: {
      value: {
        href: '/test/',
        text: 'Learn more',
        linktype: 'internal',
      },
    },
    Description: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. <ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul> sed do eiusmod tempor incididunt ut labore et dolore',
    },
  },
};

const germanCard = {
  fields: {
    Title: {
      value: 'Flexible Wiederherstellungsoptionon:',
    },
    Icon: {
      value: {
        src: 'https://picsum.photos/40/47',
        alt: 'Image alt text',
        width: '40',
        height: '47',
      },
    },
    Button: {
      value: {
        href: '/test/',
        text: 'Learn more',
        linktype: 'internal',
      },
    },
    Description: {
      value:
        'Upgrade der Hardware, Virtualisierung, Wechsel von Hypervisoren oder Verschieben von Daten aus der bzw. in die Cloud und zwischen Clouds, fast ohne Ausfallzeiten Verschlusselungstechnologien.',
    },
  },
};

const cardWithoutOptionalContent = {
  fields: {
    Title: {
      value: 'H4 Headline',
    },
    Description: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    },
  },
};

export const withCMSImage: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountains"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value:
          'subtitle goes here<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
      BackgroundImage: {
        value: {
          src: 'https://picsum.photos/2000',
          alt: 'Image alt text',
        },
      },
    },
  },
};

export const withLargeLogos: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountains"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value: 'subtitle goes here',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [
        cardWithLargeLogos,
        cardWithLargeLogos,
        cardWithLargeLogos,
        cardWithLargeLogos,
      ],
      BackgroundImage: {
        value: {
          src: 'https://picsum.photos/2000',
          alt: 'Image alt text',
        },
      },
    },
  },
};

export const withoutOptionalContent: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      CardsList: [
        cardWithoutOptionalContent,
        cardWithoutOptionalContent,
        cardWithoutOptionalContent,
        cardWithoutOptionalContent,
      ],
    },
  },
};

export const withOptionalContentPrimaryButton: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"none"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      CTA: {
        value: {
          text: 'CTA text',
          href: '/test/',
          className: 'primary',
        },
      },
      Description: {
        value: '',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
    },
  },
};

export const withOptionalContentSecondaryButton: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"photo-with-overlay"}}',
      IsTitleLeftAligned: '1',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      CTA: {
        value: {
          text: 'CTA text',
          href: '/test/',
          className: 'primary',
        },
      },
      Description: {
        value:
          'If you have more questions or would like help registering, please contact our Customer Care team',
      },
      Headline: {
        value: 'Bill payment options',
      },
      CardsList: [card, card, card],
    },
  },
};

export const withImageAndOverlayBackground: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"photo-with-overlay"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value: 'subtitle goes right here',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
      BackgroundImage: {
        value: {
          src: 'https://picsum.photos/2000',
        },
      },
    },
  },
};

export const withImageAndOverlayBackgroundDefault: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"photo-with-overlay"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value: 'subtitle goes right here',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
      BackgroundImage: {
        value: {
          src: '',
        },
      },
    },
  },
};

export const withBlueMountainsBackground: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountains"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value: 'subtitle goes here',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
    },
  },
};

export const withGreyMountainsBackground: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountains"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value: 'subtitle goes here',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
    },
  },
};

export const withDiamondsBackground: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"diamonds"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      CardsList: [card, card, card, card],
    },
  },
};

export const withGreyBackground: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey"}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      Description: {
        value: 'subtitle goes here',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
    },
  },
};

export const oneCardPerRow: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '1',
    },
    fields: {
      CardsList: [card, card, card, card, card, card, card, card],
    },
  },
};

export const twoCardsPerRow: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '2',
    },
    fields: {
      CardsList: [card, germanCard, card, germanCard, card, card, card, card],
    },
  },
};

export const threeCardsPerRow: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '3',
    },
    fields: {
      CardsList: [card, card, card, card, card, card, card, card],
    },
  },
};

export const fourCardsPerRow: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
      MaxCardsPerRow: '4',
    },
    fields: {
      CardsList: [card, card, card, card, card, card, card],
    },
  },
};

export const storyOne: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountains"}}',
      DynamicPlaceholderId: '1',
      MaxCardPerRow: '2',
    },
    fields: {
      CTA: {
        value: {
          text: '',
          href: '/test/',
          className: 'primary',
        },
      },
      Description: {
        value: '',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, card, card, card],
    },
  },
};

export const germanStory: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountains"}}',
      DynamicPlaceholderId: '1',
      MaxCardPerRow: '2',
    },
    fields: {
      CTA: {
        value: {
          text: '',
          href: '/test/',
          className: 'primary',
        },
      },
      Description: {
        value: '',
      },
      Headline: {
        value: 'Contact us',
      },
      CardsList: [card, germanCard, card, germanCard],
    },
  },
};

export const storyTwo: Story = {
  args: {
    rendering: {
      componentName: 'IconCards',
      dataSource: 'IconCards',
    },
    params: {
      Theme: '{"Value":{"value":"photo-with-overlay"}}',
      IsTitleLeftAligned: '1',
      DynamicPlaceholderId: '1',
      MaxCardPerRow: '2',
    },
    fields: {
      CTA: {
        value: {
          text: '',
          href: '/test/',
          className: 'primary',
        },
      },
      Description: {
        value:
          'If you have more questions or would like help registering, please contact our Customer Care team',
      },
      Headline: {
        value: 'Bill payment options',
      },
      CardsList: [card, card, card],
    },
  },
};
