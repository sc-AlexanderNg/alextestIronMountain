import type { Meta, StoryObj } from '@storybook/react';

import HorizontalScrollDiamonds from 'components/HorizontalScrollDiamonds/HorizontalScrollDiamonds';

const meta: Meta<typeof HorizontalScrollDiamonds> = {
  title: 'Components/HorizontalScrollDiamonds',
  component: HorizontalScrollDiamonds,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HorizontalScrollDiamonds>;
export const Default: Story = {
  args: {
    rendering: {
      componentName: 'HorizontalScrollDiamonds',
      dataSource: 'HorizontalScrollDiamonds',
    },
    fields: {
      Headline: {
        value: '70+',
      },
      Description: {
        value: 'Years proven experience',
      },
      DiamondOneColor: {
        fields: {
          Value: {
            value: 'teal',
          },
        },
      },
      DiamondTwoColor: {
        fields: {
          Value: {
            value: 'light-blue',
          },
        },
      },
      DiamondThreeColor: {
        fields: {
          Value: {
            value: 'purple',
          },
        },
      },
      DiamondFourColor: {
        fields: {
          Value: {
            value: 'orange',
          },
        },
      },
      DiamondData: [
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '24K+',
            },
            Description: {
              value:
                'Professionals <ul><li>one</li><li>two</li><li>three</li></ul>',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'green',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '60M',
            },
            Description: {
              value: 'Terabytes of Data',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'blue',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '24K+',
            },
            Description: {
              value: 'Professionals',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'green',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '60M',
            },
            Description: {
              value: 'Terabytes of Data',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'blue',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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

export const WithList: Story = {
  args: {
    rendering: {
      componentName: 'HorizontalScrollDiamonds',
      dataSource: 'HorizontalScrollDiamonds',
    },
    fields: {
      Headline: {
        value: '70+',
      },
      Description: {
        value:
          '<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
      },
      DiamondOneColor: {
        fields: {
          Value: {
            value: 'teal',
          },
        },
      },
      DiamondTwoColor: {
        fields: {
          Value: {
            value: 'light-blue',
          },
        },
      },
      DiamondThreeColor: {
        fields: {
          Value: {
            value: 'purple',
          },
        },
      },
      DiamondFourColor: {
        fields: {
          Value: {
            value: 'orange',
          },
        },
      },
      DiamondData: [
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '24K+',
            },
            Description: {
              value:
                'Professionals <ul><li>one</li><li>two</li><li>three</li></ul>',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'green',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '60M',
            },
            Description: {
              value: 'Terabytes of Data',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'blue',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '24K+',
            },
            Description: {
              value: 'Professionals',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'green',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
            Title: {
              value: '60M',
            },
            Description: {
              value: 'Terabytes of Data',
            },
            Image: {
              value: {
                src: '',
                alt: '',
              },
            },
            BorderColor: {
              fields: {
                Value: {
                  value: 'blue',
                },
              },
            },
          },
        },
        {
          fields: {
            Title: {
              value: '',
            },
            Description: {
              value: '',
            },
            Image: {
              value: {
                src: 'https://picsum.photos/300/300',
                alt: 'netsuite',
              },
            },
            BorderColor: {
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
