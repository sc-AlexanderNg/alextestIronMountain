import type { Meta, StoryObj } from '@storybook/react';
import SearchResults from 'components/SearchResults/SearchResults';

const meta: Meta<typeof SearchResults> = {
  title: 'Components/SearchResults',
  component: SearchResults,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=4490-5939&mode=design&t=3bsd87563WXeGqZ8-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchResults>;

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

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'SearchResult',
      dataSource: 'SearchResult',
      placeholders: {
        'search-results-right': [RichTextBlockContent],
      },
    },
    fields: {
      InstanceID: {
        value: 'MY37RXSKCD',
      },
      APIKey: {
        value: 'dda77a6e6a1c6d112b541ac4799a31de',
      },
      IndexName: {
        value: 'crawler_im-dev-sitecore-headless',
      },
    },
  },
};
