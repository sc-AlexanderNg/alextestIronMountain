import type { Meta, StoryObj } from '@storybook/react';

import DisplayMap from 'components/DisplayMap/DisplayMap';

const meta: Meta<typeof DisplayMap> = {
  title: 'Components/DisplayMap',
  component: DisplayMap,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2103-1185&t=0oR13r6j0Bc4T3px-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DisplayMap>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'DisplayMap',
      dataSource: 'DisplayMap',
    },
    fields: {
      Title: {
        value: 'Iron Mountain global locations.',
      },
      Children: [
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_APAC.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'APAC',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - APAC',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_Europe_MiddleEast_Africa.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'EMEA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - EMEA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_Latin_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'LATAM',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - LATAM',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_North_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - NA',
                  },
                },
              },
            ],
            Title: {
              value: 'Countries we serve',
            },
          },
        },
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_APAC.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'APAC',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'DC - APAC',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_EuropeMiddleEastAfrica.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'EMEA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'DC - EMEA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_North_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'DC - NA',
                  },
                },
              },
            ],
            Title: {
              value: 'Data Centers',
            },
          },
        },
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Storage-Facilities/Storage_NA.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'SF - NA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Storage-Facilities/Storage_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
            ],
            Title: {
              value: 'NA storage facilities',
            },
          },
        },
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Warehouse-and-Fulfillment-Centers/Warehouse_EuropeMiddleEastAfrica.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'EMEA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'Warehouse - EMEA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Warehouse-and-Fulfillment-Centers/Warehouse_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Warehouse-and-Fulfillment-Centers/Warehouse_North_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'Warehouse - NA',
                  },
                },
              },
            ],
            Title: {
              value: 'Warehouse and fulfillment centers',
            },
          },
        },
      ],
    },
  },
};

export const TabChange: Story = {
  args: {
    rendering: {
      componentName: 'DisplayMap',
      dataSource: 'DisplayMap',
    },
    fields: {
      Title: {
        value: 'Iron Mountain global locations.',
      },
      Children: [
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_APAC.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'APAC',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'DC - APAC',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_EuropeMiddleEastAfrica.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'EMEA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'DC - EMEA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Data-Centers/Data_Centers_North_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'DC - NA',
                  },
                },
              },
            ],
            Title: {
              value: 'Data Centers',
            },
          },
        },
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_APAC.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'APAC',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - APAC',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_Europe_MiddleEast_Africa.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'EMEA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - EMEA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_Latin_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'LATAM',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - LATAM',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Countries-We-Serve/Countries_North_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'CWS - NA',
                  },
                },
              },
            ],
            Title: {
              value: 'Countries we serve',
            },
          },
        },
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Warehouse-and-Fulfillment-Centers/Warehouse_EuropeMiddleEastAfrica.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'EMEA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'Warehouse - EMEA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Warehouse-and-Fulfillment-Centers/Warehouse_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Warehouse-and-Fulfillment-Centers/Warehouse_North_America.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'Warehouse - NA',
                  },
                },
              },
            ],
            Title: {
              value: 'Warehouse and fulfillment centers',
            },
          },
        },
        {
          TemplateId: '675937eb-4c5e-47c7-8c87-81e9ddf328a5',
          Fields: {
            Assets: [
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Storage-Facilities/Storage_NA.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'NA',
                      },
                    },
                  },
                  Description: {
                    value:
                      'Lorem ipsum dolor sit amet. Vel ipsa molestias et commodi eius nam architecto quia qui asperiores deserunt quo voluptates nostrum ab consectetur iure!',
                  },
                  Link: {
                    value: {
                      text: 'Link Title',
                      href: '/',
                    },
                  },
                  Title: {
                    value: 'SF - NA',
                  },
                },
              },
              {
                fields: {
                  MapImage: {
                    value: {
                      src: 'http://localhost:6006/story-assets/Display-Map/Storage-Facilities/Storage_None.svg',
                      alt: '',
                    },
                  },
                  Region: {
                    fields: {
                      Value: {
                        value: 'DEFAULT',
                      },
                    },
                  },
                },
              },
            ],
            Title: {
              value: 'NA storage facilities',
            },
          },
        },
      ],
    },
  },
};
