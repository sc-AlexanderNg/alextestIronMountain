import { BaseSyntheticEvent, useState } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  Image as JssImage,
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { APACRegionSVG } from './APACRegion';
import { LatinAmericaSVG } from './LatinAmericaRegion';
import { MidEastAfricaSVG } from './MidEastAfricaRegion';
import { NorthAmericaSVG } from './NorthAmericaRegion';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './DisplayMap.module.css';

export type MapProps = {
  mask: string;
  selectedMask: string;
  handleHover: (e: BaseSyntheticEvent) => void;
  resetMask: () => void;
  selectMask: (e: BaseSyntheticEvent) => void;
  regionOptions: string[];
};

export const Map = (props: MapProps) => {
  const handleHover = props?.handleHover;
  const resetMask = props?.resetMask;
  const selectMask = props?.selectMask;
  const regionOptions = props?.regionOptions;

  return (
    <svg
      width="1162"
      height="498"
      viewBox="0 0 1162 498"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <NorthAmericaSVG
        onMouseEnter={handleHover}
        onMouseLeave={resetMask}
        onClick={selectMask}
        isSelectable={regionOptions.includes('NA')}
      />
      <APACRegionSVG
        onMouseEnter={handleHover}
        onMouseLeave={resetMask}
        onClick={selectMask}
        isSelectable={regionOptions.includes('APAC')}
      />

      <LatinAmericaSVG
        onMouseEnter={handleHover}
        onMouseLeave={resetMask}
        onClick={selectMask}
        isSelectable={regionOptions.includes('LATAM')}
      />
      <MidEastAfricaSVG
        onMouseEnter={handleHover}
        onMouseLeave={resetMask}
        onClick={selectMask}
        isSelectable={regionOptions.includes('EMEA')}
      />
    </svg>
  );
};

export type Region = {
  fields: {
    Value: { value: string };
  };
};

export type Asset = {
  fields: {
    MapImage: ImageField;
    Region: Region;
    Title?: TextField;
    Link?: LinkField;
    Description?: TextField;
  };
};

export type Child = {
  TemplateId: string;
  Fields: {
    Assets?: Asset[];
    Title: TextField;
  };
};
export interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: TextField;
    Children: Child[];
  };
}

const DisplayMap = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Children = fields?.Children;
  const { sitecoreContext } = useSitecoreContext();

  // const regiontemplateId = '6b677bb6-8a7b-47d0-94e6-16a48b1d022c';
  const maptabtemplateId = '675937eb-4c5e-47c7-8c87-81e9ddf328a5';

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverMask, setHoverMask] = useState('');
  const [selectedMask, setSelectedMask] = useState('');
  const compName = props?.rendering?.componentName?.toLowerCase();

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  const menuOptions = Children?.filter(
    (child) => child.TemplateId === maptabtemplateId
  );

  const mapOptions = menuOptions[selectedIndex]?.Fields?.Assets;

  // const modals = Children?.filter(
  //   (child) => child.TemplateId === regiontemplateId
  // );

  const displayMap = () => {
    if (selectedMask === '' && hoverMask === '') {
      return mapOptions?.find(
        (map) => map?.fields?.Region?.fields?.Value?.value === 'DEFAULT'
      );
    }

    if (selectedMask === '' && hoverMask !== '') {
      return mapOptions?.find(
        (map) => map?.fields?.Region?.fields?.Value?.value === hoverMask
      );
    }

    return mapOptions?.find(
      (map) => map?.fields?.Region?.fields?.Value?.value === selectedMask
    );
  };

  const handleHover = (event: BaseSyntheticEvent) => {
    selectedMask ? setHoverMask('') : setHoverMask(event.target.id);
  };

  const resetMask = () => {
    setHoverMask('');
  };

  const selectMask = (e: BaseSyntheticEvent) => {
    setSelectedMask(e.target.id);
  };

  const deselectMask = () => {
    setSelectedMask('');
    setHoverMask('');
  };

  const handleMenuChange = (index: number) => {
    deselectMask();
    resetMask();
    setSelectedIndex(index);
  };

  const displayModal = () => {
    if (mapOptions && selectedMask) {
      const modal = mapOptions.find(
        (modal) => modal.fields?.Region?.fields?.Value?.value === selectedMask
      );

      return (
        <div data-rte data-region={selectedMask} className={styles.modal}>
          <button
            className={styles['exit-btn']}
            onClick={() => deselectMask()}
          ></button>
          <Text tag="h2" field={modal?.fields?.Title} />
          <Text
            className="font-body-sm"
            tag="p"
            field={modal?.fields?.Description}
          />
          {modal?.fields?.Link?.value?.href && (
            <Link
              data-clickable-id={`${compName}-details`}
              data-clickable-text={modal?.fields?.Link?.value?.text}
              data-clickable-href={modal?.fields?.Link?.value?.href}
              className={`${
                modal?.fields?.Link?.value?.class
                  ? modal?.fields?.Link?.value?.class
                  : 'btn-tertiary'
              }`}
              field={modal?.fields?.Link}
            />
          )}
        </div>
      );
    }

    return <></>;
  };

  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['display-map']}>
        <Text className="font-header-h2" tag="h2" field={Title} />

        <ul className={styles.tabs} role="list">
          {Children?.filter(
            (childprops) => childprops.TemplateId?.match(maptabtemplateId)
          )?.map((tab, index: number) => {
            return (
              <Text
                key={index}
                field={tab.Fields?.Title}
                tag="li"
                data-selected={selectedIndex === index}
                data-clickable-action={selectedIndex === index}
                data-clickable-id={`${compName}-details`}
                data-clickable-text={tab.Fields?.Title.value}
                onClick={() => {
                  handleMenuChange(index);
                }}
              />
            );
          })}
        </ul>
        <div className={styles['map-container']}>
          <div className={styles.mask}>
            {mapOptions && (
              <Map
                mask={hoverMask}
                selectedMask={selectedMask}
                handleHover={handleHover}
                resetMask={resetMask}
                selectMask={selectMask}
                regionOptions={mapOptions?.map(
                  (opt) => opt?.fields?.Region?.fields?.Value?.value
                )}
              />
            )}
          </div>
          <JssImage
            className={styles['map-img']}
            field={displayMap()?.fields?.MapImage}
          />
        </div>
        {selectedMask !== '' && displayModal()}
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(DisplayMap);
