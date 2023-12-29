import type { Meta, StoryObj } from '@storybook/react';

import ResourceHero from 'components/ResourceHero/ResourceHero';

const meta: Meta<typeof ResourceHero> = {
  title: 'Components/ResourceHero',
  component: ResourceHero,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=333-3414&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResourceHero>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ResourceHero',
      dataSource: 'ResourceHero',
    },
    fields: {
      PageTitle: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      },
      LongDescription: {
        value:
          'Expert tranfer of obsolete audio and video formats to support rockumentary',
      },
      ContentType: {
        fields: {
          Value: { value: 'Whitepaper' },
        },
      },
      ReadTime: {
        value: '6',
      },
      ResourceDate: {
        value: '2023-06-13T05:00:00Z',
      },
      ResourceDownload: {
        value: {
          href: '/story-assets/sample.pdf',
        },
      },
      Image: {
        value: {
          src: 'https://picsum.photos/500',
          alt: '',
        },
      },
      Author: {
        fields: {
          AuthorName: {
            value: 'NIGEL THORNBERRY',
          },
          TitleOrganization: {
            value: 'Title - Organization',
          },
          AuthorPhoto: {
            value: {
              src: 'https://picsum.photos/40',
              alt: '',
            },
          },
        },
      },
    },
  },
};

export const NoDownload: Story = {
  args: {
    rendering: {
      componentName: 'ResourceHero',
      dataSource: 'ResourceHero',
    },
    fields: {
      PageTitle: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      },
      LongDescription: {
        value:
          'Expert tranfer of obsolete audio and video formats to support rockumentary',
      },
      ContentType: {
        fields: {
          Value: { value: 'Whitepaper' },
        },
      },
      ReadTime: {
        value: '6 min read',
      },
      ResourceDate: {
        value: '2023-06-13T05:00:00Z',
      },
      Image: {
        value: {
          src: 'https://picsum.photos/396/247',
          alt: '',
        },
      },
      Author: {
        fields: {
          AuthorName: {
            value: 'NIGEL THORNBERRY',
          },
          TitleOrganization: {
            value: 'Title - Organization',
          },
          AuthorPhoto: {
            value: {
              src: 'https://picsum.photos/40',
              alt: '',
            },
          },
        },
      },
    },
  },
};

export const NoAuthor: Story = {
  args: {
    rendering: {
      componentName: 'ResourceHero',
      dataSource: 'ResourceHero',
    },
    fields: {
      PageTitle: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      },
      LongDescription: {
        value:
          'Expert tranfer of obsolete audio and video formats to support rockumentary',
      },
      ContentType: {
        fields: {
          Value: { value: 'Whitepaper' },
        },
      },
      ReadTime: {
        value: '6 min read',
      },
      ResourceDate: {
        value: '2023-06-13T05:00:00Z',
      },
      ResourceDownload: {
        value: {
          href: '/story-assets/sample.pdf',
        },
      },
      Image: {
        value: {
          src: 'https://picsum.photos/500',
          alt: '',
        },
      },
    },
  },
};
