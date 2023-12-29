import type { Meta, StoryObj } from '@storybook/react';

import FlipCard from 'components/FlipCard/FlipCard';

const meta: Meta<typeof FlipCard> = {
  title: 'Components/FlipCard',
  component: FlipCard,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=504%3A169&t=UdjoXaIpAgLk83up-1',
    },
  },
};

// <ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>

export default meta;
type Story = StoryObj<typeof FlipCard>;

const cardWithoutIcon = {
  fields: {
    Title: {
      value: 'Digitize',
    },
    DescriptionofFront: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
    },
    DescriptionofBack: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul>',
    },
    FlipText: {
      value: 'Explore',
    },
  },
};

const cardWithIcon = {
  fields: {
    Title: {
      value: 'Digitize',
    },
    Icon: {
      value: {
        src: 'https://picsum.photos/40/47',
        alt: 'img',
      },
    },
    DescriptionofFront: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
    },
    DescriptionofBack: {
      value:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore</li></ul><strong>Employees can spend up to 40% of their day looking for paper files</strong>',
    },
    FlipText: {
      value: 'Explore',
    },
  },
};

export const WithoutOptionalIcon: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithoutIcon,
        cardWithoutIcon,
        cardWithoutIcon,
        cardWithoutIcon,
      ],
    },
  },
};

export const WithOptionalIcon: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [cardWithIcon, cardWithIcon, cardWithIcon, cardWithIcon],
    },
  },
};

export const OneCard: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [cardWithIcon],
    },
  },
};

export const TwoCards: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [cardWithIcon, cardWithIcon],
    },
  },
};

export const ThreeCards: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [cardWithIcon, cardWithIcon, cardWithIcon],
    },
  },
};

export const FourCards: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [cardWithIcon, cardWithIcon, cardWithIcon, cardWithIcon],
    },
  },
};

export const FiveCards: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
      ],
    },
  },
};

export const SixCards: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
      ],
    },
  },
};

export const MaxCards1: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    params: {
      MaxCardsPerRow: '{"Value":{"value":"1"}}',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
      ],
    },
  },
};

export const MaxCards2: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    params: {
      MaxCardsPerRow: '{"Value":{"value":"2"}}',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
      ],
    },
  },
};

export const MaxCards3: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    params: {
      MaxCardsPerRow: '{"Value":{"value":"3"}}',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
      ],
    },
  },
};

export const MaxCards4: Story = {
  args: {
    rendering: {
      componentName: 'FlipCard',
      dataSource: 'FlipCard',
    },
    params: {
      MaxCardsPerRow: '{"Value":{"value":"4"}}',
    },
    fields: {
      Headline: {
        value: 'Complimentary Service options',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore',
      },
      Cards: [
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
        cardWithIcon,
      ],
    },
  },
};
