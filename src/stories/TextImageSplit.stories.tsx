import type { Meta, StoryObj } from '@storybook/react';

import TextImageSplit from 'components/TextImageSplit/TextImageSplit';

const meta: Meta<typeof TextImageSplit> = {
  title: 'Components/TextImageSplit',
  component: TextImageSplit,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=542-366&t=ITAQpsrHUxw3ptrG-0',
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

const RichTextBlockLongContent = {
  componentName: 'RichTextBlock',
  dataSource: 'RichTextBlock',
  fields: {
    Content: {
      value: `<div class="font-eyebrow">eyebrow</div>
      <h3>H3 Headline</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Et lobortis purus ipsum viverra tempor. Interdum nunc vitae senectus varius egestas ultrices. Ut in justo vitae in odio vivamus tincidunt. Dolor gravida egestas rutrum in</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur. Et lobortis purus ipsum viverra tempor. Interdum nunc vitae senectus varius egestas ultrices. Ut in justo vitae in odio vivamus tincidunt. Dolor gravida egestas rutrum in</p>
      <button class="btn-blue">Learn More</button>`,
    },
  },
};

const IconListContent = {
  componentName: 'RichTextBlock',
  dataSource: 'RichTextBlock',
  fields: {
    Content: {
      value: `<h3>About the Boston Data Center</h3>
      <p>Iron Mountain BOS-1 is a 21,000 ft2 facility with 3.6 MW of power and significant potential to scale upon our 58-acre campus. Rated to withstand Category 4 hurricane winds.</p>
      <ul class="icon-list">
        <li data-icon="measure">Lorem ipsum dolor sit amet stat</li>
        <li data-icon="measure">21,000 ft2 usable floorspace</li>
        <li data-icon="light-bulb">5 MW capacity</li>
      </ul>
      <button class="btn-download">Download fact sheet</button>`,
    },
  },
};

const DiamondListContent = {
  componentName: 'RichTextBlock',
  dataSource: 'RichTextBlock',
  fields: {
    Content: {
      value: `<h3>About the Boston Data Center</h3>
      <p>Iron Mountain BOS-1 is a 21,000 ft2 facility with 3.6 MW of power and significant potential to scale upon our 58-acre campus. Rated to withstand Category 4 hurricane winds.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet stat</li>
        <li>21,000 ft2 usable floorspace</li>
        <li>5 MW capacity</li>
      </ul>
      <button class="btn-download">Download fact sheet</button>`,
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

const VideoContent = {
  componentName: 'Video',
  dataSource: 'Video',
  fields: {
    BrightcoveID: {
      value: '',
    },
    YoutubeID: {
      value: 'BdCeeB59eRM',
    },
    Caption: {
      value: '',
    },
    ButtonText: {
      value: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextImageSplit>;
export const ImageRight: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [ImageBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const VideoRight: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [VideoContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const WhiteBackTheme: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [VideoContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"background-color"}}',
      BackgroundColor: '{"Value":{"value":"white"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const ImageRightExtraLongText: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockLongContent],
        'twocolumn-right': [ImageBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const WithIconList: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [ImageBlockContent],
        'twocolumn-right': [IconListContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const WithDiamondList: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [ImageBlockContent],
        'twocolumn-right': [DiamondListContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"dark"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const ImageRightWithBackgroundColor: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [ImageBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"white-background"}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const FullBleedImageRight: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [ImageBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"full-bleed"}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const FullBleedVideoRight: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [VideoContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"full-bleed"}}',
      BackgroundColor: '{"Value":{"value":"default"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const FullBleedVideoLeft: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [VideoContent],
        'twocolumn-right': [RichTextBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"full-bleed"}}',
      BackgroundColor: '{"Value":{"value":"dark"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const ImageLeft: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [ImageBlockContent],
        'twocolumn-right': [RichTextBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"light-gray"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const VideoLeft: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [VideoContent],
        'twocolumn-right': [RichTextBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":""}}',
      BackgroundColor: '{"Value":{"value":"dark"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const FullBleedImageLeft: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [ImageBlockContent],
        'twocolumn-right': [RichTextBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"full-bleed"}}',
      BackgroundColor: '{"Value":{"value":"dark"}}',
      tabid: '',
    },
    fields: {},
  },
};

export const BackgroundImageTextRight: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [],
        'twocolumn-right': [RichTextBlockContent],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"background-image"}}',
      BackgroundColor: '{"Value":{"value":"light-gray"}}',
      tabid: '',
    },
    fields: {
      BackgroundImage: {
        value: {
          src: 'https://placekitten.com/800/600',
          alt: 'placeholder image',
          width: 800,
          height: 600,
        },
      },
    },
  },
};

export const BackgroundImageTextLeft: Story = {
  args: {
    rendering: {
      componentName: 'TwoColumn',
      dataSource: 'TwoColumn',
      placeholders: {
        'twocolumn-left': [RichTextBlockContent],
        'twocolumn-right': [],
      },
    },
    params: {
      Proportions: '{"Value":{"value":"50-50"}}',
      Theme: '{"Value":{"value":"background-image"}}',
      BackgroundColor: '{"Value":{"value":"dark"}}',
      tabid: '',
    },
    fields: {
      BackgroundImage: {
        value: {
          src: 'https://placekitten.com/800/600',
          alt: 'placeholder image',
          width: 800,
          height: 600,
        },
      },
    },
  },
};
