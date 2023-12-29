import type { Meta, StoryObj } from '@storybook/react';

import FeaturedCards from 'components/FeaturedCards/FeaturedCards';

const meta: Meta<typeof FeaturedCards> = {
  title: 'Components/RelatedResources',
  component: FeaturedCards,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=930-743&t=LH21o67aqvHmeRZK-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedCards>;

const card = {
  url: {
    path: 'https://www.ironmountain.localhost/demo/general-2',
  },
  pageTitle: {
    jsonValue: {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...',
    },
  },
  longDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...',
    },
  },
  displayDate: {
    value: false,
  },
  resourceDate: {
    jsonValue: {
      value: '2023-06-27T18:30:00Z',
    },
  },
  isPremium: {
    value: false,
  },
  image: {
    jsonValue: {
      value: {
        src: 'https://picsum.photos/800/600',
        alt: 'Image Alt Text',
      },
    },
  },
  contentType: {
    jsonValue: {
      fields: {
        Value: {
          value: '',
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

const premiumCard = {
  ...card,
  isPremium: {
    value: true,
  },
};

const relatedResourceCard = {
  ...card,
  contentType: {
    jsonValue: {
      fields: {
        Value: {
          value: 'General',
        },
      },
    },
  },
  shortDescription: {
    jsonValue: {
      value: '',
    },
  },
  longDescription: {
    jsonValue: {
      value: '',
    },
  },
  displayDate: {
    value: true,
  },
};

const premiumRelatedResourceCard = {
  ...relatedResourceCard,
  isPremium: {
    value: true,
  },
};

const fields = {
  data: {
    fields: {
      headline: {
        jsonValue: {
          value: 'Headline',
        },
      },
      button: {
        jsonValue: {
          value: {
            text: 'Lorem Ipsum',
            anchor: 'google.com',
          },
        },
      },
      cards: {
        targetItems: [card, premiumCard, card, premiumCard],
      },
    },
  },
};

export const RelatedResources: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      data: {
        fields: {
          headline: {
            jsonValue: {
              value: 'Headline',
            },
          },
          button: {
            jsonValue: {
              value: {
                text: '',
                anchor: '',
              },
            },
          },
          cards: {
            targetItems: [
              relatedResourceCard,
              premiumRelatedResourceCard,
              relatedResourceCard,
              premiumRelatedResourceCard,
            ],
          },
        },
      },
    },
  },
};

export const FeaturedCardsWithoutBackground: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '1',
    },
    fields,
  },
};

export const Diamonds: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":"diamonds"}}',
      DynamicPlaceholderId: '1',
    },
    fields,
  },
};

export const BlueMountains: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":"blue-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields,
  },
};

export const GreyMountains: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields,
  },
};

export const NoHeadline: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      data: {
        fields: {
          headline: {
            jsonValue: {
              value: '',
            },
          },
          button: {
            jsonValue: {
              value: {
                text: 'Lorem Ipsum',
                anchor: 'google.com',
              },
            },
          },
          cards: {
            targetItems: [card, premiumCard, card, premiumCard],
          },
        },
      },
    },
  },
};

export const NoCTA: Story = {
  args: {
    rendering: {
      componentName: 'FeaturedCards',
      dataSource: 'FeaturedCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      data: {
        fields: {
          headline: {
            jsonValue: {
              value: 'Headline',
            },
          },
          button: {
            jsonValue: {
              value: {
                text: '',
                anchor: '',
              },
            },
          },
          cards: {
            targetItems: [card, premiumCard, card, premiumCard],
          },
        },
      },
    },
  },
};
