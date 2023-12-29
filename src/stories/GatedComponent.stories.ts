import type { Meta, StoryObj } from '@storybook/react';
import GatedComponent from 'components/GatedComponent/GatedComponent';

const meta: Meta<typeof GatedComponent> = {
  title: 'Components/GatedComponent',
  component: GatedComponent,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=683-1549&mode=design&t=L2r19aILjwVqkNQz-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GatedComponent>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'GatedComponent',
      dataSource: 'GatedComponent',
    },
    fields: {
      Title: {
        value: 'Want to continue exploring?',
      },
      Subtitle: {
        value: 'Enter your information to access the full content.',
      },
      ButtonText: {
        value: 'Access premium content',
      },
      BackButton: {
        value: {
          href: '/test/',
          text: 'Learn more',
          linktype: 'internal',
        },
      },
    },
  },
};
