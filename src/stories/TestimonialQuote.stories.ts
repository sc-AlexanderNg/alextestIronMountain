import type { Meta, StoryObj } from '@storybook/react';
import TestimonialQuote from 'components/TestimonialQuote/TestimonialQuote';
const meta: Meta<typeof TestimonialQuote> = {
  title: 'Components/TestimonialQuote',
  component: TestimonialQuote,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=621-1211&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialQuote>;

const testimonialOne = {
  fields: {
    Quote: {
      value:
        '"From a network perspective, Iron Mountain is  carrier-neutral facility This allows us the flexibility to improve our overall spend and service by expanding our carrier choices.This flexibility has made a pretty dramatic imapct to our total infrastucture costs."',
    },
    Author: {
      value: 'Stephen Comstock',
    },
    AuthorInfo: {
      value: 'Senior Director, IT Operations',
    },
  },
};

const testimonialTwo = {
  fields: {
    Quote: {
      value:
        '"We were looking for a provider that was focused on providing enterprise-grade data center space power and network acess-lron Mountain had it all <ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>"',
    },
    Author: {
      value: 'Chris Cllandro',
    },
    AuthorInfo: {
      value: 'CIO',
    },
  },
};

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Testimonial',
      dataSource: 'Testimonial',
    },
    params: {
      Theme: '{"Value":{"value":"ltTheme"}}',
    },
    fields: {
      Testimonials: [
        testimonialOne,
        testimonialTwo,
        testimonialOne,
        testimonialTwo,
      ],
    },
  },
};

export const DarkTheme: Story = {
  args: {
    rendering: {
      componentName: 'Testimonial',
      dataSource: 'Testimonial',
    },
    params: {
      Theme: '{"Value":{"value":"dkTheme"}}',
    },
    fields: {
      Testimonials: [
        testimonialOne,
        testimonialTwo,
        testimonialOne,
        testimonialTwo,
      ],
    },
  },
};
