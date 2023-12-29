import type { Meta, StoryObj } from '@storybook/react';
import ImageBlock from 'components/ImageBlock/ImageBlock';

const meta: Meta<typeof Image> = {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageBlock>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ImageBlock',
      dataSource: 'ImageBlock',
    },
    params: {
      ImageType: '{"Value":{"value":"full-bleed"}}',
    },
    fields: {
      ImageCaption: {
        value: '',
      },
      Image: {
        value: {
          src: 'https://picsum.photos/600/300',
          alt: 'This is Alt Text',
          width: '600',
          height: '300',
        },
      },
      Link: {
        value: {
          text: '',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{D6CFE16C-1AD8-43DA-90FF-26478082B2ED}',
          href: '/',
        },
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    rendering: {
      componentName: 'ImageBlock',
      dataSource: 'ImageBlock',
    },
    params: {
      ImageType: '{"Value":{"value":"rounded"}}',
    },
    fields: {
      ImageCaption: {
        value: '',
      },
      Image: {
        value: {
          src: 'https://picsum.photos/600/300',
          alt: 'This is Alt Text',
          width: '600',
          height: '300',
        },
      },
      Link: {
        value: {
          text: '',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          querystring: '',
          id: '{D6CFE16C-1AD8-43DA-90FF-26478082B2ED}',
          href: '/',
        },
      },
    },
  },
};
