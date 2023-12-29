import type { Meta, StoryObj } from '@storybook/react';

import MiniCard from 'components/MiniCard/MiniCard';

const meta: Meta<typeof MiniCard> = {
  title: 'Components/MiniCard',
  component: MiniCard,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=621-731&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MiniCard>;

const miscCard = {
  url: { path: '/test/' },
  shortTitle: {
    jsonValue: {
      value: 'Misc Page Mini Card',
    },
  },
  pageTitle: {
    jsonValue: {
      value: '',
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'misc card',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: '',
    },
  },
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    },
  },
  searchResultType: {
    jsonValue: {
      fields: {
        Color: { fields: { Value: { value: 'Dark Blue' } } },
        Value: {
          value: 'Misc',
        },
      },
    },
  },
  externalLink: {
    jsonValue: {
      value: {
        href: 'https://www.google.com/',
        text: 'Go to google',
        linktype: 'external',
        url: 'https://www.google.com/',
        anchor: '',
        title: 'Go to google',
        target: '',
      },
    },
  },
  title: '',
};

const serviceCard = {
  url: { path: '/test/' },
  shortTitle: {
    jsonValue: {
      value: 'Service Mini Card',
    },
  },
  pageTitle: {
    jsonValue: {
      value: '',
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'service mini card',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: '',
    },
  },
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    },
  },
  searchResultType: {
    jsonValue: {
      fields: {
        Color: { fields: { Value: { value: 'Teal' } } },
        Value: {
          value: 'Production',
        },
      },
    },
  },
  externalLink: {
    jsonValue: {
      value: {
        href: 'https://www.google.com/',
        text: 'Go to google',
        linktype: 'external',
        url: 'https://www.google.com/',
        anchor: '',
        title: 'Go to google',
        target: '',
      },
    },
  },
  title: '',
};

const industryCard = {
  url: { path: '/test/' },
  shortTitle: {
    jsonValue: {
      value: 'Industry Mini Card',
    },
  },
  pageTitle: {
    jsonValue: {
      value: '',
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'misc card',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: '',
    },
  },
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },

  searchResultType: {
    jsonValue: {
      fields: {
        Color: { fields: { Value: { value: 'Purple' } } },
        Value: {
          value: 'Industry',
        },
      },
    },
  },
  externalLink: {
    jsonValue: {
      value: {
        href: 'https://www.google.com/',
        text: 'Go to google',
        linktype: 'external',
        url: 'https://www.google.com/',
        anchor: '',
        title: 'Go to google',
        target: '',
      },
    },
  },
  title: '',
};

const longCard = {
  url: { path: '/test/' },
  shortTitle: {
    jsonValue: {
      value: 'Service Mini Card with extra long title lorem ipsum',
    },
  },
  pageTitle: {
    jsonValue: {
      value: '',
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'misc card',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: '',
    },
  },
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    },
  },
  searchResultType: {
    jsonValue: {
      fields: {
        Color: { fields: { Value: { value: 'Dark Blue' } } },
        Value: {
          value: 'Service',
        },
      },
    },
  },
  externalLink: {
    jsonValue: {
      value: {
        href: 'https://www.google.com/',
        text: 'Go to google',
        linktype: 'external',
        url: 'https://www.google.com/',
        anchor: '',
        title: 'Go to google',
        target: '',
      },
    },
  },
  title: '',
};

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'MiniCard',
      dataSource: 'MiniCard',
    },
    fields: {
      data: {
        fields: {
          railVariation: {
            value: '',
          },
          headline: {
            jsonValue: {
              value: 'Related general services',
            },
          },
          serviceSelection: {
            targetItems: [
              serviceCard,
              serviceCard,
              serviceCard,
              serviceCard,
              serviceCard,
            ],
          },
        },
      },
    },
  },
};

export const LeftRail: Story = {
  args: {
    rendering: {
      componentName: 'MiniCard',
      dataSource: 'MiniCard',
    },
    fields: {
      data: {
        fields: {
          railVariation: {
            value: '',
          },
          headline: {
            jsonValue: {
              value: 'Related general services',
            },
          },
          serviceSelection: {
            targetItems: [
              serviceCard,
              serviceCard,
              serviceCard,
              serviceCard,
              serviceCard,
            ],
          },
        },
      },
    },
  },
};

export const RightRail: Story = {
  args: {
    rendering: {
      componentName: 'MiniCard',
      dataSource: 'MiniCard',
    },
    fields: {
      data: {
        fields: {
          railVariation: {
            value: '',
          },
          headline: {
            jsonValue: {
              value: 'Related general services',
            },
          },
          serviceSelection: {
            targetItems: [
              serviceCard,
              serviceCard,
              serviceCard,
              serviceCard,
              serviceCard,
            ],
          },
        },
      },
    },
  },
};

export const WithALongContentCard: Story = {
  args: {
    rendering: {
      componentName: 'MiniCard',
      dataSource: 'MiniCard',
    },
    fields: {
      data: {
        fields: {
          railVariation: {
            value: '',
          },
          headline: {
            jsonValue: {
              value: 'Related general services',
            },
          },
          serviceSelection: {
            targetItems: [longCard, longCard, longCard],
          },
        },
      },
    },
  },
};

export const IndustryCardColor: Story = {
  args: {
    rendering: {
      componentName: 'MiniCard',
      dataSource: 'MiniCard',
    },
    fields: {
      data: {
        fields: {
          railVariation: {
            value: '',
          },
          headline: {
            jsonValue: {
              value: 'Related general services',
            },
          },
          serviceSelection: {
            targetItems: [industryCard, industryCard, industryCard],
          },
        },
      },
    },
  },
};

export const MiscPageCardColor: Story = {
  args: {
    rendering: {
      componentName: 'MiniCard',
      dataSource: 'MiniCard',
    },
    fields: {
      data: {
        fields: {
          railVariation: {
            value: '',
          },
          headline: {
            jsonValue: {
              value: 'Related general services',
            },
          },
          serviceSelection: { targetItems: [miscCard, miscCard, miscCard] },
        },
      },
    },
  },
};
