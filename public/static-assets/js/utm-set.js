function utmCookieCreation(cn) {
let cookieDomain =
  window.location.hostname.indexOf('.ironmountain.com') > 0
    ? 'ironmountain.com'
    : window.location.hostname;
let utmURLcheck =
  window.location.href.indexOf('utm_campaign') > 0 ||
  window.location.href.indexOf('utm_medium') > 0 ||
  window.location.href.indexOf('utm_source') > 0 ||
  window.location.href.indexOf('utm_term') > 0;
let date;
let expires;

date = new Date();
date.setTime(date.getTime() + 180 * 24 * 60 * 60 * 1000);
expires = `; expires=${date.toGMTString()}`;


  if (utmURLcheck) {
    function e(e) {
      hu = window.location.search.substring(1);
      gy = hu.split('&');

      for (i = 0; i < gy.length; i++) {
        ft = gy[i].split('=');

        if (ft[0] == e) {
          return ft[1];
        }
      }
    }

    document.cookie = `__${cn}=utmcsr=${e('utm_source')}|utmccn=${e(
      'utm_campaign'
    )}|utmcmd=${e('utm_medium')}|utmctr=${e(
      'utm_term'
    )}; ${expires}; path=/; domain=${cookieDomain}`;
  }
}

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

if (readCookie('__utmz_original') != null) {
  utmCookieCreation('utmz');
} else {
  utmCookieCreation('utmz');
  utmCookieCreation('utmz_original');
}
