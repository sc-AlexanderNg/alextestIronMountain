import type { Meta, StoryObj } from '@storybook/react';
import FourColumn from 'components/FourColumn/FourColumn';

const meta: Meta<typeof FourColumn> = {
  title: 'Layouts/FourColumn',
  component: FourColumn,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FourColumn>;

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

const rendering = {
  componentName: 'TwoColumn',
  dataSource: 'TwoColumn',
  placeholders: {
    'fourcolumn-left': [RichTextBlockContent],
    'fourcolumn-middle-left': [RichTextBlockContent],
    'fourcolumn-middle-right': [RichTextBlockContent],
    'fourcolumn-right': [RichTextBlockContent],
  },
};

export const One: Story = {
  name: '25-25-25-25 nested true',
  args: {
    params: { Proportions: '{"Value":{"value":"25-25-25-25"}}' },
    rendering,
    'data-nested': true,
  },
};

export const OneAndAHalf: Story = {
  name: '25-25-25-25 nested false',
  args: {
    params: { Proportions: '{"Value":{"value":"25-25-25-25"}}' },
    rendering,
    'data-nested': false,
  },
};
