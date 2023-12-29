import { UtilityNavigationComponentProps } from './UtilityNavigationProps';
import UtilityNavigationDesktop from './UtilityNavigationDesktop';
import UtilityNavigationMobile from './UtilityNavigationMobile';

const UtilityNavigation = (
  props: UtilityNavigationComponentProps
): JSX.Element => {
  return (
    <>
      {props.openUtilityNav ? (
        <UtilityNavigationDesktop
          fields={props?.fields}
          openUtilityNav={props?.openUtilityNav}
          clearMenu={props?.clearMenu}
        />
      ) : (
        <UtilityNavigationMobile
          fields={props?.fields}
          clearMenu={props?.clearMenu}
        />
      )}
    </>
  );
};

export default UtilityNavigation;
