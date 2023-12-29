import type { Meta, StoryObj } from '@storybook/react';
import Accordion from 'components/Accordion/Accordion';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=434-49&t=Se0tMSdwhQXF05Lu-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Accordion',
      dataSource: 'Accordion',
    },
    fields: {
      Title: {
        value: 'Frequently asked questions',
      },
      Description: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Inde sermone vario sex illa a Dipylo stadia confecimus. Sed in rebus apertissimis nimium longi sumus. ',
      },
      Children: [
        {
          Fields: {
            Title: {
              value: 'Lorem ipsum dolor sit amet',
            },
            Description: {
              value:
                'Lorem ipsum dolor sit amet. Est recusandae modi sed voluptates sint sit repellat molestiae ea amet sequi eum dicta quos in dolorem molestias a laudantium laudantium.',
            },
          },
        },
        {
          Fields: {
            Title: {
              value: 'Lorem ipsum dolor sit amet',
            },
            Description: {
              value: `<h1>Heading One</h1>
              <h2>Wowthatsalongwordforaheader</h2>
              <h3>Heading Three</h3>
              <h4>Heading Four</h4>
              <h5>Heading Five</h5>
              <h6>Heading Six</h6>
              <p>
              Body Text Lorem ipsum dolor sit amet, <b>bold text</b> consectetur italicized text 
              adipiscing elit, sed do eiusmod <a href="#">inline link</a> tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Consectetursuperduperreallyridiculouslyabsurdlyatrociouslywonderfullybeautifullychaoticlongword sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetursuperduperreallyridiculouslyabsurdlyatrociouslywonderfullybeautifullychaoticlongword italicized text adipiscing elit</li>
                <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
                <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
            </ul>`,
            },
          },
        },
      ],
    },
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const defaultStory = await canvas.getByRole('accordion');

  await expect(defaultStory.innerText).toBe('Accordion');
};
