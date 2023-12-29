import type { Meta, StoryObj } from '@storybook/react';
import BannerCTA_Alert from 'components/BannerCTA_Alert/BannerCTA_Alert';

const meta: Meta<typeof BannerCTA_Alert> = {
  title: 'Components/BannerCTA_Alert',
  component: BannerCTA_Alert,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=753-525&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BannerCTA_Alert>;

const Base = {
  rendering: {
    componentName: 'BannerCTA_Alert',
    dataSource: 'BannerCTA_Alert',
  },
};

const LightBannerLeft = {
  params: {
    Style: '{"Value":{"value":"light"}}',
    ContentOrientation: '{"Value":{"value":"left"}}',
    DynamicPlaceholderId: '9',
  },
};

const LightBannerCenter = {
  params: {
    Style: '{"Value":{"value":"light"}}',
    ContentOrientation: '{"Value":{"value":"center"}}',
    DynamicPlaceholderId: '9',
  },
};

const LightBannerRight = {
  params: {
    Style: '{"Value":{"value":"light"}}',
    ContentOrientation: '{"Value":{"value":"right"}}',
    DynamicPlaceholderId: '9',
  },
};

const DarkBannerCentered = {
  params: {
    Style: '{"Value":{"value":"dark"}}',
    ContentOrientation: '{"Value":{"value":"center"}}',
    DynamicPlaceholderId: '9',
  },
};

const List = {
  fields: {
    Text: {
      value:
        'Sign up for our Healthcare & Life Sciences newsletter <ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul>',
    },
    IsAlert: { value: false },
  },
};

const BannerFieldsWithOptional = {
  fields: {
    Text: {
      value: 'Sign up for our Healthcare & Life Sciences newsletter',
    },
    Icon: {
      value: {
        src: 'https://picsum.photos/19',
      },
    },
    CTA: {
      value: {
        text: 'Sign up',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        querystring: '',
        id: '{1A6546D7-27F2-4213-92CD-07D23C03C4E6}',
        href: '/about-us',
      },
    },
    IsAlert: { value: false },
  },
};

const BannerFieldsWithoutOptional = {
  fields: {
    Text: {
      value: 'Sign up for our Healthcare & Life Sciences newsletter',
    },
    Icon: {
      value: {
        src: '',
      },
    },
    CTA: {
      value: {
        text: '',
        anchor: '',
        linktype: '',
        class: '',
        title: '',
        querystring: '',
        id: '',
        href: '',
      },
    },
    IsAlert: { value: false },
  },
};

const AlertFields = {
  fields: {
    Text: {
      value:
        '<strong>Company-wide Alert</strong><p>Sign up for our Healthcare & Life Sciences newsletter</p>',
    },
    Icon: {
      value: {
        src: 'https://picsum.photos/19',
      },
    },
    IsAlert: { value: true },
  },
};

export const WithOptionalContent: Story = {
  args: {
    ...Base,
    ...BannerFieldsWithOptional,
    ...LightBannerCenter,
  },
};

export const WithoutOptionalContent: Story = {
  args: {
    ...Base,
    ...BannerFieldsWithoutOptional,
    ...LightBannerCenter,
  },
};

export const WithoutList: Story = {
  args: {
    ...Base,
    ...List,
    ...LightBannerCenter,
  },
};

export const DarkBlueBackground: Story = {
  args: {
    ...Base,
    ...BannerFieldsWithoutOptional,
    ...DarkBannerCentered,
  },
};

export const AlertStory: Story = {
  args: {
    ...Base,
    ...LightBannerCenter,
    ...AlertFields,
  },
};

export const LeftAligned: Story = {
  args: {
    ...Base,
    ...BannerFieldsWithOptional,
    ...LightBannerLeft,
  },
};

export const RightAligned: Story = {
  args: {
    ...Base,
    ...BannerFieldsWithOptional,
    ...LightBannerRight,
  },
};

export const leftAlignedAlert: Story = {
  args: {
    ...Base,
    ...LightBannerLeft,
    ...AlertFields,
  },
};

export const rightAlignedAlert: Story = {
  args: {
    ...Base,
    ...LightBannerRight,
    ...AlertFields,
  },
};
