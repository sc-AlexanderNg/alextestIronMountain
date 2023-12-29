import type { Meta, StoryObj } from '@storybook/react';
import LogoFarm from 'components/LogoFarm/LogoFarm';

const meta: Meta<typeof LogoFarm> = {
  title: 'Components/LogoFarm',
  component: LogoFarm,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=542-537&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogoFarm>;

export const Default: Story = {
  render: (args) => (
    <div style={{ backgroundColor: '#ccc' }}>
      <LogoFarm {...args} />
    </div>
  ),
  args: {
    rendering: {
      componentName: 'LogoFarm',
      dataSource: 'LogoFarm',
    },
    fields: {
      Title: { value: '95%' },
      Description: {
        value: 'of the Fortune 1000 trust us with their data',
      },
      Logos: [
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/40?random=1',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/50?random=2',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/40?random=3',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/60?random=4',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/40?random=5',
                alt: '',
              },
            },
          },
        },
      ],
    },
  },
};

export const LessThanFiveLogos: Story = {
  render: (args) => (
    <div style={{ backgroundColor: '#ccc' }}>
      <LogoFarm {...args} />
    </div>
  ),
  args: {
    rendering: {
      componentName: 'LogoFarm',
      dataSource: 'LogoFarm',
    },
    fields: {
      Title: { value: '95%' },
      Description: {
        value: 'of the Fortune 1000 trust us with their data',
      },
      Logos: [
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/100?random=1',
                alt: '',
                width: '640',
                height: '480',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/100?random=2',
                alt: '',
                width: '100',
                height: '20',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/100?random=3',
                alt: '',
                width: '100',
                height: '20',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/100?random=4',
                alt: '',
                width: '100',
                height: '20',
              },
            },
          },
        },
      ],
    },
  },
};

export const WhiteBackground: Story = {
  render: (args) => (
    <div style={{ backgroundColor: '#ccc' }}>
      <LogoFarm {...args} />
    </div>
  ),
  args: {
    rendering: {
      componentName: 'LogoFarm',
      dataSource: 'LogoFarm',
    },
    params: { Theme: '{"Value":{"value":"white"}}' },
    fields: {
      Title: { value: '' },
      Description: {
        value: '',
      },
      Logos: [
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/40?random=1',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/50?random=2',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/40?random=3',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/60?random=4',
                alt: '',
              },
            },
          },
        },
        {
          fields: {
            LogoImage: {
              value: {
                src: 'https://picsum.photos/300/40?random=5',
                alt: '',
              },
            },
          },
        },
      ],
    },
  },
};
