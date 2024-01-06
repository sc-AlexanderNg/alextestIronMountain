import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

export const getTheme = (params: ComponentParams): string => {
  if (params?.Theme) {
    return JSON.parse(params?.Theme).Value.value;
  }

  return '';
};
