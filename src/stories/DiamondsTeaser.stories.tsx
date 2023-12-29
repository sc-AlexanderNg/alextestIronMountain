import type { Meta, StoryObj } from '@storybook/react';

import DiamondsTeaser from 'components/DiamondsTeaser/DiamondsTeaser';

const meta: Meta<typeof DiamondsTeaser> = {
  title: 'Components/DiamondsTeaser',
  component: DiamondsTeaser,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div
          style={{
            padding: '10%',
            backgroundColor: 'red',
          }}
        />
      </div>
    ),
  ],
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=504-199&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DiamondsTeaser>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'DiamondTeaser',
      dataSource: 'DiamondTeaser',
    },
    params: {
      FlipDesign: '0',
    },
    fields: {
      Headline: {
        value: 'Passion to protect',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam sed aliquam quia aut itaque, laboriosam in nemo tenetur facere praesentium quidem neque! Iste, inventore cumque. Quaerat itaque ex soluta!',
      },
      Button: {
        value: {
          href: '/',
          text: 'Core  Values',
        },
      },
      ButtonIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      DiamondTiles: [
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
                  value: '',
                },
              },
            },
            DiamondBorder: {
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
            Image: {
              value: {
                src: '',
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
                  value: 'purple',
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
                  value: '',
                },
              },
            },
            DiamondBorder: {
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
                  value: 'teal',
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

export const FlippedDesign: Story = {
  args: {
    rendering: {
      componentName: 'DiamondTeaser',
      dataSource: 'DiamondTeaser',
    },
    params: {
      FlipDesign: '1',
    },
    fields: {
      Headline: {
        value: 'Passion to protect',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam sed aliquam quia aut itaque, laboriosam in nemo tenetur facere praesentium quidem neque! Iste, inventore cumque. Quaerat itaque ex soluta!',
      },
      Button: {
        value: {
          href: '/',
          text: 'Core  Values',
        },
      },
      ButtonIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      DiamondTiles: [
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
                  value: '',
                },
              },
            },
            DiamondBorder: {
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
            Image: {
              value: {
                src: '',
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
                  value: 'purple',
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
                  value: '',
                },
              },
            },
            DiamondBorder: {
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
                  value: 'teal',
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

export const ALotOfContent: Story = {
  args: {
    rendering: {
      componentName: 'DiamondTeaser',
      dataSource: 'DiamondTeaser',
    },
    params: {
      FlipDesign: '0',
    },
    fields: {
      Headline: {
        value: 'Passion to protect',
      },
      Description: {
        value:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt massa cursus neque sagittis auctor. Nullam vitae rhoncus sapien, sed hendrerit est. Donec gravida nisl purus, eget pharetra est euismod ac. Praesent blandit rhoncus nisl at molestie. Donec auctor feugiat scelerisque. Cras sem dolor, lacinia convallis suscipit ac, blandit sit amet mi. Fusce ornare, eros et commodo malesuada, quam purus lacinia nibh, eu condimentum tortor orci eget massa. Praesent at tortor hendrerit enim rhoncus venenatis ac nec libero. Sed facilisis pretium elit, non laoreet metus facilisis ut.</p><p>Aliquam ut quam pretium, egestas est ac, luctus ligula. Vivamus id purus sapien. Duis aliquet dignissim cursus. Aliquam erat volutpat. Curabitur sed mauris pretium, consectetur ligula posuere, vestibulum enim. Sed in sollicitudin metus, sed fermentum nisl. Proin vulputate non ipsum at rutrum. Etiam ac tellus sed enim hendrerit tincidunt porttitor vitae enim.</p><p>Pellentesque fermentum ligula eget elit fringilla, nec suscipit nulla dictum. Morbi eget ante justo. Sed laoreet mauris est, nec dignissim eros lacinia ac. Duis justo lacus, sollicitudin a pulvinar id, egestas sit amet eros. Cras facilisis mauris felis, sit amet ornare velit facilisis id. Aliquam vehicula nec arcu vitae vulputate. Morbi elementum sagittis mattis. Sed lectus turpis, commodo id fermentum nec, interdum id odio. Proin eu tristique lectus. Pellentesque eleifend facilisis massa eget rhoncus. Praesent luctus justo et augue ullamcorper tincidunt. Pellentesque volutpat erat ligula, a placerat ipsum tincidunt mattis. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>',
      },
      Button: {
        value: {
          href: '/',
          text: 'Core  Values',
        },
      },
      ButtonIcon: {
        fields: {
          Value: {
            value: 'icon-shopping-cart',
          },
        },
      },
      DiamondTiles: [
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
                  value: '',
                },
              },
            },
            DiamondBorder: {
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
            Image: {
              value: {
                src: '',
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
                  value: 'purple',
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
                  value: '',
                },
              },
            },
            DiamondBorder: {
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
                  value: 'teal',
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
