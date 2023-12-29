import type { Meta, StoryObj } from '@storybook/react';

import ResourceCollectionHero from 'components/ResourceCollectionHero/ResourceCollectionHero';

const meta: Meta<typeof ResourceCollectionHero> = {
  title: 'Components/ResourceCollectionHero',
  component: ResourceCollectionHero,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=930-743&t=LH21o67aqvHmeRZK-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResourceCollectionHero>;

const Base = {
  rendering: {
    componentName: 'ResourceCollectionHero',
    dataSource: 'ResourceCollectionHero',
  },
  params: {
    Theme: '{"Value":{"value":"blue-mountain"}}',
    DynamicPlaceholderId: '1',
  },
};

const SingleCard = {
  url: {
    path: '/demo/Resources/Datasheet-1',
  },
  pageTitle: {
    jsonValue: {
      value: 'Lorem Ipsum is simply dummy text of the printing.',
    },
  },
  shortTitle: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  },
  longDescription: {
    jsonValue: {
      value:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  },
  displayDate: {
    value: true,
  },
  resourceDate: {
    jsonValue: {
      value: '2023-06-27T18:30:00Z',
    },
  },
  isPremium: {
    value: true,
  },
  image: {
    jsonValue: {
      value: {
        src: 'https://picsum.photos/800/600',
        alt: 'Article1',
        width: '399',
        height: '197',
      },
    },
  },
  contentType: {
    jsonValue: {
      fields: {
        Value: {
          value: 'Whitepaper',
        },
      },
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: '',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: '',
    },
  },
  openGraphImageUrl: {
    jsonValue: {
      value: {},
    },
  },
};

const CardWithList = {
  url: {
    path: '/demo/Resources/Datasheet-1',
  },
  pageTitle: {
    jsonValue: {
      value: 'Lorem Ipsum is simply dummy text of the printing.',
    },
  },
  shortTitle: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        '<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
    },
  },
  longDescription: {
    jsonValue: {
      value:
        '<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
    },
  },
  displayDate: {
    value: true,
  },
  resourceDate: {
    jsonValue: {
      value: '2023-06-27T18:30:00Z',
    },
  },
  isPremium: {
    value: true,
  },
  image: {
    jsonValue: {
      value: {
        src: 'https://picsum.photos/800/600',
        alt: 'Article1',
        width: '399',
        height: '197',
      },
    },
  },
  contentType: {
    jsonValue: {
      fields: {
        Value: {
          value: 'Whitepaper',
        },
      },
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: '',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: '',
    },
  },
  openGraphImageUrl: {
    jsonValue: {
      value: {},
    },
  },
};

export const Default: Story = {
  args: {
    ...Base,
    fields: {
      data: {
        fields: {
          headline: {
            value: 'Resources',
          },
          showDate: {
            value: true,
          },
          resources: {
            targetItems: [SingleCard, SingleCard, SingleCard, SingleCard],
          },
        },
      },
    },
  },
};

export const One: Story = {
  args: {
    ...Base,
    fields: {
      data: {
        fields: {
          headline: {
            value: 'Resources',
          },
          showDate: {
            value: true,
          },
          resources: {
            targetItems: [SingleCard],
          },
        },
      },
    },
  },
};

export const Two: Story = {
  args: {
    ...Base,
    fields: {
      data: {
        fields: {
          headline: {
            value: 'Resources',
          },
          showDate: {
            value: true,
          },
          resources: {
            targetItems: [SingleCard, SingleCard],
          },
        },
      },
    },
  },
};

export const Three: Story = {
  args: {
    ...Base,
    fields: {
      data: {
        fields: {
          headline: {
            value: 'Resources',
          },
          showDate: {
            value: true,
          },
          resources: {
            targetItems: [SingleCard, SingleCard, SingleCard],
          },
        },
      },
    },
  },
};

export const WithLists: Story = {
  args: {
    ...Base,
    fields: {
      data: {
        fields: {
          headline: {
            value: 'Resources',
          },
          resources: {
            targetItems: [
              CardWithList,
              CardWithList,
              CardWithList,
              CardWithList,
            ],
          },
        },
      },
    },
  },
};
