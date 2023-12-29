import type { Meta, StoryObj } from '@storybook/react';
import ResourceCollection from 'components/ResourceCollection/ResourceCollection';

const meta: Meta<typeof ResourceCollection> = {
  title: 'Components/ResourceCollection',
  component: ResourceCollection,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2842-2964&mode=design&t=0hEHGJpk0lrOUY1y-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResourceCollection>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ResourceCollection',
      dataSource: 'ResourceCollection',
    },
    fields: {
      InstanceID: {
        value: 'MY37RXSKCD',
      },
      APIKey: {
        value: 'dda77a6e6a1c6d112b541ac4799a31de',
      },
      IndexName: {
        value: 'crawler_im-dev-sitecore-headless',
      },
    },
    // placeholders: {
    //   'search-results-right': [],
    // },
  },
};
