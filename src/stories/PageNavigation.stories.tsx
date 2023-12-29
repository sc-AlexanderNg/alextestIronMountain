import type { Meta, StoryObj } from '@storybook/react';

import PageNavigation from 'components/PageNavigation/PageNavigation';

const meta: Meta<typeof PageNavigation> = {
  title: 'Components/PageNavigation',
  component: PageNavigation,
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            padding: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999999999999999',
            position: 'sticky',
            top: '-450px',
            backgroundColor: 'white',
          }}
        >
          <h1>Sticky header w/ z-index</h1>
        </div>
        <Story />
        <div
          style={{
            width: '400px',
            margin: '100px auto',
          }}
        >
          <a id="ftr" className="spa-link"></a>
          <div>
            <h2>Feature</h2>
            <p style={{ marginBottom: '400px' }}>
              There is no strife, no prejudice, no national conflict in outer
              space as yet. Its hazards are hostile to us all. Its conquest
              deserves the best of all mankind, and its opportunity for peaceful
              cooperation many never come again. But why, some say, the moon?
              Why choose this as our goal? And they may well ask why climb the
              highest mountain? Why, 35 years ago, fly the Atlantic? Why does
              Rice play Texas?
            </p>
          </div>
          <a id="hiw" className="spa-link"></a>
          <div>
            <h2>How It Works</h2>
            <p style={{ marginBottom: '400px' }}>
              We choose to go to the moon. We choose to go to the moon in this
              decade and do the other things, not because they are easy, but
              because they are hard, because that goal will serve to organize
              and measure the best of our energies and skills, because that
              challenge is one that we are willing to accept, one we are
              unwilling to postpone, and one which we intend to win, and the
              others, too.
            </p>
          </div>
          <a id="gs" className="spa-link"></a>
          <div>
            <h2>Get Started</h2>
            <p style={{ marginBottom: '400px' }}>
              It is for these reasons that I regard the decision last year to
              shift our efforts in space from low to high gear as among the most
              important decisions that will be made during my incumbency in the
              office of the Presidency.
            </p>
          </div>
          <a id="so" className="spa-link"></a>
          <div>
            <h2>Service Options</h2>
            <p style={{ marginBottom: '400px' }}>
              In the last 24 hours we have seen facilities now being created for
              the greatest and most complex exploration in man&apos;s history.
              We have felt the ground shake and the air shattered by the testing
              of a Saturn C-1 booster rocket, many times as powerful as the
              Atlas which launched John Glenn, generating power equivalent to
              10,000 automobiles with their accelerators on the floor. We have
              seen the site where the F-1 rocket engines, each one as powerful
              as all eight engines of the Saturn combined, will be clustered
              together to make the advanced Saturn missile, assembled in a new
              building to be built at Cape Canaveral as tall as a 48 story
              structure, as wide as a city block, and as long as two lengths of
              this field.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=333%3A3752&t=KlCN4qHxWzVJsDo7-1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageNavigation>;

export const TitleAndFirstChildIsActive: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      Title: {
        value: 'Overview',
      },
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: 'active',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const TitleAndActiveNonFirstChild: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      Title: {
        value: 'Overview',
      },
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: 'active',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: '',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '/resources/videos-and-webinars/h/how-to-survive-a-ransomware-attack',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 9',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 9',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 10',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 10',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 11',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 11',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 12',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 12',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 13',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 13',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 14',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 14',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 15',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 15',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const TitleAndActiveGrandchild: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      Title: {
        value: 'Overview',
      },
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: 'active',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 9',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 9',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 10',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 10',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 11',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 11',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 12',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 12',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 13',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 13',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 14',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 14',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 15',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 15',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const NoTitleButHasActive: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      Title: {
        value: '',
      },
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: '',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: 'active',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 9',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 9',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 10',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 10',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 11',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 11',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 12',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 12',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 13',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 13',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 14',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 14',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 15',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 15',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const TitleAndNoActive: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      Title: {
        value: 'Overview',
      },
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 9',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 9',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 10',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 10',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 11',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 11',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 12',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 12',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 13',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 13',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 14',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 14',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 15',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 15',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const NoTitleAndNoActive: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      Title: {
        value: '',
      },
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 9',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 9',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 10',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 10',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 11',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 11',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 12',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 12',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 13',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 13',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 14',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 14',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 15',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 15',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const NoAnchorLinks: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: 'active',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const OnlyAnchorLinks: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [],
    },
  },
};

export const NotManyLinks: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: 'active',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};

export const ActiveHasNoGrandchildren: Story = {
  args: {
    rendering: {
      componentName: 'PageNavigation',
      dataSource: 'PageNavigation',
    },
    fields: {
      CTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '#',
        },
      },
      SecondaryCTA: {
        value: {
          text: 'Free Quote',
          anchor: '',
          linktype: 'internal',
          class: 'btn-icon',
          title: '',
          querystring: '',
          id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
          href: '/Service-Page-1',
        },
      },
      SecondaryCTAIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      AnchorList: [
        {
          fields: {
            DisplayName: {
              value: 'Feature',
            },
            Id: {
              value: 'ftr',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'How It Works',
            },
            Id: {
              value: 'hiw',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Get Started',
            },
            Id: {
              value: 'gs',
            },
          },
        },
        {
          fields: {
            DisplayName: {
              value: 'Service Options',
            },
            Id: {
              value: 'so',
            },
          },
        },
      ],
      SubPageNavigationList: [
        {
          name: 'Child Page 1',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 1',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
            ],
          },
        },
        {
          name: 'Child Page 2',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 2',
                anchor: '',
                linktype: 'internal',
                class: 'active',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [],
          },
        },
        {
          name: 'Child Page 3',
          fields: {
            ChildPageLink: {
              value: {
                text: 'Child Page 3',
                anchor: '',
                linktype: 'internal',
                class: '',
                querystring: '',
                id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                href: '#',
              },
            },
            GrandChildNavigationList: [
              {
                name: 'Grand Child Page 1',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 1',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 2',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 2',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 3',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 3',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 4',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 4',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 5',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 5',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 6',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 6',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 7',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 7',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 8',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 8',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 9',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 9',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 10',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 10',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 11',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 11',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 12',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 12',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 13',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 13',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 14',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 14',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
                    },
                  },
                },
              },
              {
                name: 'Grand Child Page 15',
                fields: {
                  GrandChildPageLink: {
                    value: {
                      text: 'Grand Child Page 15',
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      querystring: '',
                      id: '{9E8E0FB7-B103-4489-99A4-29781632BC2C}',
                      href: '#',
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
};
