import type { Meta, StoryObj } from '@storybook/react';

import GatedComponent from 'components/GatedComponent/GatedComponent';
import ResourceBodyContent from 'components/ResourceBodyContent/ResourceBodyContent';

const gatedArgs = {
  rendering: {
    componentName: 'GatedComponent',
    dataSource: 'GatedComponent',
  },
  params: {},
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
    Premium: true,
  },
};

const meta: Meta<typeof ResourceBodyContent> = {
  title: 'Components/ResourceBodyContent',
  component: ResourceBodyContent,
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <GatedComponent {...gatedArgs} />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ResourceBodyContent>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ResourceBodyContent',
      dataSource: 'BodyRichTextBlockCopy',
    },
    fields: {
      data: {
        fields: {
          gatedContent: {
            jsonValue: {
              value: `<h2>GATED!!!!</h2>
              <p>
              Bacon ipsum dolor amet burgdoggen hamburger short ribs, jowl pork chop andouille pancetta short loin filet mignon bacon cupim meatball. Sirloin pork chop capicola, ribeye ball tip ham hock salami leberkas beef ribs. Flank jerky picanha rump turkey, meatloaf pig filet mignon chuck cow chislic. Leberkas biltong salami chislic ball tip hamburger pastrami turkey.
              </p>
              <h3>The situation</h3>
              <h4>Heading Four</h4>
              <h5>Heading Five</h5>
              <h6>Heading Six</h6>
              <p>
              Short loin tongue bacon, shank tri-tip kevin sirloin. Jowl chislic turducken salami. Spare ribs cow chislic bacon meatloaf pastrami short ribs sirloin cupim doner. Landjaeger venison strip steak t-bone, fatback doner short ribs porchetta beef pork jerky biltong prosciutto salami pig. Chuck frankfurter flank burgdoggen. Picanha tail tongue alcatra, beef chuck pork chop bacon filet mignon short loin. Ball tip pork pork belly bresaola shoulder shank prosciutto fatback meatball beef ribs frankfurter buffalo sausage cow.
              </p>
              </p>
      Cupim leberkas ham beef ribs, hamburger tail pork belly fatback jowl cow buffalo. Turkey salami tongue shoulder pork ball tip ribeye burgdoggen. Boudin ham hock flank chuck pork chop brisket meatball pancetta. Burgdoggen tenderloin chuck pork spare ribs pork chop. Jowl tri-tip frankfurter meatloaf, biltong strip steak kevin tail prosciutto chislic jerky. Shankle pork chop landjaeger tri-tip leberkas tenderloin picanha turducken kielbasa shank sirloin salami. Ball tip sirloin pork boudin sausage.
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
              <ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>
              <img src="https://picsum.photos/1042/439"/>
              `,
            },
          },
          ungatedContent: {
            jsonValue: {
              value: `<h2>Summary</h2>
              <p>
              Bacon ipsum dolor amet burgdoggen hamburger short ribs, jowl pork chop andouille pancetta short loin filet mignon bacon cupim meatball. Sirloin pork chop capicola, ribeye ball tip ham hock salami leberkas beef ribs. Flank jerky picanha rump turkey, meatloaf pig filet mignon chuck cow chislic. Leberkas biltong salami chislic ball tip hamburger pastrami turkey.
              </p>
              <h3>The situation</h3>
              <h4>Heading Four</h4>
              <h5>Heading Five</h5>
              <h6>Heading Six</h6>
              <p>
              Short loin tongue bacon, shank tri-tip kevin sirloin. Jowl chislic turducken salami. Spare ribs cow chislic bacon meatloaf pastrami short ribs sirloin cupim doner. Landjaeger venison strip steak t-bone, fatback doner short ribs porchetta beef pork jerky biltong prosciutto salami pig. Chuck frankfurter flank burgdoggen. Picanha tail tongue alcatra, beef chuck pork chop bacon filet mignon short loin. Ball tip pork pork belly bresaola shoulder shank prosciutto fatback meatball beef ribs frankfurter buffalo sausage cow.
              </p>
              </p>
      Cupim leberkas ham beef ribs, hamburger tail pork belly fatback jowl cow buffalo. Turkey salami tongue shoulder pork ball tip ribeye burgdoggen. Boudin ham hock flank chuck pork chop brisket meatball pancetta. Burgdoggen tenderloin chuck pork spare ribs pork chop. Jowl tri-tip frankfurter meatloaf, biltong strip steak kevin tail prosciutto chislic jerky. Shankle pork chop landjaeger tri-tip leberkas tenderloin picanha turducken kielbasa shank sirloin salami. Ball tip sirloin pork boudin sausage.
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
              <ul><li>list item 1</li><li>list item 2<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul></li><li>list item 3</li></ul>
              <img src="https://picsum.photos/1042/439"/>
              `,
            },
          },
          resourceDownload: {
            jsonValue: {
              value: {
                href: '/story-assets/sample.pdf',
              },
            },
          },
          relatedPages: {
            targetItems: [
              {
                url: { path: '/about-us' },

                pageTitle: {
                  jsonValue: {
                    value: 'About Us',
                  },
                },
                shortDescription: {
                  jsonValue: {
                    value:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
                  },
                },
                shortTitle: {
                  jsonValue: {
                    value: 'Misc Page Mini Card',
                  },
                },
                searchResultType: {
                  jsonValue: {
                    fields: {
                      Color: { fields: { Value: { value: 'Dark Blue' } } },
                      Value: {
                        value: 'Misc',
                      },
                    },
                  },
                },
                metaPageTitle: {
                  jsonValue: {
                    value: 'about us',
                  },
                },
                metaPageDescription: {
                  jsonValue: {
                    value: '',
                  },
                },
                openGraphDescription: {
                  jsonValue: {
                    value: '',
                  },
                },
                externalLink: {
                  jsonValue: {
                    value: {
                      href: 'https://www.google.com/',
                      text: 'Go to google',
                      linktype: 'external',
                      url: 'https://www.google.com/',
                      anchor: '',
                      title: 'Go to google',
                      target: '',
                    },
                  },
                },
                title: '',
              },
              {
                url: { path: '/demo/generic-page' },

                searchResultType: {
                  jsonValue: {
                    fields: {
                      Color: { fields: { Value: { value: 'Purple' } } },
                      Value: {
                        value: 'Services',
                      },
                    },
                  },
                },
                shortDescription: {
                  jsonValue: {
                    value:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
                  },
                },
                shortTitle: {
                  jsonValue: {
                    value: 'Misc Page Mini Card',
                  },
                },
                pageTitle: {
                  jsonValue: {
                    value: 'Generic Page',
                  },
                },
                metaPageTitle: {
                  jsonValue: {
                    value: 'misc card',
                  },
                },
                metaPageDescription: {
                  jsonValue: {
                    value: '',
                  },
                },
                openGraphDescription: {
                  jsonValue: {
                    value: '',
                  },
                },
                externalLink: {
                  jsonValue: {
                    value: {
                      href: 'https://www.google.com/',
                      text: 'Go to google',
                      linktype: 'external',
                      url: 'https://www.google.com/',
                      anchor: '',
                      title: 'Go to google',
                      target: '',
                    },
                  },
                },
                title: '',
              },
            ],
          },
        },
      },
    },
  },
};
