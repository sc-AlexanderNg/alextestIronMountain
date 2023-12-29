/* eslint-disable sort-imports */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import {
  Autocomplete,
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import {
  Field,
  Image as JssImage,
  LinkField,
  RichText,
  RichTextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { JSX, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import styles from './PartnerSearch.module.css';

type PartnerSearchPropsFields = {
  fields: {
    'Partner Search Title': Field<string>;
    'Partner Search Message': RichTextField;
    'Partner Search Image': LinkField;
  };
};

export type JsonFields = {
  Zip: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Country: string;
  Latitude: number;
  Longitude: number;
  Phone: number;
  SiteLink: string;
};

export type datafields = {
  Partners: {
    Partner: JsonFields[];
  };
};

const PartnerSearch = (props: PartnerSearchPropsFields): JSX.Element => {
  const [lat, setLat] = useState(37.09024);
  const [lng, setLng] = useState(-95.712891);
  const [zoom, setZoom] = useState(4);
  const [jsondata, setjsonData] = useState<JsonFields[]>();
  const options: JsonFields[] = [];
  const jsonRenderedData = [] as JsonFields[];
  const [activeMarker, setActiveMarker] = useState(0);
  const mapRef = useRef(null);

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }

    setActiveMarker(marker);
  };

  useEffect(
    () => {
      //console.log(jsondata);
    },
    [jsondata] //This is dependency and it will run only when data is changed
  );

  useEffect(
    () => {
      //console.log('lat', lat);
    },
    [lat] //This is dependency and it will run only when data is changed
  );

  useEffect(
    () => {
      console.log('lng', lng);
    },
    [lng] //This is dependency and it will run only when data is changed
  );

  useEffect(
    () => {
      console.log('zoom', zoom);
    },
    [zoom] //This is dependency and it will run only when data is changed
  );

  const [partnersData, setPartnersData] = useState<datafields>();

  const fetchAllPartners = () => {
    return new Promise((resolve) => {
      if (
        partnersData &&
        partnersData.Partners &&
        partnersData.Partners.Partner
      ) {
        resolve(partnersData);
      } else {
        axios
          .get('/static-assets/partner.json')
          .then((res) => {
            setPartnersData(res.data);
            resolve(res.data);
          })
          .catch((e) => {
            console.error('Error fetching data:', e);
          });
      }
    });
  };

  const filterPartnerData = (data1: datafields, searchInputValue: string) => {
    data1.Partners.Partner.forEach((partner: JsonFields) => {
      const searchTerm = `${partner.City}, ${
        partner.State
      }, ${partner.Country?.replace('United States', 'USA')}`;

      if (searchTerm === searchInputValue) {
        options.push(partner);
      }
    });
    setjsonData(options);

    return options;
  };

  const updatePartnersMarker = () => {
    const input = document.querySelector(
      '.pac-target-input'
    ) as HTMLInputElement;
    const val = input.value;

    fetchAllPartners().then((data: datafields) => {
      const filteredPartnersData = filterPartnerData(data, val);
      const bounds = new google.maps.LatLngBounds();
      let myLatLng = new google.maps.LatLng(37.09024, -95.712891);

      filteredPartnersData?.forEach((partner: JsonFields) => {
        myLatLng = new google.maps.LatLng(partner.Latitude, partner.Longitude);
        bounds.extend(myLatLng);
      });

      // Set Correct Focus and Zoom
      if (
        filteredPartnersData &&
        filteredPartnersData[0] &&
        filteredPartnersData[0] != null
      ) {
        setLat(
          filteredPartnersData.length > 1
            ? filteredPartnersData[Math.round(filteredPartnersData.length / 2)]
                .Latitude
            : filteredPartnersData[0].Latitude
        );
        setLng(
          filteredPartnersData.length > 1
            ? filteredPartnersData[Math.round(filteredPartnersData.length / 2)]
                .Longitude
            : filteredPartnersData[0].Longitude
        );
        setZoom(12);
        /* const mapid = document.querySelector(
          '.map-container'
        ) as HTMLInputElement;
        const map = new google.maps.Map(mapid, mapOptions);

        map.fitBounds(bounds); */
        const noResultsDiv = document.querySelector(
          '#partnerResutls'
        ) as HTMLInputElement;

        noResultsDiv.style.display = 'none';
      } else {
        setZoom(4);
        const noResultsDiv = document.querySelector(
          '#partnerResutls'
        ) as HTMLInputElement;

        noResultsDiv.style.display = 'block';
        noResultsDiv.innerHTML = 'No Partners';
      }

      filteredPartnersData &&
        filteredPartnersData.length &&
        filteredPartnersData.forEach((jsonItem) => {
          return jsonRenderedData.push({
            Address: jsonItem.Address,
            Zip: jsonItem.Zip,
            Name: jsonItem.Name,
            City: jsonItem.City,
            State: jsonItem.State,
            Country: jsonItem.Country,
            Latitude: jsonItem.Latitude,
            Longitude: jsonItem.Longitude,
            Phone: jsonItem.Phone,
            SiteLink: jsonItem.SiteLink,
          });
        });
    });
  };

  const restrictions = {
    country: ['us'],
  };

  const mapCenter = useMemo(() => ({ lat, lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
      zoomControl: true,
      mapTypeControl: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBsN0s7BHKWeJsfEnRcdkDjQiF_-4ciOO8',
    libraries: ['places'],
  });

  const updateAutocompleteDomOrder = () => {
    setTimeout(() => {
      const searchWrapper = document.body.querySelector('.search-wrapper');
      const pacContainers = document.body.querySelectorAll('.pac-container');

      if (searchWrapper) {
        searchWrapper.appendChild(pacContainers[pacContainers.length - 1]);
      }

      document.querySelector('#ctabutton')?.setAttribute('disabled', '');

      document
        .querySelector('.pac-target-input')
        ?.addEventListener('input', () => {
          if (
            !(
              document.querySelector('.pac-target-input') as HTMLInputElement
            ).value.trim().length
          ) {
            document.querySelector('#ctabutton')?.setAttribute('disabled', '');
          }
        });
    }, 1000);
  };

  const autocompleteSuggestionClick = () => {
    document.querySelector('#ctabutton')?.removeAttribute('disabled');
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homewrapper}>
      <div className={styles.headers}>
        <h2>Residential Shredding Partner Search</h2>
        <RichText
          data-rte
          className={classNames('font-list', styles.subheader)}
          field={props?.fields?.['Partner Search Message']}
        />
        <JssImage
          field={props?.fields?.['Partner Search Image']}
          className={styles['partner-search']}
        />
      </div>

      <GoogleMap
        ref={mapRef}
        options={mapOptions}
        zoom={zoom}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerClassName={styles['map-container']}
        onLoad={() => console.log('Map Loaded')}
      >
        <div className={styles.sidebar}>
          <Text
            tag="p"
            field={props?.fields?.['Partner Search Title']}
            className={styles.title}
          />
          <p className={styles['search-description']}>
            Please choose a city from the dropdown
          </p>
          <div
            className={classNames(styles['search-wrapper'], 'search-wrapper')}
          >
            <Autocomplete
              restrictions={restrictions}
              types={['(cities)']}
              onLoad={() => updateAutocompleteDomOrder()}
              onPlaceChanged={() => autocompleteSuggestionClick()}
            >
              <input
                className={styles.txtsearch}
                type="text"
                placeholder="Enter a US city"
              />
            </Autocomplete>
            <button
              className="btn-primary"
              id="ctabutton"
              onClick={updatePartnersMarker}
            >
              Search
            </button>
          </div>
          <div className={styles['no-results']} id="partnerResutls"></div>
          <div className={styles.partnerresults}>
            {jsondata?.map((info, index) => (
              <div className={styles['results-wrapper']} key={index}>
                <div className={styles['results-columnone']}>
                  <h4 className={styles['results-heading']}>{info.Name}</h4>
                  <p>{info.Address}</p>
                  <p>
                    {info.City}, {info.State}, {info.Zip}
                  </p>
                  <p>{info.Phone}</p>
                </div>
                <div className={styles['results-link']}>
                  <a href={info.SiteLink} className="btn-tertiary-dark">
                    Visit Partner Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {jsondata?.map((info, index) => (
          <MarkerF
            key={index}
            position={{ lat: info.Latitude, lng: info.Longitude }}
            onLoad={() => console.log('Marker Loaded')}
            onClick={() => handleActiveMarker(index)}
          >
            {activeMarker === index ? (
              <InfoWindowF
                position={{ lat: info.Latitude, lng: info.Longitude }}
                //onCloseClick={() => setActiveMarker(0)}
              >
                <div className={styles['info-window']}>
                  <h4 className={styles['info-heading']}>{info.Name}</h4>
                  <p>{info.Address}</p>
                  <p>
                    {info.City}, {info.State}, {info.Zip}
                  </p>
                  <p>{info.Phone}</p>
                  <div className={styles['info-links']}>
                    <a href={info.SiteLink} className="btn-tertiary-dark">
                      Visit Partner Site
                    </a>
                    <a
                      href={`http://maps.google.com/maps?daddr=${info.Address}`}
                      className="btn-tertiary-dark"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
};

export default PartnerSearch;
