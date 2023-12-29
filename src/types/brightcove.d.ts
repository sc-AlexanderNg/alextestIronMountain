declare module '@brightcove/react-player-loader' {
  type CatalogSearch = {
    q: string;
    limit?: number;
  };
  type CatalogSequence =
    | {
        type: 'search';
        id: CatalogSearch;
      }
    | {
        type: 'playlist';
        id: string;
      }
    | {
        type: 'video';
        id: string;
      };
  type SuccessObject = {
    type: 'in-page' | 'iframe';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any;
  };
  // this is key - `import React from 'react'` at the top of the file won't work - see https://stackoverflow.com/a/51114250
  const ReactPlayerLoader: import('react').ComponentType<{
    accountId: string;
    adConfigId?: string;
    applicationId?: string;
    attrs?: object;
    baseUrl?: string;
    catalogSearch?: string | CatalogSearch;
    catalogSequence?: CatalogSequence | CatalogSequence[];
    embedOptions?: { responsive: boolean };
    manualReloadFromPropChanges?: boolean;
    playerId?: string;
    videoId?: string;
    onSuccess?: (obj: SuccessObject) => void;
    onFailure?: () => void;
  }>;
  export default ReactPlayerLoader;
}
