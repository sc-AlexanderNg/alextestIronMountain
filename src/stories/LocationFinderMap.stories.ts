import type { Meta, StoryObj } from '@storybook/react';

import LocationFinderMap from 'components/LocationFinderMap/LocationFinderMap';

const meta: Meta<typeof LocationFinderMap> = {
  title: 'Components/LocationFinderMap',
  component: LocationFinderMap,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=4490-8762&mode=design&t=xQeDF40TMULTXyTW-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocationFinderMap>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'LocationFinderMap',
      dataSource: 'LocationFinderMap',
    },
    fields: {
      data: {
        fields: {
          multipleCentersIcon: {
            jsonValue: {
              value: {
                src: 'https://picsum.photos/20',
                alt: '',
                width: '16',
                height: '19',
              },
            },
          },
          allCountryList: {
            targetItems: [
              {
                title: {
                  jsonValue: {
                    value: 'North America',
                  },
                },
                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Boston',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Denver',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Kansas City',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'New Jersey',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Ohio',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pennsylvania',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                title: {
                  jsonValue: {
                    value: 'APAC',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Bangaluru',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Delhi',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Hyderabad',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Mumbai',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pune',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Singapore',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                title: {
                  jsonValue: {
                    value: 'EMEA',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Amsterdam',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Frankfurt',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'London',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Madrid',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                title: {
                  jsonValue: {
                    value: 'APAC',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Bangaluru',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Delhi',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Hyderabad',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Mumbai',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pune',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Singapore',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
          title: {
            jsonValue: {
              value: 'Our global data center portfolio',
            },
          },
          pins: {
            targetItems: [
              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '16',
                      height: '19',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Coming Soon',
                  },
                },
              },
              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '39',
                      height: '54',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Data Center',
                  },
                },
              },

              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '40',
                      height: '41',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Multiple Data Centers',
                  },
                },
              },
            ],
          },
          map: {
            targetItems: [
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Phoenix',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Part of 87MW campus facility</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">260+ on-campus ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">All cloud on-site</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">30+ NSPs</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{78DF3D02-3240-41B2-A79C-13CE49075463}',
                      href: '/locationpages/bostonpage',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.455601',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977638',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'AZP-1',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Phoenix',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Part of 87MW campus facility</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">260+ on-campus ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">North America\'s first-ever BREEAM design certified data center</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">30+ NSPs</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
                      href: '/industry-page',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.452438',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977562',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'AZP-2',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Denver',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Downtown location</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">Multiple NSPs, cloud on-ramps</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">240+ customer ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">PUE as low as 1.2</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
                      href: '/industry-page',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.452438',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977562',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'DEN-1',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};

export const WrapAfter6: Story = {
  args: {
    rendering: {
      componentName: 'LocationFinderMap',
      dataSource: 'LocationFinderMap',
    },
    fields: {
      data: {
        fields: {
          multipleCentersIcon: {
            jsonValue: {
              value: {
                src: 'https://picsum.photos/20',
                alt: '',
                width: '16',
                height: '19',
              },
            },
          },
          allCountryList: {
            targetItems: [
              {
                title: {
                  jsonValue: {
                    value: 'North America',
                  },
                },
                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Boston',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Denver',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Kansas City',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'New Jersey',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Ohio',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pennsylvania',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Phoenix',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Scottsdale',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Virginia',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                title: {
                  jsonValue: {
                    value: 'APAC',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Bangaluru',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Delhi',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Hyderabad',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Mumbai',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pune',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Singapore',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },

              {
                title: {
                  jsonValue: {
                    value: 'EMEA',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Amsterdam',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Frankfurt',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'London',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Madrid',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
          title: {
            jsonValue: {
              value: 'Our global data center portfolio',
            },
          },
          pins: {
            targetItems: [
              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '16',
                      height: '19',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Coming Soon',
                  },
                },
              },
              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '39',
                      height: '54',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Data Center',
                  },
                },
              },

              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '40',
                      height: '41',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Multiple Data Centers',
                  },
                },
              },
            ],
          },
          map: {
            targetItems: [
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Phoenix',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Part of 87MW campus facility</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">260+ on-campus ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">All cloud on-site</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">30+ NSPs</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{78DF3D02-3240-41B2-A79C-13CE49075463}',
                      href: '/locationpages/bostonpage',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.455601',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977638',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'AZP-1',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Phoenix',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Part of 87MW campus facility</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">260+ on-campus ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">North America\'s first-ever BREEAM design certified data center</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">30+ NSPs</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
                      href: '/industry-page',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.452438',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977562',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'AZP-2',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Denver',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Downtown location</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">Multiple NSPs, cloud on-ramps</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">240+ customer ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">PUE as low as 1.2</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
                      href: '/industry-page',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.452438',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977562',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'DEN-1',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};

export const WithoutLinks: Story = {
  args: {
    rendering: {
      componentName: 'LocationFinderMap',
      dataSource: 'LocationFinderMap',
    },
    fields: {
      data: {
        fields: {
          multipleCentersIcon: {
            jsonValue: {
              value: {
                src: 'https://picsum.photos/20',
                alt: '',
                width: '16',
                height: '19',
              },
            },
          },
          allCountryList: {
            targetItems: [
              {
                title: {
                  jsonValue: {
                    value: 'North America',
                  },
                },
                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Boston',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'NoLink',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Kansas City',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'New Jersey',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Ohio',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pennsylvania',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Phoenix',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Scottsdale',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Virginia',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                title: {
                  jsonValue: {
                    value: 'APAC',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Bangaluru',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Delhi',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Hyderabad',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Mumbai',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Pune',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Singapore',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },

              {
                title: {
                  jsonValue: {
                    value: 'EMEA',
                  },
                },

                countriesList: {
                  targetItems: [
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Amsterdam',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Frankfurt',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'London',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                    {
                      countryName: {
                        jsonValue: {
                          value: 'Madrid',
                        },
                      },
                      countryItem: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            querystring: '',
                            id: '{43BE5AC4-77B8-4BA6-90EE-4329C251792D}',
                            href: '/data-centers/locations/bengaluru-data-center',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
          title: {
            jsonValue: {
              value: 'Our global data center portfolio',
            },
          },
          pins: {
            targetItems: [
              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '16',
                      height: '19',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Coming Soon',
                  },
                },
              },
              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '39',
                      height: '54',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Data Center',
                  },
                },
              },

              {
                icon_35460b2f50564f439efedeae66b6fd8f: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '40',
                      height: '41',
                    },
                  },
                },
                description: {
                  jsonValue: {
                    value: 'Multiple Data Centers',
                  },
                },
              },
            ],
          },
          map: {
            targetItems: [
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Phoenix',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Part of 87MW campus facility</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">260+ on-campus ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">All cloud on-site</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">30+ NSPs</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{78DF3D02-3240-41B2-A79C-13CE49075463}',
                      href: '/locationpages/bostonpage',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.455601',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977638',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'AZP-1',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Phoenix',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Part of 87MW campus facility</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">260+ on-campus ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">North America\'s first-ever BREEAM design certified data center</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">30+ NSPs</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
                      href: '/industry-page',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.452438',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977562',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'AZP-2',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
              {
                marker: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/20',
                      alt: '',
                      width: '28',
                      height: '28',
                    },
                  },
                },
                location: {
                  jsonValue: {
                    value: 'Denver',
                  },
                },
                details: {
                  jsonValue: {
                    value:
                      '<ul class="list" style="color: #58595b; background-color: #ffffff; margin: 0px 0px 39px; padding: 0px 0px 0px 44px; list-style-type: none; list-style-image: initial;">\n    <li style="margin-bottom: 10px; padding-left: 8px;">Downtown location</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">Multiple NSPs, cloud on-ramps</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">240+ customer ecosystem</li>\n    <li style="margin-bottom: 10px; padding-left: 8px;">PUE as low as 1.2</li>\n</ul>',
                  },
                },
                cTA1: {
                  jsonValue: {
                    value: {
                      text: 'Schedule A Tour',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      querystring: '',
                      id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
                      href: '/industry-page',
                    },
                  },
                },
                latitude: {
                  jsonValue: {
                    value: '33.452438',
                  },
                },
                longitude: {
                  jsonValue: {
                    value: '-111.977562',
                  },
                },
                cTA2: {
                  jsonValue: {
                    value: {
                      href: '/industry-page',
                      text: 'Learn More',
                    },
                  },
                },
                datacenterName: {
                  jsonValue: {
                    value: 'DEN-1',
                  },
                },
                image: {
                  jsonValue: {
                    value: {
                      src: 'https://picsum.photos/400',
                      alt: '',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};
