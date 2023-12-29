import type { Meta, StoryObj } from '@storybook/react';

import Statistics from 'components/Statistics/Statistics';

const meta: Meta<typeof Statistics> = {
  title: 'Components/Statistics',
  component: Statistics,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=576%3A317&t=UdjoXaIpAgLk83up-1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Statistics>;

const Base = {
  rendering: {
    componentName: 'Statistics',
    dataSource: 'Statistics',
  },
};

const WhiteBlue = {
  params: {
    Theme: '{"Value":{"value":"white-blue"}}',
    DynamicPlaceholderId: '1',
  },
};

const WhitePurple = {
  params: {
    Theme: '{"Value":{"value":"white-purple"}}',
    DynamicPlaceholderId: '1',
  },
};

const GreyBlue = {
  params: {
    Theme: '{"Value":{"value":"grey-blue"}}',
    DynamicPlaceholderId: '1',
  },
};

const GreyPurple = {
  params: {
    Theme: '{"Value":{"value":"grey-purple"}}',
    DynamicPlaceholderId: '1',
  },
};

const stat = {
  fields: {
    Header: {
      value: '95%',
    },
    Description: {
      value: `<p>230,000 customers and 95%+ fortune 1000 <a href='/'>link example</a> organizations trust us to store and manage their most valuable information and assets</p>
        <cite><span>Person Name</span><span>Person title, person company</span></cite>`,
    },
  },
};

const statWithList = {
  fields: {
    Header: {
      value: '95%',
    },
    Description: {
      value: `<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>
        <cite><span>Person Name</span><span>Person title, person company</span></cite>`,
    },
  },
};

const Four = {
  fields: {
    HeaderGradient: 'purple',
    Stats: [stat, stat, stat, stat],
    DiamondsGraphicsOne: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsTwo: {
      fields: {
        Value: {
          value: 'orange',
        },
      },
    },
    DiamondsGraphicsThree: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsFour: {
      fields: {
        Value: {
          value: 'green',
        },
      },
    },
  },
};

const Three = {
  fields: {
    HeaderGradient: 'purple',
    Stats: [stat, stat, stat],
    DiamondsGraphicsOne: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsTwo: {
      fields: {
        Value: {
          value: 'orange',
        },
      },
    },
    DiamondsGraphicsThree: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsFour: {
      fields: {
        Value: {
          value: 'green',
        },
      },
    },
  },
};

const Two = {
  fields: {
    HeaderGradient: 'purple',
    Stats: [stat, stat],
    DiamondsGraphicsOne: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsTwo: {
      fields: {
        Value: {
          value: 'orange',
        },
      },
    },
    DiamondsGraphicsThree: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsFour: {
      fields: {
        Value: {
          value: 'green',
        },
      },
    },
  },
};

const One = {
  fields: {
    HeaderGradient: 'purple',
    Stats: [stat],
    DiamondsGraphicsOne: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsTwo: {
      fields: {
        Value: {
          value: 'orange',
        },
      },
    },
    DiamondsGraphicsThree: {
      fields: {
        Value: {
          value: 'light-blue',
        },
      },
    },
    DiamondsGraphicsFour: {
      fields: {
        Value: {
          value: 'green',
        },
      },
    },
  },
};

export const OneGreyPurple: Story = {
  args: {
    ...Base,
    ...One,
    ...GreyPurple,
  },
};

export const TwoGreyPurple: Story = {
  args: {
    ...Base,
    ...Two,
    ...GreyPurple,
  },
};

export const ThreeGreyPurple: Story = {
  args: {
    ...Base,
    ...Three,
    ...GreyPurple,
  },
};

export const FourGreyPurple: Story = {
  args: {
    ...Base,
    ...Four,
    ...GreyPurple,
  },
};

export const FourWhitePurple: Story = {
  args: {
    ...Base,
    ...Four,
    ...WhitePurple,
  },
};

export const FourWhiteBlue: Story = {
  args: {
    ...Base,
    ...Four,
    ...WhiteBlue,
  },
};

export const FourGreyBlue: Story = {
  args: {
    ...Base,
    ...Four,
    ...GreyBlue,
  },
};

export const ThreeWhite: Story = {
  args: {
    ...Base,
    ...Three,
    ...WhitePurple,
  },
};

export const WithTitle: Story = {
  args: {
    ...Base,
    ...GreyPurple,
    fields: {
      Title: {
        value: 'Headline lorem ipsum dolor sit amet',
      },
      HeaderGradient: 'purple',
      Stats: [stat, stat, stat, stat],
      DiamondsGraphicsOne: {
        fields: {
          Value: {
            value: 'light-blue',
          },
        },
      },
      DiamondsGraphicsTwo: {
        fields: {
          Value: {
            value: 'orange',
          },
        },
      },
      DiamondsGraphicsThree: {
        fields: {
          Value: {
            value: 'light-blue',
          },
        },
      },
      DiamondsGraphicsFour: {
        fields: {
          Value: {
            value: 'green',
          },
        },
      },
    },
  },
};

export const WithList: Story = {
  args: {
    ...Base,
    ...GreyPurple,
    fields: {
      Title: {
        value: '',
      },
      HeaderGradient: 'purple',
      Stats: [statWithList, statWithList, statWithList, statWithList],
      DiamondsGraphicsOne: {
        fields: {
          Value: {
            value: 'light-blue',
          },
        },
      },
      DiamondsGraphicsTwo: {
        fields: {
          Value: {
            value: 'orange',
          },
        },
      },
      DiamondsGraphicsThree: {
        fields: {
          Value: {
            value: 'light-blue',
          },
        },
      },
      DiamondsGraphicsFour: {
        fields: {
          Value: {
            value: 'green',
          },
        },
      },
    },
  },
};
