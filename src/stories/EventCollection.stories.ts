import type { Meta, StoryObj } from '@storybook/react';
import EventCollection from 'components/EventCollection/EventCollection';

const meta: Meta<typeof EventCollection> = {
  title: 'Components/EventCollection',
  component: EventCollection,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2842-2964&mode=design&t=0hEHGJpk0lrOUY1y-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventCollection>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'EventCollection',
      dataSource: 'EventCollection',
    },
    params: {
      BrowseMoreUrl: '/resources',
    },
    fields: {
      InstanceID: {
        value: 'MY37RXSKCD',
      },
      APIKey: {
        value: 'dda77a6e6a1c6d112b541ac4799a31de',
      },
      IndexName: {
        value: 'crawler_im-dev-sitecore-headless_eventdate_desc',
      },
      DisableInsights: true,
    },
    // placeholders: {
    //   'search-results-right': [],
    // },
  },
};
