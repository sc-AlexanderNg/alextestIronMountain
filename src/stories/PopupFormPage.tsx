import { ComponentParams, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import PopupForm from 'components/PopupForm/PopupForm';

interface PopupFormProps {
  rendering: {
    componentName: string;
    dataSource: string;
  };
  params: ComponentParams;
  fields: {
    FormHtml: Field<string>;
    SuccessMessage: Field<string>;
    ButtonText: Field<string>;
    IsStorybook?: boolean;
  };
}

const loremIpsum = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
    }}
  >
    <p>
      freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce odio diam, fringilla vel orci at, eleifend auctor lacus. Ut eu
      molestie dui. In hac habitasse platea dictumst. Quisque eu varius velit.
      Fusce quis semper ipsum. Ut ultricies, arcu a pellentesque fringilla, mi
      nibh tempus nunc, sed lobortis enim velit et sem. Aenean ornare tempus
      rutrum. Cras sed ex urna. Pellentesque semper leo quis dui posuere, quis
      blandit dolor ultricies. Aenean dignissim lacus eu dui tincidunt euismod.
    </p>
    <p>
      Etiam ullamcorper augue varius, faucibus dolor ac, bibendum neque. Nunc
      odio felis, ornare nec nulla id, porttitor sagittis mi. Nulla facilisi.
      Nam id porta tellus. Donec a purus blandit turpis viverra suscipit mollis
      at dolor. Maecenas nisl justo, sodales vel orci semper, condimentum
      ultrices mi. Quisque feugiat, leo quis venenatis pulvinar, dui quam
      convallis mauris, elementum eleifend odio nisi egestas arcu.
    </p>
    <p>
      Etiam semper mollis turpis, eget egestas augue condimentum sit amet.
      Nullam vehicula convallis lectus, eu venenatis urna consectetur ac. Sed
      facilisis, massa a mollis bibendum, augue justo blandit justo, vel
      hendrerit enim est eget nisi. Curabitur nibh tortor, mollis malesuada
      porttitor et, tincidunt vel nulla. Ut ornare et lectus in porttitor.
      Vestibulum dapibus aliquet nunc, sed vulputate velit vestibulum vel. Morbi
      et ornare massa. In hac habitasse platea dictumst. Vestibulum pulvinar,
      lacus id blandit sollicitudin, lectus orci laoreet sapien, nec cursus diam
      mi ut augue. Ut auctor maximus mi eu fermentum. Integer maximus libero
      tortor, pretium ullamcorper libero commodo eu. Sed et dictum velit. Mauris
      a justo at leo eleifend scelerisque nec id dolor. Aenean id vulputate
      tortor. Donec vulputate vulputate posuere.
    </p>
  </div>
);

const PopupFormPage = (props: PopupFormProps): JSX.Element => {
  const { fields } = props;
  const FormHtml = fields?.FormHtml;
  const SuccessMessage = fields?.SuccessMessage;
  const ButtonText = fields?.ButtonText;

  const componentArgs = {
    rendering: {
      componentName: 'PopupForm',
      dataSource: 'Video',
    },
    params: {},
    fields: {
      FormHtml,
      SuccessMessage,
      ButtonText,
      IsStorybook: true,
    },
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100px',
        }}
      >
        <h1>Header</h1>
      </div>
      <div style={{ containerType: 'inline-size' }}>
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        <PopupForm {...componentArgs} />
      </div>
      <div>
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
        {loremIpsum}
      </div>
    </div>
  );
};

export default PopupFormPage;
