import {
  ComponentProps,
  ComponentWithContextProps,
} from '../lib/component-props';

export const getAnchorTag = (
  props: ComponentProps | ComponentWithContextProps
): JSX.Element => {
  if (props?.params?.AnchorTagName) {
    const anchorName = props?.params?.AnchorTagName;

    return <a id={anchorName} className="spa-link" />;
  }

  return <></>;
};
