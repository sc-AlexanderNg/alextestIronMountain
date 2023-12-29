import type { Meta, StoryObj } from '@storybook/react';
import EcosystemCollection from 'components/EcosystemCollection/EcosystemCollection';

const meta: Meta<typeof EcosystemCollection> = {
  title: 'Components/EcosystemCollection',
  component: EcosystemCollection,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=4490-5939&mode=design&t=3bsd87563WXeGqZ8-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EcosystemCollection>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'SearchResult',
      dataSource: 'SearchResult',
    },
    fields: {
      InstanceID: {
        value: 'MY37RXSKCD',
      },
      APIKey: {
        value: 'dda77a6e6a1c6d112b541ac4799a31de',
      },
      IndexName: {
        value: 'im-dev-sitecore-headless-ecosystems',
      },
    },
  },
};
