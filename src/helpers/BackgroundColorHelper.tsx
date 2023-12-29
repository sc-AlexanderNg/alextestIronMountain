import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

export const getBackgroundColor = (params: ComponentParams): string => {
  if (params?.BackgroundColor) {
    return JSON.parse(params?.BackgroundColor).Value.value;
  }

  return '';
};
