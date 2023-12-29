import type { Meta, StoryObj } from '@storybook/react';
import RichTextBlock from 'components/RichTextBlock/RichTextBlock';

const meta: Meta<typeof RichTextBlock> = {
  title: 'Components/RichTextBlock',
  component: RichTextBlock,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RichTextBlock>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'RichTextBlock',
      dataSource: 'BodyRichTextBlockCopy',
    },
    fields: {
      Content: {
        value: `<h1>Heading One</h1>
        <h2>Heading Two</h2>
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
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr/>
        <p>
        Body Text Lorem ipsum dolor sit amet, <b>bold text</b> consectetur italicized text 
        adipiscing elit, sed do eiusmod <a href="#">inline link</a> tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="https://picsum.photos/800/600"/>
        <ul>
            <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
            <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit
                <ul>
                    <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
                    <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
                    <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
                </ul>
            </li>
            <li>Unordered List Item Lorem ipsum dolor sit amet, bold text consectetur italicized text adipiscing elit</li>
        </ul>
        <ol>
            <li>Ordered list item one</li>
            <li>Ordered list item two</li>
            <li>Ordered list item three</li>
        </ol>
        <ul class="icon-list">
          <li data-icon="measure">Lorem ipsum dolor sit amet stat</li>
          <li data-icon="measure">21,000 ft2 usable floorspace</li>
          <li data-icon="light-bulb">5 MW capacity</li>
        </ul>
        <div style="display: flex; flex-wrap: wrap; height: fit-content; gap: 10px; padding: 20px;">
          <button class="btn-primary">Primary Button</button>
          <button class="btn-secondary">Secondary Button</button>
          <button class="btn-blue">Blue Button</button>
          <button class="btn-tertiary">Tertiary Button</button>
          <button class="btn-icon" data-icon="icon-shopping-cart">Icon Button</button>
          <button class="btn-download">Download Button</button>
          <a class="btn-download">Download Link</a>
          <a class="btn-icon" data-icon="icon-shopping-cart">Icon Link</a>
          <a class="btn-primary">Primary Link Button</a>
          <a class="btn-secondary">Secondary Link Button</a>
          <a class="btn-blue">Blue Link Button</a>
          <a class="btn-tertiary">Tertiary Link Button</a>
        </div>
        <div data-theme="dark" style="display: flex; flex-wrap: wrap; height: fit-content; gap: 10px; background-color: #14477D; padding: 20px; margin: 20px;">
          <button class="btn-primary">Primary Button</button>
          <button class="btn-secondary">Secondary Button</button>
          <button class="btn-blue">Blue Button</button>
          <button class="btn-tertiary">Tertiary Button</button>
          <button class="btn-icon" data-icon="icon-shopping-cart">Icon Button</button>
          <button class="btn-download">Download Button</button>
          <a class="btn-download">Download Link</a>
          <p>
          <a class="btn-icon" data-icon="icon-shopping-cart">Icon Link</a>
          </p>
          <a class="btn-primary">Primary Link Button</a>
          <a class="btn-secondary">Secondary Link Button</a>
          <a class="btn-blue">Blue Link Button</a>
          <a class="btn-tertiary">Tertiary Link Button</a>
        </div>
        <div data-button-width="full" style="display: flex; flex-direction: column; gap: 10px; background-color: #e8e8e8; padding: 20px; margin: 20px;">
          <button class="btn-primary">Primary Button</button>
          <button class="btn-secondary">Secondary Button</button>
          <button class="btn-blue">Blue Button</button>
          <button class="btn-tertiary">Tertiary Button</button>
          <button class="btn-icon" data-icon="icon-shopping-cart">Icon Button</button>
          <button class="btn-download">Download Button</button>
          <a class="btn-download">Download Link</a>
          <a class="btn-icon" data-icon="icon-shopping-cart">Icon Link</a>
          <a class="btn-primary">Primary Link Button</a>
          <a class="btn-secondary">Secondary Link Button</a>
          <a class="btn-blue">Blue Link Button</a>
          <a class="btn-tertiary">Tertiary Link Button</a>
        </div>
        <div style="display: flex; flex-wrap: wrap; height: fit-content; gap: 10px; padding: 20px;">
          <div class="tag-icon" data-icon="shopping-cart">Shop now (Icon Tag)</div>
        </div>
        <div data-theme="dark" style="display: flex; flex-wrap: wrap; height: fit-content; gap: 10px; background-color: #14477D; padding: 20px; margin: 20px;">
          <div class="tag-icon" data-icon="shopping-cart">Shop now (Icon Tag)</div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Table heading one</th>
                    <th>Table heading two</th>
                    <th>Table heading three</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Table cell one</td>
                    <td>Table cell two</td>
                    <td>Table cell three</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Table footer one</td>
                    <td>Table footer two</td>
                    <td>Table footer three</td>
                </tr>
            </tfoot>
        </table>`,
      },
    },
  },
};
