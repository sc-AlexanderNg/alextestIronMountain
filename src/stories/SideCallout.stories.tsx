import type { Meta, StoryObj } from '@storybook/react';
import SideCallout from 'components/SideCallout/SideCallout';

const meta: Meta<typeof SideCallout> = {
  title: 'Components/SideCallout',
  component: SideCallout,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2378-1348&mode=design&t=V5WCOXPhs0DW1PjP-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideCallout>;

const Base = {
  rendering: {
    componentName: 'SideCallout',
    dataSource: 'SideCallout',
  },
};

const DarkTheme = {
  params: {
    Theme: '{"Value":{"value":"dark"}}',
    DynamicPlaceholderId: '10',
  },
};

const LightTheme = {
  params: {
    Theme: '{"Value":{"value":"light"}}',
    DynamicPlaceholderId: '10',
  },
};

const SideCalloutFieldsNoImage = {
  fields: {
    Title: {
      value: 'Interested in one of our services?',
    },
    Description: {
      value:
        '<p>Lorem ipsum dolor sit amet consectetur. Velit eget pulvinar scelerisque molestie consectetur lacus cursus feugiat.</p>              <ul><li>Here is something interesting!</li><li>Wow! Another cool factoid!</li><li>Another little fascinating tidbit of information</li></ul><a class="btn-tertiary" href="google.com" target="_blank">Get A Quote</a>',
    },
  },
};

const SideCalloutFieldsWithIcon = {
  fields: {
    Icon: {
      value: {
        src: 'https://picsum.photos/20',
        alt: 'Icon alt text',
      },
    },
    Title: {
      value: 'Iron Mountain Mobile',
    },
    Description: {
      value:
        '<p>Track orders and receive alerts about your records inventory using your smartphone.</p><ul><li><a href="google.com" target="_blank"><img src="https://picsum.photos/125/42" alt="Image of Google Play Store Logo" /></a></li><li><a href="google.com" target="_blank"><img src="https://picsum.photos/125/42" alt="Image of Google Play Store Logo" /></a></li></ul>',
    },
  },
};

const SideCalloutFieldsWithList = {
  fields: {
    Icon: {
      value: {
        src: 'https://picsum.photos/20',
        alt: 'Icon alt text',
      },
    },
    Title: {
      value: 'Iron Mountain Mobile',
    },
    Description: {
      value:
        '<p>Track orders and receive alerts about your records inventory using your smartphone.</p><ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>',
    },
  },
};

export const DarkThemeStory: Story = {
  args: {
    ...Base,
    ...SideCalloutFieldsNoImage,
    ...DarkTheme,
  },
};

export const LightThemeStory: Story = {
  args: {
    ...Base,
    ...SideCalloutFieldsNoImage,
    ...LightTheme,
  },
};

export const VariantWithImages: Story = {
  args: {
    ...Base,
    ...SideCalloutFieldsWithIcon,
    ...LightTheme,
  },
};

export const VariantWithImagesDark: Story = {
  args: {
    ...Base,
    ...SideCalloutFieldsWithIcon,
    ...DarkTheme,
  },
};

export const VariantWithList: Story = {
  args: {
    ...Base,
    ...SideCalloutFieldsWithList,
    ...LightTheme,
  },
};
