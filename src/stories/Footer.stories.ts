import type { Meta, StoryObj } from '@storybook/react';
import Footer from 'components/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=579-150&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const mobileLogo = {
  value: {
    src: 'https://picsum.photos/300/60',
    alt: 'IM logo',
  },
};

const desktopLogo = {
  value: {
    src: 'https://picsum.photos/658/69',
    alt: 'IM logo',
  },
};

const menuItems = [
  {
    fields: {
      Title: {
        value: 'What we do',
      },
      MenuItems: [
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'External Link',
          },
        },
        {
          value: {
            href: '/internal/',
            target: '_self',
            text: 'Internal Link',
          },
        },
        {
          value: {
            href: '/internal/',
            text: 'Link',
          },
        },
        {
          value: {
            href: 'tel:+1800000000',
            text: '800-000-000',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Workplace Transformation',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Data & IT Security',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Sustainability',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'View all services',
          },
        },
      ],
    },
  },
  {
    fields: {
      Title: {
        value: 'Who we are',
      },
      MenuItems: [
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Our company',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Careers',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Sustainability',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Events',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Investors',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Supplier Diversity',
          },
        },
      ],
    },
  },
  {
    fields: {
      Title: {
        value: 'Resources',
      },
      MenuItems: [
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Knowledge Center',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Customer Success Stories',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Sustainability',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Events',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'View all resources',
          },
        },
      ],
    },
  },
  {
    fields: {
      Title: {
        value: 'Support',
      },
      MenuItems: [
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: '24/7 Support Center',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Customer Information & Contact Center',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Pay your bill online',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Feedback',
          },
        },
      ],
    },
  },
  {
    fields: {
      Title: {
        value: 'Contact us',
      },
      MenuItems: [
        {
          value: {
            href: 'tel:1+8776543757',
            target: '_blank',
            text: 'Sales - 877-654-3757',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Login',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Pay a bill online',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Sales',
          },
        },
        {
          value: {
            href: 'https://www.google.com',
            target: '_blank',
            text: 'Invoice information',
          },
        },
      ],
    },
  },
];

const legalLinks = [
  {
    fields: {
      Link: {
        value: {
          href: 'https://www.google.com',
          target: '_blank',
          text: 'External Link',
        },
      },
    },
  },
  {
    fields: {
      Link: {
        value: {
          href: '/link/',
          text: 'Link',
        },
      },
    },
  },
  {
    fields: {
      Link: {
        value: {
          href: '/internal-link/',
          target: '_self',
          text: 'Internal Link',
        },
      },
    },
  },
  {
    fields: {
      Link: {
        value: {
          href: 'https://www.google.com',
          target: '_blank',
          text: 'Privacy notice',
        },
      },
    },
  },
  {
    fields: {
      Link: {
        value: {
          href: 'https://www.google.com',
          target: '_blank',
          text: 'Your U.S. state privacy rights',
        },
      },
    },
  },
];

const copyrightText = {
  value: 'Iron Mountain, Inc.',
};

const logoLink = {
  value: {
    href: '/',
  },
};
const socialIcon = {
  fields: {
    SocialIcon: {
      value: {
        src: 'https://picsum.photos/32',
        alt: 'Facebook',
      },
    },
    SocialLink: {
      value: {
        href: 'https://www.facebook.com',
        target: '_blank',
      },
    },
  },
};

const certification = {
  fields: {
    SocialIcon: {
      value: {
        src: 'https://picsum.photos/100',
        alt: 'ABC Certification',
      },
    },
    SocialLink: {
      value: {
        href: '',
      },
    },
  },
};

const additionalImages = [
  certification,
  certification,
  certification,
  certification,
  certification,
];

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Footer',
      dataSource: 'Footer',
    },
    fields: {
      MobileLogo: mobileLogo,
      DesktopLogo: desktopLogo,
      MenuItems: menuItems,
      SocialIconList: [],
      LegalLinks: legalLinks,
      CopyrightText: copyrightText,
      AdditionalImages: [],
    },
  },
};

export const WithSocialMediaIcons: Story = {
  args: {
    rendering: {
      componentName: 'Footer',
      dataSource: 'Footer',
    },
    fields: {
      MobileLogo: mobileLogo,
      DesktopLogo: desktopLogo,
      MenuItems: menuItems,
      SocialIconList: [socialIcon, socialIcon, socialIcon],
      LegalLinks: legalLinks,
      CopyrightText: copyrightText,
      AdditionalImages: [],
    },
  },
};

export const WithAdditionalImages: Story = {
  args: {
    rendering: {
      componentName: 'Footer',
      dataSource: 'Footer',
    },
    fields: {
      MobileLogo: mobileLogo,
      DesktopLogo: desktopLogo,
      MenuItems: menuItems,
      SocialIconList: [],
      LegalLinks: legalLinks,
      CopyrightText: copyrightText,
      AdditionalImages: additionalImages,
    },
  },
};

export const WithEverything: Story = {
  args: {
    rendering: {
      componentName: 'Footer',
      dataSource: 'Footer',
    },
    fields: {
      MobileLogo: mobileLogo,
      DesktopLogo: desktopLogo,
      MenuItems: menuItems,
      SocialIconList: [socialIcon, socialIcon, socialIcon],
      LegalLinks: legalLinks,
      CopyrightText: copyrightText,
      AdditionalImages: additionalImages,
      LogoLink: logoLink,
    },
  },
};
