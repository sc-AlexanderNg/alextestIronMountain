import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  Image as JssImage,
  Link as JssLink,
  LinkField,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './LocationFinderMap.module.css';

type Country = {
  countryItem: { jsonValue: LinkField };
  countryName: { jsonValue: TextField };
};
type AllCountriesList = {
  title: { jsonValue: TextField };
  countriesList: {
    targetItems: Country[];
  };
};

type MapDetailItem = {
  datacenterName: { jsonValue: TextField };
  location: { jsonValue: TextField };
  latitude: { jsonValue: TextField };
  longitude: { jsonValue: TextField };
  image: { jsonValue: ImageField };
  details: { jsonValue: RichTextField };
  cTA1: { jsonValue: LinkField };
  cTA2: { jsonValue: LinkField };
  marker: { jsonValue: ImageField };
};

type Pin = {
  icon_35460b2f50564f439efedeae66b6fd8f: { jsonValue: ImageField };
  description: { jsonValue: TextField };
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    data: {
      fields: {
        title: { jsonValue: TextField };
        pins: {
          targetItems: Pin[];
        };
        map: {
          targetItems: MapDetailItem[];
        };
        allCountryList: {
          targetItems: AllCountriesList[];
        };
        multipleCentersIcon: { jsonValue: ImageField };
      };
    };
  };
}

const LocationFinderMap = (props: ComponentProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const mapJson = JSON.stringify(props?.fields?.data?.fields?.map);
  const mapRangeSt = props.params?.MapRange;
  const compName = props?.rendering?.componentName?.toLowerCase();
  const [infoWindowData, setInfoWindowData] = useState<
    { index: number; info: MapDetailItem } | undefined
  >();
  const [isOpen, setIsOpen] = useState(false);
  let rangeCenter;
  let zoom = 3.5; // Default to NA
  let centerLat = 47.1164; // Default to NA
  let centerLong = -101.2996; // Default to NA

  if (mapRangeSt) {
    const MapRangeJson = JSON.parse(mapRangeSt);

    rangeCenter = MapRangeJson?.RangeCenter?.value.split(',');
    zoom = Number(MapRangeJson?.Zoom?.value);
    centerLat = Number(rangeCenter[0]);
    centerLong = Number(rangeCenter[1]);
  }

  const mapCenter = useMemo(
    () => ({ lat: centerLat, lng: centerLong }),
    [centerLat, centerLong]
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
      zoomControl: true,
      mapTypeControl: true,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [
            {
              gamma: '0.00',
            },
            {
              weight: '0.01',
            },
            {
              visibility: 'on',
            },
            {
              color: '#1B75BC',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#444444',
            },
          ],
        },
        {
          featureType: 'administrative.country',
          elementType: 'geometry.fill',
          stylers: [
            {
              gamma: '0.00',
            },
            {
              weight: '0.01',
            },
            {
              visibility: 'simplified',
            },
            {
              color: '#1b75bc',
            },
          ],
        },
        {
          featureType: 'administrative.country',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff',
            },
          ],
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              gamma: '0',
            },
            {
              weight: '0.01',
            },
          ],
        },
        {
          featureType: 'administrative.province',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#14477d',
            },
          ],
        },
        {
          featureType: 'administrative.province',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#fbfbfb',
            },
          ],
        },
        {
          featureType: 'administrative.province',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              gamma: '0.00',
            },
            {
              weight: '0.01',
            },
          ],
        },
        {
          featureType: 'administrative.locality',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'off',
            },
            {
              hue: '#FFFFFF',
            },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            {
              color: '#1B75BC',
            },
          ],
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'landscape.natural.landcover',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#1B75BC',
            },
          ],
        },
        {
          featureType: 'landscape.natural.terrain',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#14477d',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [
            {
              saturation: -100,
            },
            {
              lightness: 45,
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              color: '#FFFFFF',
            },
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#023459',
            },
          ],
        },
      ],
    }),
    []
  );

  const handleMarkerClick = (index: number, info: MapDetailItem) => {
    //mapRef?.panTo({ lat, lng });
    setInfoWindowData({ index, info });
    setIsOpen(true);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBsN0s7BHKWeJsfEnRcdkDjQiF_-4ciOO8',
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['location-finder-map-container']}>
        <motion.div
          {...motionAttributes}
          className={styles['location-finder-map']}
        >
          <Text field={props?.fields?.data?.fields?.title.jsonValue} tag="h2" />
          <input
            style={{ display: 'none' }}
            name="rangeCenter"
            value={rangeCenter}
            type="hidden"
          />
          <input
            style={{ display: 'none' }}
            name="zoom"
            value={zoom}
            type="hidden"
          />
          <input
            style={{ display: 'none' }}
            name="locationJson"
            value={mapJson}
            type="hidden"
          />
          <input
            style={{ display: 'none' }}
            name="multipleCenters"
            value={
              props?.fields?.data?.fields?.multipleCentersIcon?.jsonValue?.value
                ?.src
            }
            type="hidden"
          />
          <GoogleMap
            options={mapOptions}
            zoom={zoom}
            center={mapCenter}
            mapContainerClassName={styles.map}
          >
            {props?.fields?.data?.fields?.map.targetItems.map((info, index) => (
              <MarkerF
                key={index}
                // icon={'http://maps.google.com/mapfiles/ms/icons/blue.png'}
                icon={info?.marker?.jsonValue.value?.src}
                position={{
                  lat: Number(info.latitude.jsonValue.value),
                  lng: Number(info.longitude.jsonValue.value),
                }}
                onClick={() => {
                  handleMarkerClick(index, info);
                }}
              >
                {isOpen && infoWindowData?.index === index && (
                  <>
                    <InfoWindowF
                      position={{
                        lat: Number(info.latitude.jsonValue.value),
                        lng: Number(info.longitude.jsonValue.value),
                      }}
                      onCloseClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <>
                        <div className="top-content">
                          <div className="image-container">
                            <JssImage
                              field={info.image?.jsonValue}
                              className="image"
                            />
                          </div>
                          <div className="name-container">
                            <span className="location">
                              {info?.location?.jsonValue?.value}
                            </span>
                            <span className="name">
                              {info?.datacenterName?.jsonValue?.value}
                            </span>
                          </div>
                        </div>
                        <div
                          className="test"
                          dangerouslySetInnerHTML={{
                            __html: info?.details?.jsonValue?.value as string,
                          }}
                        />
                        <div data-btn-flex-container="row">
                          <JssLink
                            className="btn-blue"
                            field={info?.cTA1?.jsonValue?.value}
                          />
                          <JssLink
                            className="btn-tertiary"
                            field={info?.cTA2?.jsonValue?.value}
                          />
                        </div>
                      </>
                    </InfoWindowF>
                  </>
                )}
              </MarkerF>
            ))}
          </GoogleMap>
          <div className={styles.legend}>
            {props?.fields?.data?.fields?.pins?.targetItems?.map(
              (em, ind: number) => (
                <div key={ind} className={styles['legend-item']}>
                  <JssImage
                    field={em?.icon_35460b2f50564f439efedeae66b6fd8f?.jsonValue}
                    className={styles['legend-item-icon']}
                  />
                  <Text
                    field={em?.description?.jsonValue}
                    tag="span"
                    className={styles['legend-item-text']}
                  />
                </div>
              )
            )}
          </div>
          <div className={styles['country-list']}>
            {props?.fields?.data?.fields?.allCountryList?.targetItems?.map(
              (element, index: number) => (
                <ul key={index}>
                  <li className={styles.parent}>
                    {element?.title && (
                      <Text field={element?.title?.jsonValue} />
                    )}
                    <ul>
                      {element?.countriesList?.targetItems?.map(
                        (elem, i: number) => (
                          <li key={i} className={styles.child}>
                            {elem?.countryItem?.jsonValue?.value?.href ? (
                              <a
                                href={elem?.countryItem?.jsonValue?.value?.href}
                                data-clickable-id={`${compName}-details`}
                                data-clickable-text={
                                  elem?.countryName?.jsonValue?.value
                                }
                                data-clickable-href={
                                  elem?.countryItem?.jsonValue?.value?.href
                                }
                              >
                                <p>{elem?.countryName?.jsonValue?.value}</p>
                              </a>
                            ) : (
                              <p>{elem?.countryName?.jsonValue?.value}</p>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                </ul>
              )
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(LocationFinderMap);
