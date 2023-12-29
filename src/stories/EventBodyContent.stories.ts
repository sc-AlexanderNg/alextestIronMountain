import type { Meta, StoryObj } from '@storybook/react';

import EventBodyContent from 'components/EventBodyContent/EventBodyContent';

const meta: Meta<typeof EventBodyContent> = {
  title: 'Components/EventBodyContent',
  component: EventBodyContent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EventBodyContent>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'EventBodyContent',
      dataSource: 'BodyRichTextBlockCopy',
    },
    fields: {
      data: {
        fields: {
          eventContent: {
            jsonValue: {
              value:
                '<p><h2>Title here</h2><h3>Subtitle here</h3><h4>h4 subtitle here</h4><h5>subtitle here</h5><h6>h6 subtitle here</h6>Today, we store over 1 billion slides and understand the value of pathology assets in advancing patient care. Our new <a href="/sitecore/service/notfound.aspx?item=master%3a%7b98839A70-BB50-4D2A-AF34-D6A16D3D6500%7d%40en">Digital Pathology On Demand</a>&nbsp;solution digitizes pathology slides to streamline your lab operations and improve digital storage and management.\n</p>\n<p>\nCome to <strong>Booth 110</strong> and see how we are elevating the power of the work of pathologists and lab managers &ndash; and join us for two exciting events: <strong>Digital Pathology Reception @ Sea Life Aquarium</strong> and <strong>Breakfast Workshop</strong> during the conference.<ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul></p>',
            },
          },
        },
      },
    },
  },
};
