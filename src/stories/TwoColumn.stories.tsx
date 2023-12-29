import type { Meta, StoryObj } from '@storybook/react';
import TwoColumn from 'components/TwoColumn/TwoColumn';

const meta: Meta<typeof TwoColumn> = {
  title: 'Layouts/TwoColumn',
  component: TwoColumn,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TwoColumn>;

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
    'twocolumn-left': [RichTextBlockContent],
    'twocolumn-right': [ImageBlockContent],
  },
};

export const split50_50nestedTrue: Story = {
  name: '50-50 nested true',
  args: {
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      tabid: '',
      Alignment: '{"Value":{"value":"center"}}',
    },
    rendering,
    'data-nested': true,
  },
};

export const split50_50nestedFalse: Story = {
  name: '50-50 nested false',
  args: {
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      tabid: '',
      Alignment: '{"Value":{"value":"end"}}',
    },
    rendering,
  },
};

export const split40_60: Story = {
  name: '40-60',
  args: {
    params: {
      Proportions: '{"Value":{"value":"40-60"}}',
      tabid: '',
    },
    rendering,
  },
};

export const split33_66: Story = {
  name: '33-66',
  args: {
    params: {
      Proportions: '{"Value":{"value":"33-66"}}',
      tabid: '',
    },
    rendering,
  },
};

export const split25_75: Story = {
  name: '25-75',
  args: {
    params: {
      Proportions: '{"Value":{"value":"25-75"}}',
      tabid: '',
    },
    rendering,
  },
};

export const split60_40: Story = {
  name: '60-40',
  args: {
    params: {
      Proportions: '{"Value":{"value":"60-40"}}',
      tabid: '',
    },
    rendering,
  },
};

export const split66_33: Story = {
  name: '66-33',
  args: {
    params: {
      Proportions: '{"Value":{"value":"66-33"}}',
      tabid: '',
    },
    rendering,
  },
};

export const split75_25: Story = {
  name: '75-25',
  args: {
    params: {
      Proportions: '{"Value":{"value":"75-25"}}',
      tabid: '',
    },
    rendering,
  },
};

const SideCallout = {
  componentName: 'SideCallout',
  dataSource: 'SideCallout',
  fields: {
    Title: {
      value: 'Interested in one of our services?',
    },
    Description: {
      value:
        '<p>Lorem ipsum dolor sit amet consectetur. Velit eget pulvinar scelerisque molestie consectetur lacus cursus feugiat.</p><a class="btn-tertiary" href="google.com" target="_blank">Get A Quote</a>',
    },
  },
};

export const sideCallouts: Story = {
  args: {
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      tabid: '',
    },
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [SideCallout],
        'twocolumn-right': [SideCallout],
      },
    },
    'data-nested': false,
  },
};

const Video = {
  componentName: 'Video',
  dataSource: 'Video',
  fields: {
    BrightcoveID: {
      value: '6331608600112',
    },
    YoutubeID: {
      value: 'BdCeeB59eRM',
    },
    Caption: {
      value: 'This is caption Text',
    },
    ButtonText: {
      value: 'Watch Overview',
    },
  },
};

export const video: Story = {
  args: {
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      tabid: '',
    },
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [Video],
        'twocolumn-right': [Video],
      },
    },
    'data-nested': false,
  },
};
