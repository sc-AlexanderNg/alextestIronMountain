import { logError } from './error-logger';

export const getRenderingParam = (serializedParam: string): string => {
  let renderingParam = '';

  try {
    renderingParam = JSON.parse(serializedParam)?.Value?.value;
  } catch (e) {
    logError({ e, pre: 'getRenderingParam error:' });
  }

  return renderingParam;
};
