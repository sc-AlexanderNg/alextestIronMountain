import type { Meta, StoryObj } from '@storybook/react';
import TextPersonaSplit from 'components/TextPersonaSplit/TextPersonaSplit';

const meta: Meta<typeof TextPersonaSplit> = {
  title: 'Components/TextPersonaSplit',
  component: TextPersonaSplit,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=504%3A169&t=UdjoXaIpAgLk83up-1',
    },
  },
};

const RichTextBlockContent = {
  componentName: 'RichTextBlock',
  dataSource: 'RichTextBlock',
  fields: {
    Content: {
      value: `<h3>H3 Headline</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Et lobortis purus ipsum viverra tempor. Interdum nunc vitae senectus varius egestas ultrices. Ut in justo vitae in odio vivamus tincidunt. Dolor gravida egestas rutrum in</p>
      <button class="btn-blue">Learn More</button>`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextPersonaSplit>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'TextPersonaSplit',
      dataSource: 'TextPersonaSplit',
      placeholders: {
        content: [RichTextBlockContent],
      },
    },
    params: {
      Theme: '{"Value":{"value":"ltTheme"}}',
    },
    fields: {
      PersonaImage: {
        value: {
          src: 'https://picsum.photos/1000',
          alt: 'Alt Text',
        },
      },
      Title: {
        value: 'Elevate the power of your work',
      },
      Description: {
        value:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button class="btn-blue">click here</button>',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    rendering: {
      componentName: 'TextPersonaSplit',
      dataSource: 'TextPersonaSplit',
      placeholders: {
        content: [RichTextBlockContent],
      },
    },
    params: {
      Theme: '{"Value":{"value":"dkTheme"}}',
    },
    fields: {
      PersonaImage: {
        value: {
          src: 'https://picsum.photos/1000',
          alt: 'Alt Text',
        },
      },
      Title: {
        value: 'Elevate the power of your work',
      },
      Description: {
        value:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button class="btn-blue">click here</button>',
      },
    },
  },
};

export const WithList: Story = {
  args: {
    rendering: {
      componentName: 'TextPersonaSplit',
      dataSource: 'TextPersonaSplit',
      placeholders: {
        content: [RichTextBlockContent],
      },
    },
    params: {
      Theme: '{"Value":{"value":"ltTheme"}}',
    },
    fields: {
      PersonaImage: {
        value: {
          src: 'https://picsum.photos/1000',
          alt: 'Alt Text',
        },
      },
      Title: {
        value: 'Elevate the power of your work',
      },
      Description: {
        value:
          '<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
      },
    },
  },
};
