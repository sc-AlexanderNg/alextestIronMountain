export const fetchBrightcoveThumbnail = async (videoID: string) => {
  const brightcoveAccountNumber = '2202959091001';
  const playbackApi = 'https://edge.api.brightcove.com/playback/v1/';
  const policyKey =
    'BCpkADawqM1O45NsdsL9kSyjaBpytTzfXR-0Rn_plDYbZ659V22LX4xVz_7K9qvGkGPjXX6q34QtGNGmPM6RNYrD1n7c6RJ_BhrhwN5xijfIJAQGDnT3EA7W4Q38Rm8K6SoIzXtdLxamQfUUpe8N29RWhjGItW7--ZLa8g';
  const headers = {
    Accept: `application/json;pk=${policyKey}`,
  };
  const opts = { headers };
  const res = await fetch(
    `${playbackApi}accounts/${brightcoveAccountNumber}/videos/${videoID}`,
    opts
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();

  return data;
};
