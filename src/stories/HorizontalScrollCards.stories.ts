import type { Meta, StoryObj } from '@storybook/react';
import HorizontalScrollCards from 'components/HorizontalScrollCards/HorizontalScrollCards';

const meta: Meta<typeof HorizontalScrollCards> = {
  title: 'Components/HorizontalScrollCards',
  component: HorizontalScrollCards,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=542-160&mode=design&t=YxMQUnKHiCnSeCzh-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalScrollCards>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'HorizontalScrollCards',
      dataSource: 'HorizontalScrollCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      Headline: {
        value: 'Headline',
      },
      Cards: [
        {
          fields: {
            Title: {
              value: 'Healthcare',
            },
            Description: {
              value:
                'Track orders and receive alerts about your records inventory using your smartphone.<ul><li>Standard li</li><li><a href="google.com" target="_blank">Link 1</a></li><li>Last li</li></ul>',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article1',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'teal',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Financial Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article2',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Life sciences',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'orange',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Banking Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'light-blue',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Public Sector',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'dark-blue',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Banking Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'green',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Healthcare',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article1',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'teal',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Financial Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article2',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Life sciences',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'orange',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Banking Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'light-blue',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Public Sector',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'dark-blue',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Banking Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'green',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
      ],
    },
  },
};

export const FourCards: Story = {
  args: {
    rendering: {
      componentName: 'HorizontalScrollCards',
      dataSource: 'HorizontalScrollCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      Headline: {
        value: 'Headline',
      },
      Cards: [
        {
          fields: {
            Title: {
              value: 'Healthcare',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article1',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'teal',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Financial Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article2',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Life sciences',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'orange',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Healthcare',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article1',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'teal',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
      ],
    },
  },
};

export const FiveCards: Story = {
  args: {
    rendering: {
      componentName: 'HorizontalScrollCards',
      dataSource: 'HorizontalScrollCards',
    },
    params: {
      Theme: '{"Value":{"value":"grey-mountain"}}',
      DynamicPlaceholderId: '1',
    },
    fields: {
      Headline: {
        value: 'Headline',
      },
      Cards: [
        {
          fields: {
            Title: {
              value: 'Healthcare',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article1',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'teal',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Financial Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article2',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Life sciences',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article3',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'orange',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Healthcare',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article1',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'teal',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: 'Financial Services',
            },
            Description: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            Image: {
              value: {
                src: 'https://picsum.photos/10/10',
                alt: 'article2',
              },
            },
            ImagePosition: {
              fields: {
                Value: {
                  value: 'top',
                },
              },
            },
            CTA: {
              value: {
                text: 'Learn More',
                href: 'http://www.ironmountain.com',
                linktype: 'external',
                url: 'http://www.ironmountain.com',
                anchor: '',
                target: '|Custom',
              },
            },
            CalloutText: {
              value: '5000+ Lorem Ipsum Dolor Sit',
            },
            CalloutColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            CalloutPosition: {
              fields: {
                Value: {
                  value: 'bottom',
                },
              },
            },
          },
        },
      ],
    },
  },
};
