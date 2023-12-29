import GatedComponent from 'components/GatedComponent/GatedComponent';

interface GatedComponentPageProps {
  hasGatedContent: boolean;
  hasCookie: boolean;
}

const GatedComponentPage = (props: GatedComponentPageProps) => {
  const hasGatedContent = props?.hasGatedContent;
  const hasCookie = props?.hasCookie;

  const componentArgs = {
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
      Premium: hasGatedContent,
    },
  };

  const loremIpsum = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fusce odio diam, fringilla vel orci at, eleifend auctor lacus. Ut
        eu molestie dui. In hac habitasse platea dictumst. Quisque eu varius
        velit. Fusce quis semper ipsum. Ut ultricies, arcu a pellentesque
        fringilla, mi nibh tempus nunc, sed lobortis enim velit et sem. Aenean
        ornare tempus rutrum. Cras sed ex urna. Pellentesque semper leo quis dui
        posuere, quis blandit dolor ultricies. Aenean dignissim lacus eu dui
        tincidunt euismod.
      </p>
      <p>
        Etiam ullamcorper augue varius, faucibus dolor ac, bibendum neque. Nunc
        odio felis, ornare nec nulla id, porttitor sagittis mi. Nulla facilisi.
        Nam id porta tellus. Donec a purus blandit turpis viverra suscipit
        mollis at dolor. Maecenas nisl justo, sodales vel orci semper,
        condimentum ultrices mi. Quisque feugiat, leo quis venenatis pulvinar,
        dui quam convallis mauris, elementum eleifend odio nisi egestas arcu.
      </p>
      <p>
        Etiam semper mollis turpis, eget egestas augue condimentum sit amet.
        Nullam vehicula convallis lectus, eu venenatis urna consectetur ac. Sed
        facilisis, massa a mollis bibendum, augue justo blandit justo, vel
        hendrerit enim est eget nisi. Curabitur nibh tortor, mollis malesuada
        porttitor et, tincidunt vel nulla. Ut ornare et lectus in porttitor.
        Vestibulum dapibus aliquet nunc, sed vulputate velit vestibulum vel.
        Morbi et ornare massa. In hac habitasse platea dictumst. Vestibulum
        pulvinar, lacus id blandit sollicitudin, lectus orci laoreet sapien, nec
        cursus diam mi ut augue. Ut auctor maximus mi eu fermentum. Integer
        maximus libero tortor, pretium ullamcorper libero commodo eu. Sed et
        dictum velit. Mauris a justo at leo eleifend scelerisque nec id dolor.
        Aenean id vulputate tortor. Donec vulputate vulputate posuere.
      </p>
    </div>
  );

  hasCookie
    ? (document.cookie = 'GATED_FORM_COOKIE=1')
    : (document.cookie = 'GATED_FORM_COOKIE=0');

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
      }}
    >
      <GatedComponent {...componentArgs} />
      <section
        style={{
          maxWidth: '1440px',
          backgroundColor: 'red',
          color: 'white',
          padding: '40px 20px',
        }}
      >
        {loremIpsum}
      </section>
      <section
        style={{
          maxWidth: '1440px',
          backgroundColor: 'yellow',
          color: 'black',
          padding: '40px 20px',
        }}
      >
        {loremIpsum}
      </section>
      <section
        className={
          hasGatedContent
            ? 'resource-gated-content'
            : 'resource-ungated-content'
        }
        style={{
          maxWidth: '1440px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '40px 20px',
        }}
      >
        {hasGatedContent && <h1>I am gated</h1>}
        {loremIpsum}
      </section>
      <section
        style={{
          maxWidth: '1440px',
          backgroundColor: 'black',
          color: 'white',
          padding: '40px 20px',
        }}
      >
        {loremIpsum}
      </section>
    </main>
  );
};

export default GatedComponentPage;
