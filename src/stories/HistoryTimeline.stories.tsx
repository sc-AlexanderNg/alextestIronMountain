import type { Meta, StoryObj } from '@storybook/react';
import HistoryTimeline from 'components/HistoryTimeline/HistoryTimeline';

const meta: Meta<typeof HistoryTimeline> = {
  title: 'Components/HistoryTimeline',
  component: HistoryTimeline,
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            padding: '50dvh 0',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Keep scrolling</p>
        </div>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=434-49&t=Se0tMSdwhQXF05Lu-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HistoryTimeline>;

const fields = {
  Button: {
    value: {
      text: 'Learn more',
      href: 'https://google.com',
    },
  },
  Description: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  },
  Title: {
    value: 'Our history',
  },
  Children: [
    {
      Name: 'History Timeline Segment1',
      DisplayName: 'History Timeline Segment1',
      Fields: {
        Children: [
          {
            Name: 'Timeline Item1',
            DisplayName: 'Timeline Item1',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
          {
            Name: 'Timeline Item2',
            DisplayName: 'Timeline Item2',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
          {
            Name: 'Timeline Item3',
            DisplayName: 'Timeline Item3',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
        ],
      },
      Url: null,
    },
    {
      Name: 'History Timeline Segment2',
      DisplayName: 'History Timeline Segment2',
      Fields: {
        Children: [
          {
            Name: 'Timeline Item1',
            DisplayName: 'Timeline Item1',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
          {
            Name: 'Timeline Item2',
            DisplayName: 'Timeline Item2',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
          {
            Name: 'Timeline Item3',
            DisplayName: 'Timeline Item3',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
        ],
      },
      Url: null,
    },
    {
      Name: 'History Timeline Segment3',
      DisplayName: 'History Timeline Segment3',
      Fields: {
        Children: [
          {
            Name: 'Timeline Item1',
            DisplayName: 'Timeline Item1',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
          {
            Name: 'Timeline Item2',
            DisplayName: 'Timeline Item2',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
          {
            Name: 'Timeline Item3',
            DisplayName: 'Timeline Item3',
            Fields: {
              Hide: {
                value: false,
              },
              TimelineDescription: {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              },
              TimelineImage: {
                value: {
                  src: 'https://picsum.photos/400/300',
                },
              },
              TimelineTitle: {
                value: 'Lorem Ipsum',
              },
              TimelineYear: {
                value: '2022',
              },
            },
            Url: null,
          },
        ],
      },
      Url: null,
    },
  ],
};

export const Light: Story = {
  args: {
    params: {
      Theme: '{"Value":{"value":"light"}}',
    },
    rendering: {
      componentName: 'HistoryTimeline',
      dataSource: 'HistoryTimeline',
    },
    fields,
  },
};

export const Dark: Story = {
  args: {
    params: {
      Theme: '{"Value":{"value":"dark"}}',
    },
    rendering: {
      componentName: 'HistoryTimeline',
      dataSource: 'HistoryTimeline',
    },
    fields,
  },
};

export const WithoutCTA: Story = {
  args: {
    params: {
      Theme: '{"Value":{"value":"dark"}}',
    },
    rendering: {
      componentName: 'HistoryTimeline',
      dataSource: 'HistoryTimeline',
    },
    fields: {
      ...fields,
      Button: {
        value: {
          text: '',
          href: '',
        },
      },
    },
  },
};
