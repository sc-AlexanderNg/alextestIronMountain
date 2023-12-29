import type { Meta, StoryObj } from '@storybook/react';

import InteractiveInfographic from 'components/InteractiveInfographic/InteractiveInfographic';

const meta: Meta<typeof InteractiveInfographic> = {
  title: 'Components/InteractiveInfographic',
  component: InteractiveInfographic,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=609-174&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveInfographic>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Interactive Infographic',
      dataSource: 'Interactive Infographic',
    },
    fields: {
      data: {
        fields: {
          headline: {
            jsonValue: {
              value: 'Global Lorem ipsum dolor',
            },
          },
          description: {
            jsonValue: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum enim a pulvinar laoreet.<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
            },
          },
          disableAnimation: {
            value: false,
          },

          tabs: {
            targetItems: [
              {
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/100/100?random=1',
                      alt: '',
                      width: '640',
                      height: '480',
                    },
                  },
                },
                icon_5ffaa3d4466a44f9b03ec2ffca49e1d1: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/72',
                      alt: '',
                      width: '72',
                      height: '72',
                    },
                  },
                },
                color: {
                  targetItem: {
                    value: {
                      jsonValue: {
                        value: 'purple',
                      },
                    },
                  },
                },
                headline: { jsonValue: { value: 'Digital Transformation' } },
                description: {
                  jsonValue: {
                    value:
                      '<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
                  },
                },
                cTA: {
                  jsonValue: {
                    value: {
                      text: 'Shop now on express',
                      href: '/demo/Articles/Whitepaper-1',
                    },
                  },
                },
                featuredServices: {
                  targetItems: [
                    {
                      name: 'Service Title1',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 2',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 2',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 3',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 3',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                  ],
                },
              },
              {
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/100/100?random=1',
                      alt: '',
                      width: '640',
                      height: '480',
                    },
                  },
                },
                icon_5ffaa3d4466a44f9b03ec2ffca49e1d1: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/72',
                      alt: '',
                      width: '72',
                      height: '72',
                    },
                  },
                },
                color: {
                  targetItem: {
                    value: {
                      jsonValue: {
                        value: 'green',
                      },
                    },
                  },
                },
                headline: { jsonValue: { value: 'Workplace Transformation' } },
                description: {
                  jsonValue: {
                    value:
                      'Lower risk exposure across your IT assets, personal devices, sensitive files, and records',
                  },
                },
                cTA: {
                  jsonValue: {
                    value: {
                      text: 'Shop now on express',
                      href: '/demo/Articles/Whitepaper-1',
                    },
                  },
                },
                featuredServices: {
                  targetItems: [
                    {
                      name: 'Service Title1',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 2',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 2',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 3',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 3',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                  ],
                },
              },
              {
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/100/100?random=1',
                      alt: '',
                      width: '640',
                      height: '480',
                    },
                  },
                },
                icon_5ffaa3d4466a44f9b03ec2ffca49e1d1: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/72',
                      alt: '',
                      width: '72',
                      height: '72',
                    },
                  },
                },
                color: {
                  targetItem: {
                    value: {
                      jsonValue: {
                        value: 'light-blue',
                      },
                    },
                  },
                },
                headline: { jsonValue: { value: 'Sustainability' } },
                description: {
                  jsonValue: {
                    value:
                      'Lower risk exposure across your IT assets, personal devices, sensitive files, and records',
                  },
                },
                cTA: {
                  jsonValue: {
                    value: {
                      text: 'Shop now on express',
                      href: '/demo/Articles/Whitepaper-1',
                    },
                  },
                },
                featuredServices: {
                  targetItems: [
                    {
                      name: 'Service Title1',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 2',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 2',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 3',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 3',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                  ],
                },
              },
              {
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/100/100?random=1',
                      alt: '',
                      width: '640',
                      height: '480',
                    },
                  },
                },
                icon_5ffaa3d4466a44f9b03ec2ffca49e1d1: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/72',
                      alt: '',
                      width: '72',
                      height: '72',
                    },
                  },
                },
                color: {
                  targetItem: {
                    value: {
                      jsonValue: {
                        value: 'orange',
                      },
                    },
                  },
                },
                headline: { jsonValue: { value: '& IT Security' } },
                description: {
                  jsonValue: {
                    value:
                      'Lower risk exposure across your IT assets, personal devices, sensitive files, and records',
                  },
                },
                cTA: {
                  jsonValue: {
                    value: {
                      text: 'Shop now on express',
                      href: '/demo/Articles/Whitepaper-1',
                    },
                  },
                },
                featuredServices: {
                  targetItems: [
                    {
                      name: 'Service Title1',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 2',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 2',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                    {
                      name: 'Service Title 3',
                      url: {
                        path: '/testpages/service-page',
                      },
                      pageTitle: {
                        value: '',
                      },
                      shortTitle: {
                        value: 'Service Title 3',
                      },
                      metaPageTitle: {
                        value: '',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  },
};
