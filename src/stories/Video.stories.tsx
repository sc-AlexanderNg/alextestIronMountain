import type { Meta, StoryObj } from '@storybook/react';
import Video from 'components/Video/Video';

const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            padding: '20dvh 0',
            backgroundColor: 'red',
          }}
        />
        <div style={{ containerType: 'inline-size' }}>
          <Story />
        </div>
        <div
          style={{
            padding: '20dvh 0',
            backgroundColor: 'red',
          }}
        />
      </div>
    ),
  ],
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=683-1129&mode=design&t=7kfKT88FviwxwaEX-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
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
  },
};

export const Youtube: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
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
  },
};

export const Brightcove: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
    fields: {
      BrightcoveID: {
        value: '6331608600112',
      },
      YoutubeID: {
        value: '',
      },
      Caption: {
        value: '',
      },
      ButtonText: {
        value: '',
      },
    },
  },
};

export const WithOptionalCaption: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
    fields: {
      BrightcoveID: {
        value: '',
      },
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      Caption: {
        value: 'Optional caption lorem ipsum',
      },
      ButtonText: {
        value: '',
      },
    },
  },
};

export const WithOptionalCTATextOverride: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
    fields: {
      BrightcoveID: {
        value: '',
      },
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      ButtonText: {
        value: 'Do a thing',
      },
      Caption: {
        value: '',
      },
    },
  },
};

export const WithOptionalCTATextAndCaption: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
    fields: {
      BrightcoveID: {
        value: '',
      },
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      ButtonText: {
        value: 'Do a thing',
      },
      Caption: {
        value: 'Optional caption lorem ipsum',
      },
    },
  },
};

export const WithThumbnailOverride: Story = {
  args: {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
    fields: {
      BrightcoveID: {
        value: '',
      },
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      ButtonText: {
        value: '',
      },
      Caption: {
        value: '',
      },
      Thumbnail: {
        value: {
          src: 'https://picsum.photos/2000',
          alt: 'Sample Alt Text',
        },
      },
    },
  },
};
