import type { Meta, StoryObj } from '@storybook/react';
import TextDiamondSplit from 'components/TextDiamondSplit/TextDiamondSplit';

const meta: Meta<typeof TextDiamondSplit> = {
  title: 'Components/TextDiamondSplit',
  component: TextDiamondSplit,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=504-199&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextDiamondSplit>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'DiamondTeaser',
      dataSource: 'DiamondTeaser',
    },
    fields: {
      Headline: {
        value: 'Passion to protect',
      },
      CopySections: {
        value: `<h3>Smart Hands</h3>
          <p>
            At every Iron Mountain data center, we offer a full portfolio of remote
            smart hands services, covering rack and stack services, builds and installs,
            hardware, power and connectivity as well as general hands-on maintenance
            tasks.
          </p>
          <ul><li>Standard li</li><li><a href="google.com" target="_blank">Link 1</a></li><li>Last li</li></ul>
        
          <h3>Security</h3>
          <p>
            We are the trusted guardian for more than 230,000 customers including 95% of
            the Fortune 1000. Both aboveground and underground, our highly secure data
            centers have enhanced physical and digital security layers rivaled by few
          </p>
        
          <h3>Compliance</h3>
          <p>
            Trusted by some of the world’s most highly-regulated organizations, Iron
            Mountain is an industry leader in compliance. Reduce data center risk with
            our comprehensive compliance support including HIPAA, FISMA High, PCI-DSS,
            ISO 27001, and SOC 2
          </p>
        
          <h3>Sustainability</h3>
          <p>
            We are firm in our commitment to renewable energy and sustainable data
            centers. Our facilities are powered by 100% renewable energy, and our
            customers can take credit for the green energy that Iron Mountain buys on
            their own sustainability reporting with Green Power Pass.
          </p>
        
          <h3>Network Connectivity</h3>
          <p>
            With Iron Mountain’s carrier-neutral networking and data center interconnect
            services, we’ll get you where you need to be. We offer a wide range of
            services including cross connects, virtual cross connects, direct internet
            access, metro waves, peering and internet exchanges as well as Cloud
            On-Ramp.
          </p>
        
          <h3>NOC and Portal</h3>
          <p>
            Our Global Network Operations Center (GNOC) is your central point for
            customer communication and advocacy. Leverage our data center portal for
            ticketing, power & cooling audits, access logs, bandwidth reports and more.
          </p>`,
      },
      Diamonds: [
        {
          fields: {
            Image: {
              value: {
                src: 'https://picsum.photos/200/200',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: '',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: 'https://picsum.photos/200/200',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: 'https://picsum.photos/200/200',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: 'https://picsum.photos/200/200',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: '',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: 'purple',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: 'https://picsum.photos/200/200',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
        {
          fields: {
            Image: {
              value: {
                src: 'https://picsum.photos/200/200',
                alt: 'img',
              },
            },
            DiamondgradientColor: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
            DiamondBorder: {
              fields: {
                Value: {
                  value: '',
                },
              },
            },
          },
        },
      ],
    },
  },
};
