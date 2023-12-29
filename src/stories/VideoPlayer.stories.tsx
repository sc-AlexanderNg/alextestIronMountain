import type { Meta, StoryObj } from '@storybook/react';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
  title: 'Molecules/VideoPlayer',
  component: VideoPlayer,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=683-1129&mode=design&t=7kfKT88FviwxwaEX-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Youtube: Story = {
  args: {
    rendering: {
      componentName: 'VideoPlayer',
      dataSource: 'VideoPlayer',
    },
    fields: {
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
    },
  },
};

export const Brightcove: Story = {
  args: {
    rendering: {
      componentName: 'VideoPlayer',
      dataSource: 'VideoPlayer',
    },
    fields: {
      BrightcoveID: {
        value: '6331608600112',
      },
    },
  },
};

export const WithOptionalCaption: Story = {
  args: {
    rendering: {
      componentName: 'VideoPlayer',
      dataSource: 'VideoPlayer',
    },
    fields: {
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      Caption: {
        value: 'Optional caption lorem ipsum',
      },
    },
  },
};

export const WithOptionalCTATextOverride: Story = {
  args: {
    rendering: {
      componentName: 'VideoPlayer',
      dataSource: 'VideoPlayer',
    },
    fields: {
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      ButtonText: {
        value: 'Do a thing',
      },
    },
  },
};

export const WithThumbnailOverride: Story = {
  args: {
    rendering: {
      componentName: 'VideoPlayer',
      dataSource: 'VideoPlayer',
    },
    fields: {
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      Thumbnail: {
        value: {
          src: 'https://picsum.photos/2000',
          alt: 'Sample Alt Text',
          width: '2000px',
          height: '2000px',
        },
      },
    },
  },
};
