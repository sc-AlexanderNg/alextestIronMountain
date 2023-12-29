import type { Meta, StoryObj } from '@storybook/react';

import ServicesIndustriesCollections from 'components/ServicesIndustriesCollections/ServicesIndustriesCollections';

const meta: Meta<typeof ServicesIndustriesCollections> = {
  title: 'Components/ServicesIndustriesCollection',
  component: ServicesIndustriesCollections,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2842-4141&mode=design&t=7nGe1trjR5BhoI75-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServicesIndustriesCollections>;
const miscCard = {
  url: { path: '/about-us' },

  pageTitle: {
    jsonValue: {
      value: 'About Us',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    },
  },
  shortTitle: {
    jsonValue: {
      value: 'Misc Page Mini Card',
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
  metaPageTitle: {
    jsonValue: {
      value: 'about us',
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
  url: { path: '/about-us' },

  pageTitle: {
    jsonValue: {
      value: 'About Us',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    },
  },
  shortTitle: {
    jsonValue: {
      value: 'Service Mini Card',
    },
  },
  searchResultType: {
    jsonValue: {
      fields: {
        Color: { fields: { Value: { value: 'Teal' } } },
        Value: {
          value: 'Service',
        },
      },
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'about us',
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
  url: { path: '/about-us' },

  pageTitle: {
    jsonValue: {
      value: 'About Us',
    },
  },
  shortDescription: {
    jsonValue: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    },
  },
  shortTitle: {
    jsonValue: {
      value: 'Service Mini Card',
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
  metaPageTitle: {
    jsonValue: {
      value: 'about us',
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

const devCard = {
  url: {
    path: '/content-training-part-1',
  },
  pageTitle: {
    jsonValue: {
      value: 'Content Training Part 1',
    },
  },
  shortTitle: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value: 'Content Training Part 1',
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'Deepa Test Page',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: 'This is the meta description for this testing page. La la la',
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
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  title: '',
};
const devCard1 = {
  url: {
    path: '/content-training-part-2',
  },
  pageTitle: {
    jsonValue: {
      value: 'Content training part 2',
    },
  },
  shortTitle: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value: '',
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
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  title: '',
};

const devCard2 = {
  url: {
    path: '/content-training-part-3',
  },
  pageTitle: {
    jsonValue: {
      value: 'Content Training Part 3',
    },
  },
  shortTitle: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value: 'Content Training Part 2',
    },
  },
  metaPageTitle: {
    jsonValue: {
      value: 'Deepa Test Page',
    },
  },
  metaPageDescription: {
    jsonValue: {
      value: 'This is the meta description for this testing page. La la la',
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
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
  title: '',
};

const devCard3 = {
  url: {
    path: '/content-training-external-page',
  },
  pageTitle: {
    jsonValue: {
      value: 'External Page',
    },
  },
  shortTitle: {
    jsonValue: {
      value: '',
    },
  },
  shortDescription: {
    jsonValue: {
      value: '',
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
  externalLink: {
    jsonValue: {
      value: {
        href: 'https://www.google.com',
        text: 'Google',
        linktype: 'external',
        url: 'https://www.google.com',
        anchor: '',
        target: '',
      },
    },
  },
  title: '',
  openGraphDescription: {
    jsonValue: {
      value: '',
    },
  },
};

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ServicesIndustriesCollections',
      dataSource: 'ServicesIndustriesCollections',
    },
    fields: {
      data: {
        fields: {
          headline: {
            jsonValue: {
              value: '',
            },
          },
          serviceSelection: {
            targetItems: [
              miscCard,
              serviceCard,
              industryCard,
              devCard,
              devCard1,
              devCard2,
              devCard3,
            ],
          },
        },
      },
    },
  },
};
