/* eslint-disable no-console */
import { LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import { getPublicUrl as defaultGetPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

export const getPublicUrl = () => {
  if (process.env.PUBLIC_URL_OVERRIDE) return process.env.PUBLIC_URL_OVERRIDE;

  return process.env.NODE_ENV !== 'production' ? defaultGetPublicUrl() : '';
};

export const createYoutubeThumbnailUrl = (videoID: string) => {
  return `https://img.youtube.com/vi/${videoID}/0.jpg`;
};

export const rerouteMediaUrls = (
  layoutData: LayoutServiceData
): LayoutServiceData => {
  let layoutString = JSON.stringify(layoutData);

  if (process.env.MEDIA_FULL_CDN_PATH && process.env.MEDIA_FULL_TARGET_PATH) {
    layoutString = layoutString.replaceAll(
      process.env.MEDIA_FULL_CDN_PATH,
      process.env.MEDIA_FULL_TARGET_PATH
    );
  }

  return JSON.parse(layoutString);
};
