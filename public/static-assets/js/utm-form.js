function readCookie(name) {
  let nameEQ = `${name}=`;
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') c = c.substring(1, c.length);

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

let formutmCookieValue2 = readCookie('__utmz_original');

if (formutmCookieValue2 != null) {
  var tempArrayValue = [];

  tempArrayValue = formutmCookieValue2.split('|');

  for (i = 0; i < tempArrayValue.length; i++) {
    var avs = tempArrayValue[i].replace('=', '.').split('.');

    if (avs[avs.length - 2] == 'utmccn') {
      if (document.querySelector('input[name="gACampaignOriginal"]') != null) {
        document.getElementsByName('gACampaignOriginal')[0].value =
          avs[avs.length - 1];
        console.log(
          `gACampaignOriginal: ${
            document.getElementsByName('gACampaignOriginal')[0].value
          }`
        );
      }
    }

    if (avs[avs.length - 2] == 'utmcmd') {
      if (document.querySelector('input[name="gAMediumOriginal"]') != null) {
        document.getElementsByName('gAMediumOriginal')[0].value =
          avs[avs.length - 1];
        console.log(
          `gAMediumOriginal: ${
            document.getElementsByName('gAMediumOriginal')[0].value
          }`
        );
      }
    }

    if (avs[avs.length - 2] == 'utmcsr') {
      if (document.querySelector('input[name="gASourceOriginal"]') != null) {
        document.getElementsByName('gASourceOriginal')[0].value =
          avs[avs.length - 1];
        console.log(
          `gASourceOriginal: ${
            document.getElementsByName('gASourceOriginal')[0].value
          }`
        );
      }
    }

    if (avs[avs.length - 2] == 'utmctr') {
      if (
        document.querySelector('input[name="gASearchTermOriginal"]') != null
      ) {
        document.getElementsByName('gASearchTermOriginal')[0].value =
          avs[avs.length - 1];
        console.log(
          `gASearchTermOriginal: ${
            document.getElementsByName('gASearchTermOriginal')[0].value
          }`
        );
      }
    }
  }
}

let formutmCookieValue = readCookie('__utmz');

if (formutmCookieValue != null) {
  var tempArrayValue = [];

  tempArrayValue = formutmCookieValue.split('|');

  for (i = 0; i < tempArrayValue.length; i++) {
    var avs = tempArrayValue[i].replace('=', '.').split('.');

    if (avs[avs.length - 2] == 'utmccn' && avs[avs.length - 1]) {
      if (
        document.querySelector('input[name="gACampaignMostRecent1"]') != null
      ) {
        document.querySelector('input[name="gACampaignMostRecent1"]').value =
          avs[avs.length - 1];
        console.log(
          `gACampaignMostRecent1: ${
            document.getElementsByName('gACampaignMostRecent1')[0].value
          }`
        );
      }
    }

    if (avs[avs.length - 2] == 'utmcmd' && avs[avs.length - 1]) {
      if (document.querySelector('input[name="gAMediumMostRecent1"]') != null) {
        document.querySelector('input[name="gAMediumMostRecent1"]').value =
          avs[avs.length - 1];
        console.log(
          `gAMediumMostRecent1: ${
            document.getElementsByName('gAMediumMostRecent1')[0].value
          }`
        );
      }
    }

    if (avs[avs.length - 2] == 'utmcsr' && avs[avs.length - 1]) {
      if (document.querySelector('input[name="gASourceMostRecent1"]') != null) {
        document.querySelector('input[name="gASourceMostRecent1"]').value =
          avs[avs.length - 1];
        console.log(
          `gASourceMostRecent1: ${
            document.getElementsByName('gASourceMostRecent1')[0].value
          }`
        );
      }
    }

    if (avs[avs.length - 2] == 'utmctr' && avs[avs.length - 1]) {
      if (
        document.querySelector('input[name="gASearchTermMostRecent1"]') != null
      ) {
        document.querySelector('input[name="gASearchTermMostRecent1"]').value =
          avs[avs.length - 1];
        console.log(
          `gASearchTermMostRecent1: ${
            document.getElementsByName('gASearchTermMostRecent1')[0].value
          }`
        );
      }
    }
  }
}
