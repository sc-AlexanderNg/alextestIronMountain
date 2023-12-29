import type { Meta, StoryObj } from '@storybook/react';

import Navigation from 'components/Navigation/Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {},
  decorators: [
    (Story) => (
      <>
        <header className="sticky-header" data-is-sticky>
          <div id="header">
            <Story />
          </div>
        </header>
        <main>
          <div
            data-is-breadcrumb="true"
            style={{
              backgroundColor: 'purple',
              height: '50px',
              width: '100dvw',
            }}
          />
          <div style={{ backgroundColor: 'blue', height: 1000, width: 100 }} />
          <div
            data-is-search-header="true"
            style={{
              backgroundColor: 'green',
              height: '100px',
              width: '100dvw',
              position: 'sticky',
              zIndex: 999999999999999,
              top: 0,
            }}
          />
          <div style={{ backgroundColor: 'blue', height: 1000, width: 100 }} />
        </main>
      </>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=947-1048&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Navigation',
      dataSource: 'Navigation',
    },
    fields: {
      SearchLink: {
        value: {
          text: 'Search Link',

          linktype: 'internal',
          class: '',
          title: '',

          href: '/',
        },
      },
      FreeQuoteButtonLink: {
        value: {
          text: 'Free Quote',

          linktype: 'internal',
          class: '',
          title: '',

          href: '/',
        },
      },
      SearchSettings: {
        fields: {
          InstanceID: {
            value: 'MY37RXSKCD',
          },
          APIKey: {
            value: 'dda77a6e6a1c6d112b541ac4799a31de',
          },
          IndexName: {
            value: 'crawler_im-dev-sitecore-headless_query_suggestions',
          },
        },
      },
      DisableSearch: {
        value: false,
      },
      Logo: {
        value: {
          src: 'http://placekitten.com/g/700/300',
          alt: '',
          width: '204',
          height: '51',
        },
      },
      LogoLink: {
        value: {
          href: '/',
        },
      },
      UtilityNav: {
        fields: {
          Title: {
            value: 'Change your region & language',
          },
          MapImage: {
            value: {
              src: 'http://localhost:6006/utility-nav-maps/Default.svg',
              alt: 'Problem Solution',
              width: '1440',
              height: '625',
            },
          },
          LocationIcon: {
            value: {
              src: 'http://localhost:6006/location-blue.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsIconDesktop: {
            value: {
              src: 'http://localhost:6006/contact-blue.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsIconMobile: {
            value: {
              src: 'http://localhost:6006/contact-white.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsSecondaryIconDesktop: {
            value: {
              src: 'http://localhost:6006/contact-blue.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsSecondaryIconMobile: {
            value: {
              src: 'http://localhost:6006/contact-white.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsLink: {
            value: {
              text: 'Contact Us',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
              href: '/Industry-Page',
            },
          },
          ContactUsSecondaryLink: {
            value: {
              text: 'Contact Us',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{D6CFE16C-1AD8-43DA-90FF-26478082B2ED}',
              href: '/',
            },
          },
          LoginIconDesktop: {
            value: {
              src: 'http://localhost:6006/login-blue.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          LoginIconMobile: {
            value: {
              src: 'http://localhost:6006/login-white.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          LoginText: {
            value: 'Login',
          },
          LoginMenuItems: [
            {
              fields: {
                Title: {
                  value: 'Data Center Portal',
                },
                Link: {
                  value: {
                    text: 'Data Center Portal',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
            {
              fields: {
                Title: {
                  value: 'IT Renew Client Portal',
                },
                Link: {
                  value: {
                    text: 'IT Renew Client Portal',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
            {
              fields: {
                Title: {
                  value: 'Iron Mountain Contact',
                },
                Link: {
                  value: {
                    text: 'Iron Mountain Contact',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
          ],
          BuyOnlineMenuItems: [
            {
              fields: {
                Title: {
                  value: 'User Account Nav',
                },
                Link: {
                  value: {
                    text: 'User Account Nav',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
            {
              fields: {
                Title: {
                  value: 'Account Nav',
                },
                Link: {
                  value: {
                    text: 'User Account Nav',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
          ],
          BuyOnlineText: {
            value: 'Buy Online',
          },
          MobileBackLinkText: {
            value: 'back',
          },
          BuyOnlineIconDesktop: {
            value: {
              src: 'http://localhost:6006/shopping-cart-blue.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          BuyOnlineIconMobile: {
            value: {
              src: 'http://localhost:6006/shopping-cart-white.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          RegionMenuItems: [
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/utility-nav-maps/APAC.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Asia And Pacific',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: '',
                      },
                      Link: {
                        value: {
                          text: 'Indonesia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Link: {
                              value: {
                                text: 'Thai',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                title: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            Title: {
                              value: '',
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: '',
                      },
                      Link: {
                        value: {
                          text: 'Singapore',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Link: {
                              value: {
                                href: '',
                              },
                            },
                            Title: {
                              value: 'English',
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/utility-nav-maps/Europe_South_Africa.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Europe and Southern Africa',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'Austria',
                      },
                      Link: {
                        value: {
                          text: 'Austria',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'German',
                            },
                            Link: {
                              value: {
                                text: 'German',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Belgium',
                      },
                      Link: {
                        value: {
                          text: 'Belgium',
                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Dutch',
                            },
                            Link: {
                              value: {
                                text: 'Dutch',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Croatia',
                      },
                      Link: {
                        value: {
                          text: 'Croatia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Croatia',
                            },
                            Link: {
                              value: {
                                text: 'Croatia',
                                href: '/',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Cyprus',
                      },
                      Link: {
                        value: {
                          text: 'Cyprus',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                href: '/',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Denmark',
                      },
                      Link: {
                        value: {
                          text: 'Denmark',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Danish',
                            },
                            Link: {
                              value: {
                                text: 'Danish',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Finland',
                      },
                      Link: {
                        value: {
                          text: 'Finland',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Finnish',
                            },
                            Link: {
                              value: {
                                text: 'Finnish',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'France',
                      },
                      Link: {
                        value: {
                          text: 'France',
                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'French',
                            },
                            Link: {
                              value: {
                                text: 'French',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Germany',
                      },
                      Link: {
                        value: {
                          text: 'Germany',
                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'German',
                            },
                            Link: {
                              value: {
                                text: 'German',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Greece',
                      },
                      Link: {
                        value: {
                          text: 'Greece',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Hungary',
                      },
                      Link: {
                        value: {
                          text: 'Hungary',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Ireland',
                      },
                      Link: {
                        value: {
                          text: 'Ireland',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Latvia',
                      },
                      Link: {
                        value: {
                          text: 'Latvia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Lesotho',
                      },
                      Link: {
                        value: {
                          text: 'Lesotho',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Lithuania',
                      },
                      Link: {
                        value: {
                          text: 'Lithuania',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Spain',
                      },
                      Link: {
                        value: {
                          text: 'Spain',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Ukrain',
                      },
                      Link: {
                        value: {
                          text: 'Ukrain',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Language Navigation',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'United Kingdom',
                      },
                      Link: {
                        value: {
                          text: 'United Kingdom',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/utility-nav-maps/Latin_America.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Latin America',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'Brazil',
                      },
                      Link: {
                        value: {
                          text: 'Brazil',

                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Brazilian',
                            },
                            Link: {
                              value: {
                                text: 'Brazilian',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Mexico',
                      },
                      Link: {
                        value: {
                          text: 'Mexico',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Panama',
                      },
                      Link: {
                        value: {
                          text: 'Panama',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Polivia',
                      },
                      Link: {
                        value: {
                          text: 'Polivia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/utility-nav-maps/Middle_East_Northern_Africa.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Middle East North Africa And Turkey',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'Iran',
                      },
                      Link: {
                        value: {
                          text: 'Iran',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Qatar',
                      },
                      Link: {
                        value: {
                          text: 'Qatar',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/utility-nav-maps/North_America.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'North America',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'United States',
                      },
                      Link: {
                        value: {
                          text: 'United States',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Cuba',
                      },
                      Link: {
                        value: {
                          text: 'Cuba',

                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Another',
                            },
                            Link: {
                              value: {
                                text: 'Another',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'United States',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      Children: [
        {
          Id: '9fd0bef3-efee-4650-ae94-2f6e45cd3649',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 1',
          DisplayName: 'Level 1 Option 1',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 1',
            },
            Children: [
              {
                Id: '881332a9-ebbb-4687-8eeb-b7cdbb3fe9df',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: '',
                  },
                  Children: [
                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O1',
                      DisplayName: 'Level 2 Option 1 L1O1',
                      Fields: {
                        Title: {
                          value: 'Level 2 Option 1 L1O1',
                        },
                        Children: [
                          {
                            Id: 'cb882f8e-93f1-43d8-bb37-c15ef7551cd5',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'ec651e20-aa22-473d-a91c-70a7ca5edeec',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O1L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O1L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O1L2O1',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '4fd78fe6-5192-4b16-831e-3f43d3c1d075',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O1L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O1L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O1L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },

                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O1',
                      DisplayName: 'Level 2 Option 1 L1O1',
                      Fields: {
                        Link: {
                          value: {
                            text: 'Direct-Link class added',

                            linktype: 'internal',
                            class: 'direct-link',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          Id: 'e1bec6aa-8521-4445-96fc-bf178ee55654',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 2',
          DisplayName: 'Level 1 Option 2',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 2',
            },
            Children: [
              {
                Id: '881332a9-ebbb-4687-8eeb-b7cdbb3fe9df',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: '',
                  },
                  Children: [
                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O2',
                      DisplayName: 'Level 2 Option 1 L1O2',
                      Fields: {
                        Title: {
                          value: 'Level 2 Option 1 L1O2',
                        },
                        Children: [
                          {
                            Id: 'cb882f8e-93f1-43d8-bb37-c15ef7551cd5',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'ec651e20-aa22-473d-a91c-70a7ca5edeec',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O2L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O2L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O2L2O1',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '19607d9d-a109-4ff0-9451-67a607f108e4',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O2L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O2L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O2L2O1',

                                        linktype: 'internal',
                                        class: 'direct-link',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '4fd78fe6-5192-4b16-831e-3f43d3c1d075',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O2L2O1',
                                  DisplayName: 'Level 3 Option 3 L1O2L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O2L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: 'b60f77b6-dd2c-425e-b3fd-97d1c32da3e3',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 2 L1O2',
                      DisplayName: 'Level 2 Option 2 L1O2',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 2 L1O2',
                        },
                        Children: [
                          {
                            Id: 'ad17c33b-3cd5-4d26-a76a-83844b1dae4d',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'e3e5d235-87db-44f8-914e-0713bab5aa93',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O2L2O2',
                                  DisplayName: 'Level 3 Option 1 L1O2L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O2L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '8a2b80ca-b65f-4b43-b2de-9205a28578e0',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O2L2O2',
                                  DisplayName: 'Level 3 Option 2 L1O2L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O2L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '459966a4-f197-4faa-888d-00681fb2d7c7',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O2L2O2',
                                  DisplayName: 'Level 3 Option 3 L1O2L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O2L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                Id: '95e96dc5-6ebe-4d4e-8d2d-931f30c844ad',
                TemplateId: '228fb0b6-469e-4f8e-9bf5-967011f7c8b5',
                Name: 'Quick Access',
                DisplayName: 'Quick Access',
                Fields: {
                  Title: {
                    value: 'Quick Access',
                  },
                  Children: [
                    {
                      Id: '5bdae830-683b-4bbf-8db8-f159ae296232',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Scan',
                      DisplayName: 'Scan',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Scan',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: 'b799d3e0-ea36-453a-8af0-56ed25b149e4',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Shred',
                      DisplayName: 'Shred',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Shred',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: '2f03a694-b144-4614-bf65-bacd4495edb9',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Storage',
                      DisplayName: 'Storage',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Storage',
                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                Id: 'd3d13db0-03d7-49da-90ec-68bc3c2d97a9',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'View Services',
                DisplayName: 'View Services',
                Fields: {
                  Title: {
                    value: 'View Services',
                  },
                  Children: [
                    {
                      Id: 'edc4537d-f4cb-4077-bad4-d91a160c2374',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 1',
                      DisplayName: 'View Services 1',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 1',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                    {
                      Id: 'e7a5ee41-6df8-4f63-af3a-fedcb654da7d',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 2',
                      DisplayName: 'View Services 2',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 2',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          Id: '0a633c2f-b307-44e9-bdc7-481caf8573af',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 3',
          DisplayName: 'Level 1 Option 3',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 3',
            },
            Children: [
              {
                Id: '881332a9-ebbb-4687-8eeb-b7cdbb3fe9df',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: '',
                  },
                  Children: [
                    // {
                    //   Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                    //   TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                    //   Name: 'Level 2 Option 1 L1O3',
                    //   DisplayName: 'Level 2 Option 1 L1O3',
                    //   Fields: {
                    //     Link: {
                    //       value: {
                    //         text: 'Level 2 Option 1 L1O3',
                    //         linktype: 'internal',
                    //         class: '',
                    //         title: '',
                    //         href: '/',
                    //       },
                    //     },
                    //     Title: {
                    //       value: 'Level 2 Option 1 L1O3',
                    //     },
                    //     Children: [
                    //       {
                    //         Id: 'cb882f8e-93f1-43d8-bb37-c15ef7551cd5',
                    //         TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                    //         Name: 'Level Three Section',
                    //         DisplayName: 'Level Three Section',
                    //         Fields: {
                    //           Title: {
                    //             value: '',
                    //           },
                    //           Children: [
                    //             {
                    //               Id: 'ec651e20-aa22-473d-a91c-70a7ca5edeec',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 1 L1O3L2O1',
                    //               DisplayName: 'Level 3 Option 1 L1O3L2O1',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 1 L1O3L2O1',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '19607d9d-a109-4ff0-9451-67a607f108e4',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 2 L1O3L2O1',
                    //               DisplayName: 'Level 3 Option 2 L1O3L2O1',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 2 L1O3L2O1',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '4fd78fe6-5192-4b16-831e-3f43d3c1d075',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 3 L1O3L2O1',
                    //               DisplayName: 'Level 3 Option 3 L1O3L2O1',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 3 L1O3L2O1',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //           ],
                    //         },
                    //       },
                    //     ],
                    //   },
                    // },
                    // {
                    //   Id: 'b60f77b6-dd2c-425e-b3fd-97d1c32da3e3',
                    //   TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                    //   Name: 'Level 2 Option 2 L1O3',
                    //   DisplayName: 'Level 2 Option 2 L1O3',
                    //   Fields: {
                    //     Link: {
                    //       value: {
                    //         href: '',
                    //       },
                    //     },
                    //     Title: {
                    //       value: 'Level 2 Option 2 L1O3',
                    //     },
                    //     Children: [
                    //       {
                    //         Id: 'ad17c33b-3cd5-4d26-a76a-83844b1dae4d',
                    //         TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                    //         Name: 'Level Three Section',
                    //         DisplayName: 'Level Three Section',
                    //         Fields: {
                    //           Title: {
                    //             value: '',
                    //           },
                    //           Children: [
                    //             {
                    //               Id: 'e3e5d235-87db-44f8-914e-0713bab5aa93',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 1 L1O3L2O2',
                    //               DisplayName: 'Level 3 Option 1 L1O3L2O2',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 1 L1O3L2O2',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '8a2b80ca-b65f-4b43-b2de-9205a28578e0',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 2 L1O3L2O2',
                    //               DisplayName: 'Level 3 Option 2 L1O3L2O2',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 2 L1O3L2O2',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '88e635a0-0ed4-480a-9c45-66c9bc3a32d0',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 2 L1O3L2O2 (loc)',
                    //               DisplayName:
                    //                 'Level 3 Option 2 L1O3L2O2 (loc)',
                    //               Fields: {
                    //                 Title: {
                    //                   value: 'Level 3 Option 2 L1O3L2O2 (loc)',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     href: '',
                    //                   },
                    //                 },
                    //                 Children: [
                    //                   {
                    //                     Id: '27ab209d-fbe1-44f8-bb32-4b6486f72bde',
                    //                     TemplateId:
                    //                       '0d3d8145-3e79-4372-8af3-34f626aed11d',
                    //                     Name: 'APAC Level Four Section',
                    //                     DisplayName: 'APAC Level Four Section',
                    //                     Fields: {
                    //                       Title: {
                    //                         value: 'APAC Level Four Section',
                    //                       },
                    //                       Children: [
                    //                         {
                    //                           Id: 'f09a6b75-bd11-46e6-9c6c-9de440b81551',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 1 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 1 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 1 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '60087912-0232-4fef-b91e-9da1f8a6a1a5',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 1 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 2 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 2 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: 'f8e48c03-6dc9-42c5-a67f-2c6eed64ab57',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 3 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 3 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 3 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                       ],
                    //                     },
                    //                   },
                    //                   {
                    //                     Id: 'e6d46fcd-2546-4a6a-94d9-252bdddfec5d',
                    //                     TemplateId:
                    //                       '0d3d8145-3e79-4372-8af3-34f626aed11d',
                    //                     Name: 'EMEA Level Four Section',
                    //                     DisplayName: 'EMEA Level Four Section',
                    //                     Fields: {
                    //                       Title: {
                    //                         value: 'EMEA Level Four Section',
                    //                       },
                    //                       Children: [
                    //                         {
                    //                           Id: '8277f2ae-bf68-4275-9106-5c08738ec184',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 4 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 4 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 4 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '1540c4cf-8616-4d2f-ae3c-788fdde7206b',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 5 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 5 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 5 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '4738ede3-0091-4959-bdba-574bc757770a',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 6 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 6 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 6 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                       ],
                    //                     },
                    //                   },
                    //                   {
                    //                     Id: 'a878945e-0c45-4b94-aa0c-4c1f26021c2c',
                    //                     TemplateId:
                    //                       '0d3d8145-3e79-4372-8af3-34f626aed11d',
                    //                     Name: 'NA Level Four Section',
                    //                     DisplayName: 'NA Level Four Section',
                    //                     Fields: {
                    //                       Title: {
                    //                         value: 'NA Level Four Section',
                    //                       },
                    //                       Children: [
                    //                         {
                    //                           Id: 'd454378e-4080-4ae2-abd4-d660c45e1cd2',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 7 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 7 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 7 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '47374bb5-905c-4911-97a8-2424e6bfacae',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 8 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 8 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 8 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '31d45a53-f910-47f2-af47-b8ff68668859',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 9 L1O3L2O2L3O2',
                    //                           DisplayName:
                    //                             'Level 4 Option 9 L1O3L2O2L3O2',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 9 L1O3L2O2L3O2',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                       ],
                    //                     },
                    //                   },
                    //                 ],
                    //               },
                    //             },
                    //             {
                    //               Id: '459966a4-f197-4faa-888d-00681fb2d7c7',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 3 L1O3L2O2',
                    //               DisplayName: 'Level 3 Option 3 L1O3L2O2',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 3 L1O3L2O2',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //           ],
                    //         },
                    //       },
                    //     ],
                    //   },
                    // },
                    // {
                    //   Id: '1201bc96-6894-4c02-a7a3-b36d2710395e',
                    //   TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                    //   Name: 'Level 2 Option 3 L1O3',
                    //   DisplayName: 'Level 2 Option 3 L1O3',
                    //   Fields: {
                    //     Link: {
                    //       value: {
                    //         href: '',
                    //       },
                    //     },
                    //     Title: {
                    //       value: 'Level 2 Option 3 L1O3',
                    //     },
                    //     Children: [
                    //       {
                    //         Id: 'a5ead154-b68f-4ea2-a1f6-490c435ea485',
                    //         TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                    //         Name: 'Level Three Section',
                    //         DisplayName: 'Level Three Section',
                    //         Fields: {
                    //           Title: {
                    //             value: '',
                    //           },
                    //           Children: [
                    //             {
                    //               Id: 'cd3b2f86-ceb8-434b-9172-7e743480bbc8',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 1 L1O3L2O3',
                    //               DisplayName: 'Level 3 Option 1 L1O3L2O3',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 1 L1O3L2O3',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '173c3a58-5208-47c4-a074-36932b828d35',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 2 L1O3L2O3',
                    //               DisplayName: 'Level 3 Option 2 L1O3L2O3',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 2 L1O3L2O3',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //           ],
                    //         },
                    //       },
                    //     ],
                    //   },
                    // },
                    // {
                    //   Id: '1c29d09e-ad9b-462c-bf42-a20025668742',
                    //   TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                    //   Name: 'Level 2 Option 4 L1O3',
                    //   DisplayName: 'Level 2 Option 4 L1O3',
                    //   Fields: {
                    //     Link: {
                    //       value: {
                    //         href: '',
                    //       },
                    //     },
                    //     Title: {
                    //       value: 'Level 2 Option 4 L1O3',
                    //     },
                    //     Children: [
                    //       {
                    //         Id: '5a6412c6-08c8-467c-8878-6d617a0c2024',
                    //         TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                    //         Name: 'Level Three Section',
                    //         DisplayName: 'Level Three Section',
                    //         Fields: {
                    //           Title: {
                    //             value: 'Level 3 Section 1',
                    //           },
                    //           Children: [
                    //             {
                    //               Id: 'f38a2629-9652-4e64-8f75-471d6b4a7607',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 1 L1O3L2O4',
                    //               DisplayName: 'Level 3 Option 1 L1O3L2O4',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 1 L1O3L2O4',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '6d0e4be0-1b64-4e10-819c-7839963f57d9',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 2 L1O3L2O4',
                    //               DisplayName: 'Level 3 Option 2 L1O3L2O4',
                    //               Fields: {
                    //                 Title: {
                    //                   value: '',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 2 L1O3L2O4',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: 'f0dadd83-bf82-49c6-850b-63600a2cb7c9',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 3 L1O3L2O4',
                    //               DisplayName: 'Level 3 Option 3 L1O3L2O4',
                    //               Fields: {
                    //                 Title: {
                    //                   value: 'Level 3 Option 3 L1O3L2O4',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     text: 'Level 3 Option 3 L1O3L2O4',
                    //                     linktype: 'internal',
                    //                     class: '',
                    //                     title: '',
                    //                     href: '/',
                    //                   },
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               Id: '81e4291e-2687-41c8-9aa7-043611b1c456',
                    //               TemplateId:
                    //                 'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                    //               Name: 'Level 3 Option 4 L1O3L2O4',
                    //               DisplayName: 'Level 3 Option 4 L1O3L2O4',
                    //               Fields: {
                    //                 Title: {
                    //                   value: 'Level 3 Option 4 L1O3L2O4',
                    //                 },
                    //                 Link: {
                    //                   value: {
                    //                     href: '',
                    //                   },
                    //                 },
                    //                 Children: [
                    //                   {
                    //                     Id: '4d3f3390-d64d-44c3-bf19-4a4ff4a56046',
                    //                     TemplateId:
                    //                       '0d3d8145-3e79-4372-8af3-34f626aed11d',
                    //                     Name: 'Level Four Section',
                    //                     DisplayName: 'Level Four Section',
                    //                     Fields: {
                    //                       Title: {
                    //                         value: '',
                    //                       },
                    //                       Children: [
                    //                         {
                    //                           Id: 'd30cba5e-f78a-493a-8733-59668778e4ce',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 1 L1O3L2O4L3O4',
                    //                           DisplayName:
                    //                             'Level 4 Option 1 L1O3L2O4L3O4',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 1 L1O3L2O4L3O4',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: 'ea0208bd-70af-4826-b716-9357bf8e567f',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 2 L1O3L2O4L3O4',
                    //                           DisplayName:
                    //                             'Level 4 Option 2 L1O3L2O4L3O4',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 2 L1O3L2O4L3O4',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '2a450cdb-942f-4639-9cd9-fb94e6138806',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 3 L1O3L2O4L3O4',
                    //                           DisplayName:
                    //                             'Level 4 Option 3 L1O3L2O4L3O4',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 3 L1O3L2O4L3O4',
                    //                                 linktype: 'internal',
                    //                                 class: '',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                         {
                    //                           Id: '1c90431e-1592-4f5b-ab2d-078138d6bd42',
                    //                           TemplateId:
                    //                             '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                    //                           Name: 'Level 4 Option 4 L1O3L2O4L3O4',
                    //                           DisplayName:
                    //                             'Level 4 Option 4 L1O3L2O4L3O4',
                    //                           Fields: {
                    //                             Title: {
                    //                               value: '',
                    //                             },
                    //                             Link: {
                    //                               value: {
                    //                                 text: 'Level 4 Option 4 L1O3L2O4L3O4',
                    //                                 linktype: 'internal',
                    //                                 class: 'direct-link',
                    //                                 title: '',
                    //                                 href: '/',
                    //                               },
                    //                             },
                    //                           },
                    //                         },
                    //                       ],
                    //                     },
                    //                   },
                    //                 ],
                    //               },
                    //             },
                    //           ],
                    //         },
                    //       },
                    //     ],
                    //   },
                    // },
                    // {
                    //   Id: '59f92154-87ec-44ee-8375-5bc3d092a4c3',
                    //   TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                    //   Name: 'Level 2 Option 5 L1O3',
                    //   DisplayName: 'Level 2 Option 5 L1O3',
                    //   Fields: {
                    //     Link: {
                    //       value: {
                    //         text: 'Level 2 Option 5 L1O3',
                    //         linktype: 'internal',
                    //         class: 'direct-link',
                    //         title: '',
                    //         href: '/',
                    //       },
                    //     },
                    //     Title: {
                    //       value: '',
                    //     },
                    //   },
                    // },
                  ],
                },
              },
              {
                Id: '95e96dc5-6ebe-4d4e-8d2d-931f30c844ad',
                TemplateId: '228fb0b6-469e-4f8e-9bf5-967011f7c8b5',
                Name: 'Quick Access',
                DisplayName: 'Quick Access',
                Fields: {
                  Title: {
                    value: 'Quick Access',
                  },
                  Children: [
                    {
                      Id: '5bdae830-683b-4bbf-8db8-f159ae296232',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Scan',
                      DisplayName: 'Scan',
                      Fields: {
                        Title: {
                          value: 'Scan',
                        },
                        Link: {
                          value: {
                            text: 'Scan',
                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: 'b799d3e0-ea36-453a-8af0-56ed25b149e4',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Shred',
                      DisplayName: 'Shred',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Shred',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: '2f03a694-b144-4614-bf65-bacd4495edb9',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Storage',
                      DisplayName: 'Storage',
                      Fields: {
                        Title: {
                          value: 'Storage',
                        },
                        Link: {
                          value: {
                            text: 'Storage',
                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                Id: 'd3d13db0-03d7-49da-90ec-68bc3c2d97a9',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'View Services',
                DisplayName: 'View Services',
                Fields: {
                  Title: {
                    value: 'View Services',
                  },
                  Children: [
                    {
                      Id: 'edc4537d-f4cb-4077-bad4-d91a160c2374',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 1',
                      DisplayName: 'View Services 1',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 1',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                    {
                      Id: 'e7a5ee41-6df8-4f63-af3a-fedcb654da7d',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 2',
                      DisplayName: 'View Services 2',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 2',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          Id: 'dda43b3d-e3c2-4b0c-8cf1-55eb0be64d14',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 4',
          DisplayName: 'Level 1 Option 4',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 4',
            },
            Children: [
              {
                Id: 'fe186ce8-b9e4-4fa4-b872-7462be0b59dc',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: 'L2 Section 1',
                  },
                  Children: [
                    {
                      Id: '145dcd50-70ca-4a66-810c-9b13d9dda3d1',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O4',
                      DisplayName: 'Level 2 Option 1 L1O4',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 1 L1O4',
                        },
                        Children: [
                          {
                            Id: '1139700c-89c9-40ea-8dce-0870d6ee5076',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: 'Co-Location',
                              },
                              Children: [
                                {
                                  Id: '8518d7cc-947c-4347-a5c1-31cc2f018b8e',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O4L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '77084d8e-7b66-4f28-b543-8f33878d04ad',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O4L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: 'eedcbf1c-28b5-4e0d-95fb-a6a734fcf1f4',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 3 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 3 L1O4L2O1',
                                    },
                                    Link: {
                                      value: {
                                        href: '',
                                      },
                                    },
                                    Children: [
                                      {
                                        Id: '69ce7d61-5347-4fad-be5e-dedd454bfc4a',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'APAC Level Four Section',
                                        DisplayName: 'APAC Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'APAC Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: 'ba5bd96b-172d-460f-9d91-ac370f713619',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 1 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 1 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '3385a6c0-8f4c-41da-902b-b78a190b2de6',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 2 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 2 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 2 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '1dc8d88d-8033-49eb-b1be-8add0c554f4c',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 3 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 3 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value:
                                                    'Level 4 Option 3 L1O4L2O1L3O3',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 3 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        Id: '86787619-a514-4693-951a-7a8d3f205418',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'EMEA Level Four Section',
                                        DisplayName: 'EMEA Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'EMEA Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: '86eae275-4db2-47d9-a53a-709ed453d0d9',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 4 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 4 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 4 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '202d34e7-9736-4041-ba23-283c141c22ed',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 5 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 5 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 5 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '554a54e3-49ff-462d-8c30-498ff26c37b1',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 6 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 6 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value:
                                                    'Level 4 Option 6 L1O4L2O1L3O3',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 6 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        Id: '22208e05-cd4c-42b6-9b7b-66f6f3c2b0f0',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'NA Level Four Section',
                                        DisplayName: 'NA Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'NA Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: '356f9e99-ceea-49ba-b576-6384b04507c8',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 7 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 7 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 7 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '3437d7ed-5656-406a-80d0-ab17dd210b75',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 8 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 8 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 8 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: 'ad7f1409-5183-4761-8e84-3bb1f4a2559d',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 9 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 9 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value:
                                                    'Level 4 Option 9 L1O4L2O1L3O3',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 9 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  Id: '5704c85c-8cff-40eb-9b54-b3a291129fd5',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 4 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 4 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 4 L1O4L2O1',

                                        linktype: 'internal',
                                        class: 'direct-link',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: 'a73bca39-4d6f-4f74-a1ea-4e0b89ae4867',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 2 L1O4',
                      DisplayName: 'Level 2 Option 2 L1O4',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 2 L1O4',
                        },
                        Children: [
                          {
                            Id: '01218392-68a9-4219-aefe-37e77ce352bc',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: 'L3 Section 1',
                              },
                              Children: [
                                {
                                  Id: 'dd7c517e-657e-4f8f-9f7f-5a35747e9a39',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 1 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O4L2O2',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '7e8562f0-d2f4-45e7-890a-911b3c23121e',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 2 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O4L2O2',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: 'eac6ef31-706d-42ca-a068-21b2c655549a',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 3 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O4L2O2',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '942fd313-daa4-49a0-94c0-3d02f60275a9',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 4 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 4 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 4 L1O4L2O2',
                                    },
                                    Link: {
                                      value: {
                                        href: '',
                                      },
                                    },
                                    Children: [
                                      {
                                        Id: '46523263-998f-4927-abc1-03f11731e495',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'Level Four Section',
                                        DisplayName: 'Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: '',
                                          },
                                          Children: [
                                            {
                                              Id: '66db4496-9595-49e8-8ce4-9fbe44d3fb46',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 1 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 1 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: 'a2be1089-6f69-4441-b6ec-71a3837712b0',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 2 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 2 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 2 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '3039c279-c598-4ac8-9c31-598fbf1871e2',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 3 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 3 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 3 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '89359ad1-0995-4f19-8168-5c13d186f978',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 4 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 4 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 4 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export const NoSearch: Story = {
  args: {
    rendering: {
      componentName: 'Navigation',
      dataSource: 'Navigation',
    },
    fields: {
      SearchLink: {
        value: {
          text: 'Search Link',

          linktype: 'internal',
          class: '',
          title: '',

          href: '/',
        },
      },
      FreeQuoteButtonLink: {
        value: {
          text: 'Free Quote',

          linktype: 'internal',
          class: '',
          title: '',

          href: '/',
        },
      },
      SearchSettings: {
        fields: {
          InstanceID: {
            value: 'MY37RXSKCD',
          },
          APIKey: {
            value: 'dda77a6e6a1c6d112b541ac4799a31de',
          },
          IndexName: {
            value: 'crawler_im-dev-sitecore-headless_query_suggestions',
          },
        },
      },
      DisableSearch: {
        value: true,
      },
      Logo: {
        value: {
          src: 'http://placekitten.com/g/700/300',
          alt: '',
          width: '204',
          height: '51',
        },
      },
      LogoLink: {
        value: {
          href: '/',
        },
      },
      UtilityNav: {
        fields: {
          Title: {
            value: 'Change your region & language',
          },
          MapImage: {
            value: {
              src: 'http://localhost:6006/story-assets/utility-nav-maps/Default.svg',
              alt: 'Problem Solution',
              width: '1440',
              height: '625',
            },
          },
          LocationIcon: {
            value: {
              src: 'http://localhost:6006/story-assets/location-blue.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsIconDesktop: {
            value: {
              src: 'http://localhost:6006/story-assets/contact-blue.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsIconMobile: {
            value: {
              src: 'http://localhost:6006/story-assets/contact-white.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsSecondaryIconDesktop: {
            value: {
              src: 'http://localhost:6006/contact-blue.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsSecondaryIconMobile: {
            value: {
              src: 'http://localhost:6006/contact-white.svg',
              alt: '',
              width: '32',
              height: '32',
            },
          },
          ContactUsLink: {
            value: {
              text: 'Contact Us',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{2458D1B7-6826-424E-8B16-F841563B0035}',
              href: '/Industry-Page',
            },
          },
          ContactUsSecondaryLink: {
            value: {
              text: 'Contact Us',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{D6CFE16C-1AD8-43DA-90FF-26478082B2ED}',
              href: '/',
            },
          },
          LoginIconDesktop: {
            value: {
              src: 'http://localhost:6006/story-assets/login-blue.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          LoginIconMobile: {
            value: {
              src: 'http://localhost:6006/story-assets/login-white.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          LoginText: {
            value: 'Login',
          },
          LoginMenuItems: [
            {
              fields: {
                Title: {
                  value: 'Data Center Portal',
                },
                Link: {
                  value: {
                    text: 'Data Center Portal',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
            {
              fields: {
                Title: {
                  value: 'IT Renew Client Portal',
                },
                Link: {
                  value: {
                    text: 'IT Renew Client Portal',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
            {
              fields: {
                Title: {
                  value: 'Iron Mountain Contact',
                },
                Link: {
                  value: {
                    text: 'Iron Mountain Contact',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
          ],
          BuyOnlineMenuItems: [
            {
              fields: {
                Title: {
                  value: 'User Account Nav',
                },
                Link: {
                  value: {
                    text: 'User Account Nav',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
            {
              fields: {
                Title: {
                  value: 'Account Nav',
                },
                Link: {
                  value: {
                    text: 'User Account Nav',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    querystring: '',
                    id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                    href: '/about-us/Data/about-us-hero',
                  },
                },
              },
            },
          ],
          BuyOnlineText: {
            value: 'Buy Online',
          },
          MobileBackLinkText: {
            value: 'back',
          },
          BuyOnlineIconDesktop: {
            value: {
              src: 'http://localhost:6006/story-assets/shopping-cart-blue.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          BuyOnlineIconMobile: {
            value: {
              src: 'http://localhost:6006/story-assets/shopping-cart-white.svg',
              alt: 'Folder',
              width: '256',
              height: '256',
            },
          },
          RegionMenuItems: [
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/story-assets/utility-nav-maps/APAC.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Asia And Pacific',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: '',
                      },
                      Link: {
                        value: {
                          text: 'Indonesia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Link: {
                              value: {
                                text: 'Thai',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                title: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            Title: {
                              value: '',
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: '',
                      },
                      Link: {
                        value: {
                          text: 'Singapore',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Link: {
                              value: {
                                href: '',
                              },
                            },
                            Title: {
                              value: 'English',
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/story-assets/utility-nav-maps/Europe_South_Africa.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Europe and Southern Africa',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'Austria',
                      },
                      Link: {
                        value: {
                          text: 'Austria',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'German',
                            },
                            Link: {
                              value: {
                                text: 'German',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Belgium',
                      },
                      Link: {
                        value: {
                          text: 'Belgium',
                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Dutch',
                            },
                            Link: {
                              value: {
                                text: 'Dutch',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Croatia',
                      },
                      Link: {
                        value: {
                          text: 'Croatia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Croatia',
                            },
                            Link: {
                              value: {
                                text: 'Croatia',
                                href: '/',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Cyprus',
                      },
                      Link: {
                        value: {
                          text: 'Cyprus',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                href: '/',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Denmark',
                      },
                      Link: {
                        value: {
                          text: 'Denmark',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Danish',
                            },
                            Link: {
                              value: {
                                text: 'Danish',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Finland',
                      },
                      Link: {
                        value: {
                          text: 'Finland',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Finnish',
                            },
                            Link: {
                              value: {
                                text: 'Finnish',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'France',
                      },
                      Link: {
                        value: {
                          text: 'France',
                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'French',
                            },
                            Link: {
                              value: {
                                text: 'French',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Germany',
                      },
                      Link: {
                        value: {
                          text: 'Germany',
                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'German',
                            },
                            Link: {
                              value: {
                                text: 'German',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Greece',
                      },
                      Link: {
                        value: {
                          text: 'Greece',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Hungary',
                      },
                      Link: {
                        value: {
                          text: 'Hungary',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Ireland',
                      },
                      Link: {
                        value: {
                          text: 'Ireland',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Latvia',
                      },
                      Link: {
                        value: {
                          text: 'Latvia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Lesotho',
                      },
                      Link: {
                        value: {
                          text: 'Lesotho',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',
                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Lithuania',
                      },
                      Link: {
                        value: {
                          text: 'Lithuania',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Spain',
                      },
                      Link: {
                        value: {
                          text: 'Spain',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Ukrain',
                      },
                      Link: {
                        value: {
                          text: 'Ukrain',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Language Navigation',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'United Kingdom',
                      },
                      Link: {
                        value: {
                          text: 'United Kingdom',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/story-assets/utility-nav-maps/Latin_America.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Latin America',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'Brazil',
                      },
                      Link: {
                        value: {
                          text: 'Brazil',

                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Brazilian',
                            },
                            Link: {
                              value: {
                                text: 'Brazilian',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'English',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Mexico',
                      },
                      Link: {
                        value: {
                          text: 'Mexico',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Panama',
                      },
                      Link: {
                        value: {
                          text: 'Panama',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Polivia',
                      },
                      Link: {
                        value: {
                          text: 'Polivia',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/story-assets/utility-nav-maps/Middle_East_Northern_Africa.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'Middle East North Africa And Turkey',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'Iran',
                      },
                      Link: {
                        value: {
                          text: 'Iran',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Qatar',
                      },
                      Link: {
                        value: {
                          text: 'Qatar',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              fields: {
                MapImage: {
                  value: {
                    src: 'http://localhost:6006/story-assets/utility-nav-maps/North_America.svg',
                    alt: '',
                  },
                },
                Title: {
                  value: 'North America',
                },
                Countries: [
                  {
                    fields: {
                      Title: {
                        value: 'United States',
                      },
                      Link: {
                        value: {
                          text: 'United States',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          querystring: '',
                          id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                          href: '/about-us/Data/about-us-hero',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Single Language',
                            },
                            Link: {
                              value: {
                                text: 'Single Language',

                                href: '',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    fields: {
                      Title: {
                        value: 'Cuba',
                      },
                      Link: {
                        value: {
                          text: 'Cuba',

                          href: '',
                        },
                      },
                      LanguageList: [
                        {
                          fields: {
                            Title: {
                              value: 'Another',
                            },
                            Link: {
                              value: {
                                text: 'Another',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                        {
                          fields: {
                            Title: {
                              value: 'United States',
                            },
                            Link: {
                              value: {
                                text: 'English',
                                anchor: '',
                                linktype: 'internal',
                                class: '',
                                querystring: '',
                                id: '{5C7B909C-190B-45C5-9C88-0F25EA363E0A}',
                                href: '/about-us/Data/about-us-hero',
                              },
                            },
                            LanguageCode: {
                              value: '',
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      Children: [
        {
          Id: '9fd0bef3-efee-4650-ae94-2f6e45cd3649',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 1',
          DisplayName: 'Level 1 Option 1',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 1',
            },
            Children: [
              {
                Id: '881332a9-ebbb-4687-8eeb-b7cdbb3fe9df',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: '',
                  },
                  Children: [
                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O1',
                      DisplayName: 'Level 2 Option 1 L1O1',
                      Fields: {
                        Title: {
                          value: 'Level 2 Option 1 L1O1',
                        },
                        Children: [
                          {
                            Id: 'cb882f8e-93f1-43d8-bb37-c15ef7551cd5',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'ec651e20-aa22-473d-a91c-70a7ca5edeec',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O1L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O1L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O1L2O1',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/about-us',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '4fd78fe6-5192-4b16-831e-3f43d3c1d075',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O1L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O1L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O1L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },

                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O1',
                      DisplayName: 'Level 2 Option 1 L1O1',
                      Fields: {
                        Link: {
                          value: {
                            text: 'Direct-Link class added',

                            linktype: 'internal',
                            class: 'direct-link',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          Id: 'e1bec6aa-8521-4445-96fc-bf178ee55654',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 2',
          DisplayName: 'Level 1 Option 2',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 2',
            },
            Children: [
              {
                Id: '881332a9-ebbb-4687-8eeb-b7cdbb3fe9df',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: '',
                  },
                  Children: [
                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O2',
                      DisplayName: 'Level 2 Option 1 L1O2',
                      Fields: {
                        Title: {
                          value: 'Level 2 Option 1 L1O2',
                        },
                        Children: [
                          {
                            Id: 'cb882f8e-93f1-43d8-bb37-c15ef7551cd5',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'ec651e20-aa22-473d-a91c-70a7ca5edeec',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O2L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O2L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O2L2O1',
                                        linktype: 'external',
                                        class: '',
                                        title: '',
                                        href: 'http://www.google.com',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '19607d9d-a109-4ff0-9451-67a607f108e4',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O2L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O2L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O2L2O1',

                                        linktype: 'internal',
                                        class: 'direct-link',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '4fd78fe6-5192-4b16-831e-3f43d3c1d075',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O2L2O1',
                                  DisplayName: 'Level 3 Option 3 L1O2L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O2L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: 'b60f77b6-dd2c-425e-b3fd-97d1c32da3e3',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 2 L1O2',
                      DisplayName: 'Level 2 Option 2 L1O2',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 2 L1O2',
                        },
                        Children: [
                          {
                            Id: 'ad17c33b-3cd5-4d26-a76a-83844b1dae4d',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'e3e5d235-87db-44f8-914e-0713bab5aa93',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O2L2O2',
                                  DisplayName: 'Level 3 Option 1 L1O2L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O2L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '8a2b80ca-b65f-4b43-b2de-9205a28578e0',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O2L2O2',
                                  DisplayName: 'Level 3 Option 2 L1O2L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O2L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '459966a4-f197-4faa-888d-00681fb2d7c7',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O2L2O2',
                                  DisplayName: 'Level 3 Option 3 L1O2L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O2L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                Id: '95e96dc5-6ebe-4d4e-8d2d-931f30c844ad',
                TemplateId: '228fb0b6-469e-4f8e-9bf5-967011f7c8b5',
                Name: 'Quick Access',
                DisplayName: 'Quick Access',
                Fields: {
                  Title: {
                    value: 'Quick Access',
                  },
                  Children: [
                    {
                      Id: '5bdae830-683b-4bbf-8db8-f159ae296232',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Scan',
                      DisplayName: 'Scan',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Scan',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: 'b799d3e0-ea36-453a-8af0-56ed25b149e4',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Shred',
                      DisplayName: 'Shred',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Shred',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: '2f03a694-b144-4614-bf65-bacd4495edb9',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Storage',
                      DisplayName: 'Storage',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Storage',
                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                Id: 'd3d13db0-03d7-49da-90ec-68bc3c2d97a9',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'View Services',
                DisplayName: 'View Services',
                Fields: {
                  Title: {
                    value: 'View Services',
                  },
                  Children: [
                    {
                      Id: 'edc4537d-f4cb-4077-bad4-d91a160c2374',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 1',
                      DisplayName: 'View Services 1',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 1',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                    {
                      Id: 'e7a5ee41-6df8-4f63-af3a-fedcb654da7d',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 2',
                      DisplayName: 'View Services 2',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 2',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          Id: '0a633c2f-b307-44e9-bdc7-481caf8573af',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 3',
          DisplayName: 'Level 1 Option 3',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 3',
            },
            Children: [
              {
                Id: '881332a9-ebbb-4687-8eeb-b7cdbb3fe9df',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: '',
                  },
                  Children: [
                    {
                      Id: '10d1801e-30fe-4263-958f-8b7f70eef121',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O3',
                      DisplayName: 'Level 2 Option 1 L1O3',
                      Fields: {
                        Link: {
                          value: {
                            text: 'Level 2 Option 1 L1O3',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            href: '/',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 1 L1O3',
                        },
                        Children: [
                          {
                            Id: 'cb882f8e-93f1-43d8-bb37-c15ef7551cd5',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'ec651e20-aa22-473d-a91c-70a7ca5edeec',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O3L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O3L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O3L2O1',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '19607d9d-a109-4ff0-9451-67a607f108e4',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O3L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O3L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O3L2O1',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '4fd78fe6-5192-4b16-831e-3f43d3c1d075',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O3L2O1',
                                  DisplayName: 'Level 3 Option 3 L1O3L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O3L2O1',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: 'b60f77b6-dd2c-425e-b3fd-97d1c32da3e3',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 2 L1O3',
                      DisplayName: 'Level 2 Option 2 L1O3',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 2 L1O3',
                        },
                        Children: [
                          {
                            Id: 'ad17c33b-3cd5-4d26-a76a-83844b1dae4d',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'e3e5d235-87db-44f8-914e-0713bab5aa93',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O3L2O2',
                                  DisplayName: 'Level 3 Option 1 L1O3L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O3L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '8a2b80ca-b65f-4b43-b2de-9205a28578e0',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O3L2O2',
                                  DisplayName: 'Level 3 Option 2 L1O3L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O3L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '88e635a0-0ed4-480a-9c45-66c9bc3a32d0',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O3L2O2 (loc)',
                                  DisplayName:
                                    'Level 3 Option 2 L1O3L2O2 (loc)',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 2 L1O3L2O2 (loc)',
                                    },
                                    Link: {
                                      value: {
                                        href: '',
                                      },
                                    },
                                    Children: [
                                      {
                                        Id: '27ab209d-fbe1-44f8-bb32-4b6486f72bde',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'APAC Level Four Section',
                                        DisplayName: 'APAC Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'APAC Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: 'f09a6b75-bd11-46e6-9c6c-9de440b81551',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 1 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 1 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '60087912-0232-4fef-b91e-9da1f8a6a1a5',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 2 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 2 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: 'f8e48c03-6dc9-42c5-a67f-2c6eed64ab57',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 3 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 3 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 3 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        Id: 'e6d46fcd-2546-4a6a-94d9-252bdddfec5d',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'EMEA Level Four Section',
                                        DisplayName: 'EMEA Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'EMEA Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: '8277f2ae-bf68-4275-9106-5c08738ec184',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 4 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 4 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 4 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '1540c4cf-8616-4d2f-ae3c-788fdde7206b',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 5 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 5 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 5 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '4738ede3-0091-4959-bdba-574bc757770a',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 6 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 6 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 6 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        Id: 'a878945e-0c45-4b94-aa0c-4c1f26021c2c',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'NA Level Four Section',
                                        DisplayName: 'NA Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'NA Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: 'd454378e-4080-4ae2-abd4-d660c45e1cd2',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 7 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 7 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 7 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '47374bb5-905c-4911-97a8-2424e6bfacae',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 8 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 8 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 8 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '31d45a53-f910-47f2-af47-b8ff68668859',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 9 L1O3L2O2L3O2',
                                              DisplayName:
                                                'Level 4 Option 9 L1O3L2O2L3O2',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 9 L1O3L2O2L3O2',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  Id: '459966a4-f197-4faa-888d-00681fb2d7c7',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O3L2O2',
                                  DisplayName: 'Level 3 Option 3 L1O3L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O3L2O2',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: '1201bc96-6894-4c02-a7a3-b36d2710395e',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 3 L1O3',
                      DisplayName: 'Level 2 Option 3 L1O3',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 3 L1O3',
                        },
                        Children: [
                          {
                            Id: 'a5ead154-b68f-4ea2-a1f6-490c435ea485',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: '',
                              },
                              Children: [
                                {
                                  Id: 'cd3b2f86-ceb8-434b-9172-7e743480bbc8',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O3L2O3',
                                  DisplayName: 'Level 3 Option 1 L1O3L2O3',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O3L2O3',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '173c3a58-5208-47c4-a074-36932b828d35',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O3L2O3',
                                  DisplayName: 'Level 3 Option 2 L1O3L2O3',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O3L2O3',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: '1c29d09e-ad9b-462c-bf42-a20025668742',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 4 L1O3',
                      DisplayName: 'Level 2 Option 4 L1O3',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 4 L1O3',
                        },
                        Children: [
                          {
                            Id: '5a6412c6-08c8-467c-8878-6d617a0c2024',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: 'Level 3 Section 1',
                              },
                              Children: [
                                {
                                  Id: 'f38a2629-9652-4e64-8f75-471d6b4a7607',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O3L2O4',
                                  DisplayName: 'Level 3 Option 1 L1O3L2O4',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O3L2O4',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '6d0e4be0-1b64-4e10-819c-7839963f57d9',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O3L2O4',
                                  DisplayName: 'Level 3 Option 2 L1O3L2O4',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O3L2O4',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: 'f0dadd83-bf82-49c6-850b-63600a2cb7c9',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O3L2O4',
                                  DisplayName: 'Level 3 Option 3 L1O3L2O4',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 3 L1O3L2O4',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O3L2O4',
                                        linktype: 'internal',
                                        class: '',
                                        title: '',
                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '81e4291e-2687-41c8-9aa7-043611b1c456',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 4 L1O3L2O4',
                                  DisplayName: 'Level 3 Option 4 L1O3L2O4',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 4 L1O3L2O4',
                                    },
                                    Link: {
                                      value: {
                                        href: '',
                                      },
                                    },
                                    Children: [
                                      {
                                        Id: '4d3f3390-d64d-44c3-bf19-4a4ff4a56046',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'Level Four Section',
                                        DisplayName: 'Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: '',
                                          },
                                          Children: [
                                            {
                                              Id: 'd30cba5e-f78a-493a-8733-59668778e4ce',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O3L2O4L3O4',
                                              DisplayName:
                                                'Level 4 Option 1 L1O3L2O4L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 1 L1O3L2O4L3O4',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: 'ea0208bd-70af-4826-b716-9357bf8e567f',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 2 L1O3L2O4L3O4',
                                              DisplayName:
                                                'Level 4 Option 2 L1O3L2O4L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 2 L1O3L2O4L3O4',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '2a450cdb-942f-4639-9cd9-fb94e6138806',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 3 L1O3L2O4L3O4',
                                              DisplayName:
                                                'Level 4 Option 3 L1O3L2O4L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 3 L1O3L2O4L3O4',
                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '1c90431e-1592-4f5b-ab2d-078138d6bd42',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 4 L1O3L2O4L3O4',
                                              DisplayName:
                                                'Level 4 Option 4 L1O3L2O4L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 4 L1O3L2O4L3O4',
                                                    linktype: 'internal',
                                                    class: 'direct-link',
                                                    title: '',
                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: '59f92154-87ec-44ee-8375-5bc3d092a4c3',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 5 L1O3',
                      DisplayName: 'Level 2 Option 5 L1O3',
                      Fields: {
                        Link: {
                          value: {
                            text: 'Level 2 Option 5 L1O3',
                            linktype: 'internal',
                            class: 'direct-link',
                            title: '',
                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
              {
                Id: '95e96dc5-6ebe-4d4e-8d2d-931f30c844ad',
                TemplateId: '228fb0b6-469e-4f8e-9bf5-967011f7c8b5',
                Name: 'Quick Access',
                DisplayName: 'Quick Access',
                Fields: {
                  Title: {
                    value: 'Quick Access',
                  },
                  Children: [
                    {
                      Id: '5bdae830-683b-4bbf-8db8-f159ae296232',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Scan',
                      DisplayName: 'Scan',
                      Fields: {
                        Title: {
                          value: 'Scan',
                        },
                        Link: {
                          value: {
                            text: 'Scan',
                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: 'b799d3e0-ea36-453a-8af0-56ed25b149e4',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Shred',
                      DisplayName: 'Shred',
                      Fields: {
                        Title: {
                          value: '',
                        },
                        Link: {
                          value: {
                            text: 'Shred',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                    {
                      Id: '2f03a694-b144-4614-bf65-bacd4495edb9',
                      TemplateId: 'd7a312bd-1ec6-46fc-a2ac-1fb044278ac2',
                      Name: 'Storage',
                      DisplayName: 'Storage',
                      Fields: {
                        Title: {
                          value: 'Storage',
                        },
                        Link: {
                          value: {
                            text: 'Storage',
                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                Id: 'd3d13db0-03d7-49da-90ec-68bc3c2d97a9',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'View Services',
                DisplayName: 'View Services',
                Fields: {
                  Title: {
                    value: 'View Services',
                  },
                  Children: [
                    {
                      Id: 'edc4537d-f4cb-4077-bad4-d91a160c2374',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 1',
                      DisplayName: 'View Services 1',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 1',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                    {
                      Id: 'e7a5ee41-6df8-4f63-af3a-fedcb654da7d',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'View Services 2',
                      DisplayName: 'View Services 2',
                      Fields: {
                        Link: {
                          value: {
                            text: 'View Services 2',

                            linktype: 'internal',
                            class: '',
                            title: '',

                            href: '/',
                          },
                        },
                        Title: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          Id: 'dda43b3d-e3c2-4b0c-8cf1-55eb0be64d14',
          TemplateId: '363689f7-0b90-415a-badd-604208ae2a5b',
          Name: 'Level 1 Option 4',
          DisplayName: 'Level 1 Option 4',
          Fields: {
            Title: {
              value: 'Ü Level 1 Option 4',
            },
            Children: [
              {
                Id: 'fe186ce8-b9e4-4fa4-b872-7462be0b59dc',
                TemplateId: '86ee867b-7bcd-4651-b379-5b39bf1e4df1',
                Name: 'Level Two Section',
                DisplayName: 'Level Two Section',
                Fields: {
                  Title: {
                    value: 'L2 Section 1',
                  },
                  Children: [
                    {
                      Id: '145dcd50-70ca-4a66-810c-9b13d9dda3d1',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 1 L1O4',
                      DisplayName: 'Level 2 Option 1 L1O4',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 1 L1O4',
                        },
                        Children: [
                          {
                            Id: '1139700c-89c9-40ea-8dce-0870d6ee5076',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: 'Co-Location',
                              },
                              Children: [
                                {
                                  Id: '8518d7cc-947c-4347-a5c1-31cc2f018b8e',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 1 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O4L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '77084d8e-7b66-4f28-b543-8f33878d04ad',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 2 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O4L2O1',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: 'eedcbf1c-28b5-4e0d-95fb-a6a734fcf1f4',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 3 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 3 L1O4L2O1',
                                    },
                                    Link: {
                                      value: {
                                        href: '',
                                      },
                                    },
                                    Children: [
                                      {
                                        Id: '69ce7d61-5347-4fad-be5e-dedd454bfc4a',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'APAC Level Four Section',
                                        DisplayName: 'APAC Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'APAC Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: 'ba5bd96b-172d-460f-9d91-ac370f713619',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 1 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 1 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '3385a6c0-8f4c-41da-902b-b78a190b2de6',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 2 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 2 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 2 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '1dc8d88d-8033-49eb-b1be-8add0c554f4c',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 3 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 3 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value:
                                                    'Level 4 Option 3 L1O4L2O1L3O3',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 3 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        Id: '86787619-a514-4693-951a-7a8d3f205418',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'EMEA Level Four Section',
                                        DisplayName: 'EMEA Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'EMEA Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: '86eae275-4db2-47d9-a53a-709ed453d0d9',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 4 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 4 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 4 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '202d34e7-9736-4041-ba23-283c141c22ed',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 5 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 5 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 5 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '554a54e3-49ff-462d-8c30-498ff26c37b1',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 6 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 6 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value:
                                                    'Level 4 Option 6 L1O4L2O1L3O3',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 6 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        Id: '22208e05-cd4c-42b6-9b7b-66f6f3c2b0f0',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'NA Level Four Section',
                                        DisplayName: 'NA Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: 'NA Level Four Section',
                                          },
                                          Children: [
                                            {
                                              Id: '356f9e99-ceea-49ba-b576-6384b04507c8',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 7 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 7 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 7 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '3437d7ed-5656-406a-80d0-ab17dd210b75',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 8 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 8 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 8 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: 'ad7f1409-5183-4761-8e84-3bb1f4a2559d',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 9 L1O4L2O1L3O3',
                                              DisplayName:
                                                'Level 4 Option 9 L1O4L2O1L3O3',
                                              Fields: {
                                                Title: {
                                                  value:
                                                    'Level 4 Option 9 L1O4L2O1L3O3',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 9 L1O4L2O1L3O3',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  Id: '5704c85c-8cff-40eb-9b54-b3a291129fd5',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 4 L1O4L2O1',
                                  DisplayName: 'Level 3 Option 4 L1O4L2O1',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 4 L1O4L2O1',

                                        linktype: 'internal',
                                        class: 'direct-link',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      Id: 'a73bca39-4d6f-4f74-a1ea-4e0b89ae4867',
                      TemplateId: '3fc77539-60bd-4323-847d-9441dabb92ef',
                      Name: 'Level 2 Option 2 L1O4',
                      DisplayName: 'Level 2 Option 2 L1O4',
                      Fields: {
                        Link: {
                          value: {
                            href: '',
                          },
                        },
                        Title: {
                          value: 'Level 2 Option 2 L1O4',
                        },
                        Children: [
                          {
                            Id: '01218392-68a9-4219-aefe-37e77ce352bc',
                            TemplateId: '03e19d54-145a-4fb5-953e-04e805f615b9',
                            Name: 'Level Three Section',
                            DisplayName: 'Level Three Section',
                            Fields: {
                              Title: {
                                value: 'L3 Section 1',
                              },
                              Children: [
                                {
                                  Id: 'dd7c517e-657e-4f8f-9f7f-5a35747e9a39',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 1 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 1 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 1 L1O4L2O2',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '7e8562f0-d2f4-45e7-890a-911b3c23121e',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 2 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 2 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 2 L1O4L2O2',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: 'eac6ef31-706d-42ca-a068-21b2c655549a',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 3 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 3 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: '',
                                    },
                                    Link: {
                                      value: {
                                        text: 'Level 3 Option 3 L1O4L2O2',

                                        linktype: 'internal',
                                        class: '',
                                        title: '',

                                        href: '/',
                                      },
                                    },
                                  },
                                },
                                {
                                  Id: '942fd313-daa4-49a0-94c0-3d02f60275a9',
                                  TemplateId:
                                    'd3d3b369-db48-40bc-b2b1-6ad15a29ea10',
                                  Name: 'Level 3 Option 4 L1O4L2O2',
                                  DisplayName: 'Level 3 Option 4 L1O4L2O2',
                                  Fields: {
                                    Title: {
                                      value: 'Level 3 Option 4 L1O4L2O2',
                                    },
                                    Link: {
                                      value: {
                                        href: '',
                                      },
                                    },
                                    Children: [
                                      {
                                        Id: '46523263-998f-4927-abc1-03f11731e495',
                                        TemplateId:
                                          '0d3d8145-3e79-4372-8af3-34f626aed11d',
                                        Name: 'Level Four Section',
                                        DisplayName: 'Level Four Section',
                                        Fields: {
                                          Title: {
                                            value: '',
                                          },
                                          Children: [
                                            {
                                              Id: '66db4496-9595-49e8-8ce4-9fbe44d3fb46',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 1 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 1 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 1 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: 'a2be1089-6f69-4441-b6ec-71a3837712b0',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 2 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 2 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 2 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '3039c279-c598-4ac8-9c31-598fbf1871e2',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 3 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 3 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 3 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              Id: '89359ad1-0995-4f19-8168-5c13d186f978',
                                              TemplateId:
                                                '3bbc9a2c-003c-434e-a350-d08f93f9b63d',
                                              Name: 'Level 4 Option 4 L1O4L2O2L3O4',
                                              DisplayName:
                                                'Level 4 Option 4 L1O4L2O2L3O4',
                                              Fields: {
                                                Title: {
                                                  value: '',
                                                },
                                                Link: {
                                                  value: {
                                                    text: 'Level 4 Option 4 L1O4L2O2L3O4',

                                                    linktype: 'internal',
                                                    class: '',
                                                    title: '',

                                                    href: '/',
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
};
