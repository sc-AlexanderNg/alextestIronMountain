import type { Meta, StoryObj } from '@storybook/react';

import ProblemSolution from 'components/ProblemSolution/ProblemSolution';

const meta: Meta<typeof ProblemSolution> = {
  title: 'Components/ProblemSolution',
  component: ProblemSolution,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=683%3A298&t=KlCN4qHxWzVJsDo7-1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProblemSolution>;

const card = {
  fields: {
    ProblemDescription: {
      value:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <ul><li>Standard li</li><li><a href="google.com" target="_blank">Link 1</a></li><li>Last li</li></ul>',
    },
    ProblemTitle: {
      value: 'Problem Statement Lorem Ipsum',
    },
    SolutionTitle: {
      value: 'Problem Statement Lorem Ipsum',
    },
    SolutionDescription: {
      value:
        'Lorem Ipsum <a href="">is simply dummy</a> text of the printing and typesetting industry. <ul><li>Standard li</li><li><a href="google.com" target="_blank">Link 1</a></li><li>Last li</li></ul>',
    },
  },
};

const base = {
  Title: {
    value: 'How Iron Mountain Meets the data challenges of Public Sector',
  },
  Description: {
    value:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  Cards: [card, card, card],
};

export const WithoutVideoOrImage: Story = {
  args: {
    rendering: {
      componentName: 'ProblemSolution',
      dataSource: 'ProblemSolution',
    },
    params: {
      Theme: '{"Value":{"value":"solid-color"}}',
      CardColor: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      ...base,
    },
  },
};

export const Teal: Story = {
  args: {
    rendering: {
      componentName: 'ProblemSolution',
      dataSource: 'ProblemSolution',
    },
    params: {
      Theme: '{"Value":{"value":"diamond"}}',
      CardColor: '{"Value":{"value":"teal"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      ...base,
    },
  },
};

export const Purple: Story = {
  args: {
    rendering: {
      componentName: 'ProblemSolution',
      dataSource: 'ProblemSolution',
    },
    params: {
      Theme: '{"Value":{"value":"diamond"}}',
      CardColor: '{"Value":{"value":"purple"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      ...base,
    },
  },
};

export const WithDiamondsBackground: Story = {
  args: {
    rendering: {
      componentName: 'ProblemSolution',
      dataSource: 'ProblemSolution',
    },
    params: {
      Theme: '{"Value":{"value":"diamond"}}',
      CardColor: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      ...base,
    },
  },
};

export const WithImageDiamondsBackground: Story = {
  args: {
    rendering: {
      componentName: 'ProblemSolution',
      dataSource: 'ProblemSolution',
      placeholders: {
        'media-right': [
          {
            uid: '4734183d-4a52-4254-a046-00915262afe7',
            componentName: 'ImageBlock',
            dataSource: '{CB905D38-E815-4E12-8C35-65916EC4EA38}',
            params: {
              DynamicPlaceholderId: '4',
            },
            fields: {
              Image: {
                value: {
                  src: 'https://picsum.photos/2000',
                  alt: 'Alt text',
                },
              },
              TargetUrl: {
                value: {
                  href: '',
                },
              },
              ImageCaption: {
                value: '',
              },
            },
          },
        ],
      },
    },
    params: {
      Theme: '{"Value":{"value":"diamond"}}',
      CardColor: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      ...base,
    },
  },
};

export const WithVideo: Story = {
  args: {
    rendering: {
      componentName: 'ProblemSolution',
      dataSource: 'ProblemSolution',
      placeholders: {
        'media-right': [
          {
            uid: '4734183d-4a52-4254-a046-00915262afe7',
            componentName: 'VideoPlayer',
            dataSource: '{CB905D38-E815-4E12-8C35-65916EC4EA38}',
            params: {
              DynamicPlaceholderId: '4',
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
        ],
      },
    },
    params: {
      Theme: '{"Value":{"value":"diamond"}}',
      CardColor: '{"Value":{"value":""}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      ...base,
    },
  },
};
