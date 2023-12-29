import type { Meta, StoryObj } from '@storybook/react';

import VerticalTabs from 'components/VerticalTabs/VerticalTabs';

const Children = [
  {
    Fields: {
      Title: {
        value: 'Record Management and Storage',
      },
      Id: {
        value: 'tab1',
      },
    },
  },
  {
    Fields: {
      Title: {
        value: 'Bulk Paper Shredding',
      },
      Id: {
        value: 'tab2',
      },
    },
  },
  {
    Fields: {
      Title: {
        value: 'Shred & Store Bundles',
      },
      Id: {
        value: 'tab3',
      },
    },
  },
  {
    Fields: {
      Title: {
        value: 'Residential',
      },
      Id: {
        value: 'tab4',
      },
    },
  },
  {
    Fields: {
      Title: {
        value: 'Recurring Paper',
      },
      Id: {
        value: 'tab5',
      },
    },
  },
  {
    Fields: {
      Title: {
        value: 'Shred Container Options',
      },
      Id: {
        value: 'tab6',
      },
    },
  },
  {
    Fields: {
      Title: {
        value: 'Wholesale Services',
      },
      Id: {
        value: 'tab7',
      },
    },
  },
];

// const placeholders = {} as PlaceholdersData;

// Children.forEach((child, index: number) => {
//   placeholders[`verticaltab${index}`] = [
//     {
//       componentName: 'RichTextBlock',
//       dataSource: 'RichTextBlock',
//       fields: {
//         Content: {
//           value: `<h3>Headline for ${child.Fields.Title.value}</h3>
//           <p>Lorem ipsum dolor sit amet consectetur. Et lobortis purus ipsum viverra tempor. Interdum nunc vitae senectus varius egestas ultrices. Ut in justo vitae in odio vivamus tincidunt. Dolor gravida egestas rutrum in</p>
//           <button class="btn-blue">Learn More</button>`,
//         },
//       },
//     },
//   ];
// });

const meta: Meta<typeof VerticalTabs> = {
  title: 'Components/VerticalTabs',
  component: VerticalTabs,
  argTypes: {},
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof VerticalTabs>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'VerticalTabs',
      dataSource: 'VerticalTabs',
      params: {},
      placeholders: {
        verticaltab: [
          {
            componentName: 'RichTextBlock',
            params: {
              tabid: 'tab1',
            },
            fields: {
              Content: {
                value: 'This is the left',
              },
            },
          },
          {
            componentName: 'RichTextBlock',
            params: {
              tabid: 'tab1',
            },
            fields: {
              Content: {
                value: '',
              },
            },
          },
          {
            componentName: 'RichTextBlock',
            params: {
              tabid: 'tab2',
            },
            fields: {
              Content: {
                value: 'Why Iron Mountain',
              },
            },
          },
        ],
      },
    },
    fields: {
      HeaderImage: {
        value: {
          src: 'https://picsum.photos/2000/300',
          alt: 'Photo of Lorem Ipsum',
        },
      },
      Headline: {
        value: 'What type of services are you looking for?',
      },
      Children,
    },
  },
};
