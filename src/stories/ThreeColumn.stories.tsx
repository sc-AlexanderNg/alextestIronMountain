import type { Meta, StoryObj } from '@storybook/react';
import ThreeColumn from 'components/ThreeColumn/ThreeColumn';

const meta: Meta<typeof ThreeColumn> = {
  title: 'Layouts/ThreeColumn',
  component: ThreeColumn,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThreeColumn>;

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

const rendering = {
  componentName: 'TwoColumn',
  dataSource: 'TwoColumn',
  placeholders: {
    'threecolumn-left': [RichTextBlockContent],
    'threecolumn-middle': [ImageBlockContent],
    'threecolumn-right': [RichTextBlockContent],
  },
};

export const One: Story = {
  name: '33-33-33 nested true',
  args: {
    params: {
      Proportions: '{"Value":{"value":"33-33-33"}}',
      Alignment: '{"Value":{"value":"center"}}',
    },
    rendering,
    'data-nested': true,
  },
};

export const OneAndAHalf: Story = {
  name: '53-33-33 nested false',
  args: {
    params: { Proportions: '{"Value":{"value":"33-33-33"}}' },
    rendering,
  },
};

export const Two: Story = {
  name: '15-70-15 nested true',
  args: {
    params: { Proportions: '{"Value":{"value":"15-70-15"}}' },
    rendering,
    'data-nested': true,
  },
};

export const TwoAndAHalf: Story = {
  name: '15-70-15 nested false',
  args: {
    params: { Proportions: '{"Value":{"value":"15-70-15"}}' },
    rendering,
    'data-nested': false,
  },
};
