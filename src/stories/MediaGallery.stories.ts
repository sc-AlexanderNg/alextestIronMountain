import type { Meta, StoryObj } from '@storybook/react';

import MediaGallery from 'components/MediaGallery/MediaGallery';

const meta: Meta<typeof MediaGallery> = {
  title: 'Components/MediaGallery',
  component: MediaGallery,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2835-4845&mode=design&t=PnekpBMFy2EHwsIr-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MediaGallery>;

const baseItem = {
  BrightcoveId: {
    value: '',
  },
  YouTubeId: {
    value: '',
  },
  Image: {
    value: {
      src: '',
      alt: '',
    },
  },
  Caption: {
    value: '',
  },
};

const brightcoveVideo = {
  fields: {
    ...baseItem,
    BrightcoveId: {
      value: '6331608600112',
    },
  },
};

const brightcoveVideoWithCaption = {
  fields: {
    ...baseItem,
    BrightcoveId: {
      value: '6331608600112',
    },
    Caption: {
      value: 'Video caption goes here',
    },
  },
};

const youtubeVideo = {
  fields: {
    ...baseItem,
    YouTubeId: {
      value: 'BdCeeB59eRM',
    },
    Caption: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    },
  },
};

const image = {
  fields: {
    ...baseItem,
    Image: {
      value: {
        src: 'https://picsum.photos/2000',
        alt: 'Sample Alt Text',
        width: '2000px',
        height: '2000px',
      },
    },
  },
};

const youtubeVideoAndImage = {
  fields: {
    ...baseItem,
    YouTubeId: {
      value: 'BdCeeB59eRM',
    },
    Image: {
      value: {
        src: 'https://picsum.photos/1000',
        alt: 'Sample Alt Text',
        width: '2000px',
        height: '2000px',
      },
    },
  },
};

export const WithTabs: Story = {
  args: {
    rendering: {
      componentName: 'MediaGallery',
      dataSource: 'MediaGallery',
    },
    fields: {
      Title: {
        value: '30+ years of data center & colocation experience',
      },
      Children: [
        {
          TemplateId: '9ed2ec5d-782f-4bf2-8f15-0df59270e523',
          Fields: {
            TabTitle: {
              value: 'AZP-1',
            },
            Gallery: [
              brightcoveVideo,
              brightcoveVideoWithCaption,
              youtubeVideo,
              image,
              youtubeVideoAndImage,
              brightcoveVideo,
            ],
          },
        },
        {
          TemplateId: '9ed2ec5d-782f-4bf2-8f15-0df59270e523',
          Fields: {
            TabTitle: {
              value: 'AZP-2',
            },
            Gallery: [
              image,
              brightcoveVideoWithCaption,
              image,
              youtubeVideo,
              image,
              brightcoveVideo,
            ],
          },
        },
      ],
    },
  },
};

export const WithoutTabs: Story = {
  args: {
    rendering: {
      componentName: 'MediaGallery',
      dataSource: 'MediaGallery',
    },
    fields: {
      Title: {
        value: '30+ years of data center & colocation experience',
      },
      Children: [
        {
          TemplateId: '9ed2ec5d-782f-4bf2-8f15-0df59270e523',
          Fields: {
            TabTitle: {
              value: 'AZP-1',
            },
            Gallery: [
              brightcoveVideo,
              brightcoveVideoWithCaption,
              youtubeVideo,
              image,
              youtubeVideo,
              brightcoveVideo,
            ],
          },
        },
      ],
    },
  },
};

export const VideoAndImage: Story = {
  args: {
    rendering: {
      componentName: 'MediaGallery',
      dataSource: 'MediaGallery',
    },
    fields: {
      Title: {
        value: '30+ years of data center & colocation experience',
      },
      Children: [
        {
          TemplateId: '9ed2ec5d-782f-4bf2-8f15-0df59270e523',
          Fields: {
            TabTitle: {
              value: 'AZP-1',
            },
            Gallery: [
              {
                fields: {
                  ...baseItem,
                  Image: {
                    value: {
                      src: 'https://picsum.photos/856/480',
                      alt: 'Sample Alt Text',
                    },
                  },
                  BrightcoveId: {
                    value: '6331608600112',
                  },
                },
              },
              {
                fields: {
                  ...baseItem,
                  Image: {
                    value: {
                      src: 'https://picsum.photos/856/480',
                      alt: 'Sample Alt Text',
                    },
                  },
                  YouTubeId: {
                    value: 'BdCeeB59eRM',
                  },
                },
              },
              {
                fields: {
                  ...baseItem,
                  Image: {
                    value: {
                      src: 'https://picsum.photos/856/480',
                      alt: 'Sample Alt Text',
                    },
                  },
                },
              },
              {
                fields: {
                  ...baseItem,
                  Image: {
                    value: {
                      src: 'https://picsum.photos/856/480',
                      alt: 'Sample Alt Text',
                    },
                  },
                  YouTubeId: {
                    value: 'BdCeeB59eRM',
                  },
                },
              },
              {
                fields: {
                  ...baseItem,
                  Image: {
                    value: {
                      src: 'https://picsum.photos/856/480',
                      alt: 'Sample Alt Text',
                    },
                  },
                  BrightcoveId: {
                    value: '6331608600112',
                  },
                },
              },
              {
                fields: {
                  ...baseItem,
                  Image: {
                    value: {
                      src: 'https://picsum.photos/856/480',
                      alt: 'Sample Alt Text',
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
};
