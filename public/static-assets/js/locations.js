function initMap() {
  let locationsJson = document.getElementsByName('locationJson')[0].value;
  let locationsArray = JSON.parse(locationsJson)?.targetItems;
  let rangeCenter = document.getElementsByName('rangeCenter')[0]?.value;
  let zoom = document.getElementsByName('zoom')[0]?.value;
  let multipleCentersIcon =
    document.getElementsByName('multipleCenters')[0]?.value;
  let lat = 40.4637;
  let lon = 3.7492;
  let z;

  if (zoom) z = parseFloat(zoom);
  else z = 2.5;

  if (rangeCenter) {
    rangeCenter = rangeCenter.replace(/[()]/g, '').split(',');
    lat = parseFloat(rangeCenter[0]);
    lon = parseFloat(rangeCenter[1]);
  }

  // Initialize and add the map
  let mapId = document.getElementById('map');
  let map = new google.maps.Map(mapId, {
    zoom: z,
    center: new google.maps.LatLng(lat, lon),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
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
  });

  let infoWindow = new google.maps.InfoWindow({
    maxWidth: 1000,
  });
  let marker;
  let i;
  const markers = [];

  for (i = 0; i < locationsArray.length; i++) {
    marker = new google.maps.Marker({
      position: {
        lat: parseFloat(locationsArray[i].latitude?.jsonValue?.value),
        lng: parseFloat(locationsArray[i].longitude?.jsonValue?.value),
      },
      icon: locationsArray[i].marker?.jsonValue?.value?.src,
      map,
    });
    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        const cta1 = locationsArray[i].cTA1?.jsonValue?.value?.text;
        const cta2 = locationsArray[i].cTA2?.jsonValue?.value?.text;
        const ctaButtonLink1 = cta1
          ? `<a class="btn-blue" href='${locationsArray[i].cTA1?.jsonValue?.value?.href}'>${cta1}</a>`
          : '';
        const ctaButtonLink2 = cta2
          ? `<a class="btn-tertiary" href='${locationsArray[i].cTA2?.jsonValue?.value?.href}'>${cta2}</a>`
          : '';

        return function () {
          infoWindow.setContent(
            `<div class="top-content"><div class="image-container"><image src=${locationsArray[i].image?.jsonValue?.value?.src} class="image" /></div><div class="name-container"><span class="location">${locationsArray[i].location?.jsonValue?.value}</span><span class="name">${locationsArray[i].datacenterName?.jsonValue?.value}</span></div></div>${locationsArray[i].details?.jsonValue?.value}` +
              `<div data-btn-flex-container="row">${ctaButtonLink1}${ctaButtonLink2}</div>`
          );
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );

    markers.push(marker);
  }

  let markerCluster = new MarkerClusterer(map, markers, {
    imagePath: multipleCentersIcon,
  });

  markerCluster.setGridSize(5);
}
