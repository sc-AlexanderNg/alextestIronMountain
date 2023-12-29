import type { Meta, StoryObj } from '@storybook/react';
import FullWidth from 'components/FullWidth/FullWidth';

const meta: Meta<typeof FullWidth> = {
  title: 'Layouts/FullWidth',
  component: FullWidth,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FullWidth>;

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

const ImageBlockContent = {
  componentName: 'ImageBlock',
  dataSource: 'ImageBlock',
  fields: {
    Image: {
      value: {
        src: 'https://picsum.photos/600/400',
        alt: 'This is Alt Text',
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
};

export const Text: Story = {
  args: {
    params: {
      GridParameters:
        '{"Class":{"value":"col-12"},"NonNumeric":{"value":false},"Icon":{"value":""}}',
      CacheClearingBehavior: 'Clear on publish',
      DynamicPlaceholderId: '1',
      Alignment: '{"Value":{"value":"center"}}',
    },
    rendering: {
      componentName: 'FullWidth',
      dataSource: '',
      placeholders: {
        fullwidth: [RichTextBlockContent],
      },
    },
  },
};

export const Image: Story = {
  args: {
    params: {
      GridParameters:
        '{"Class":{"value":"col-12"},"NonNumeric":{"value":false},"Icon":{"value":""}}',
      CacheClearingBehavior: 'Clear on publish',
      DynamicPlaceholderId: '1',
      Alignment: '{"Value":{"value":"center"}}',
    },
    rendering: {
      componentName: 'FullWidth',
      dataSource: '',
      placeholders: {
        fullwidth: [ImageBlockContent],
      },
    },
  },
};
