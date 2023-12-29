import type { Meta, StoryObj } from '@storybook/react';
import ProfileCards from 'components/ProfileCards/ProfileCards';

const meta: Meta<typeof ProfileCards> = {
  title: 'Components/ProfileCards',
  component: ProfileCards,
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            height: '10dvh',
            border: '1px dashed black',
          }}
        />
        <div style={{ containerType: 'inline-size' }}>
          <Story />
        </div>
        <div
          style={{
            height: '10dvh',
            border: '1px dashed black',
          }}
        />
      </div>
    ),
  ],
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=2842-2529&mode=design&t=k0G19dOTae0uNSco-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCards>;

const description =
  'Lorem ipsum dolor sit amet consectetur. Ultrices pulvinar posuere aliquam pharetra dui aliquam nunc.';

const profile = {
  fields: {
    NameTitle: {
      value: 'Lorem Ipsum',
    },
    BioImage: {
      value: {
        src: 'https://picsum.photos/292/292',
        alt: 'Photo of Lorem Ipsum',
        height: '300px',
        width: '300px',
      },
    },
    OrganizationTitle: {
      value: 'Tree planter',
    },
    Bio: {
      value:
        '<p>Lorem Smith is Executive Vice President and General Manager at Iron Mountain for digital solutions, overseeing the innovation, execution, and growth of Iron Mountain’s digital products, solutions and go-to-market strategy. Iron Mountain’s digital strategy brings together the full lifecycle of Iron Mountain digital products and solutions to create and innovate a strong product pipeline of technology solutions for its customers.</p><p>Passionate about Diversity, Equity and Inclusion (DE&I), Bhargava is a Board Member for C200, a non-profit organization whose mission is to educate, inspire, support and advance women in leadership roles. She is also a member of the Advisory Council for the Women Business Collective, and was the recipient of the 2022 Outstanding 50 Asian Americans in Business Award from the Asian American Business Development Center (AABDC).</p><ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul><p>Ms. Bhargava earned a Bachelors in Computer Engineering from the University of Mumbai, India, a Masters in Computer Networking from North Carolina State University, and an MBA from MIT’s Sloan School of Business.</p>',
    },
  },
};

export const EightProfiles: Story = {
  args: {
    rendering: {
      componentName: 'ProfileCards',
      dataSource: 'ProfileCards',
    },
    fields: {
      Headline: {
        value: 'Meet our team',
      },
      Description: {
        value: description,
      },
      Cards: [
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
      ],
      PopupLabel: {
        value: 'read bio',
      },
    },
  },
};

export const NineProfiles: Story = {
  args: {
    rendering: {
      componentName: 'ProfileCards',
      dataSource: 'ProfileCards',
    },
    fields: {
      Headline: {
        value: 'Meet our team',
      },
      Description: {
        value: description,
      },
      Cards: [
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
        profile,
      ],
      PopupLabel: {
        value: 'read bio',
      },
    },
  },
};
