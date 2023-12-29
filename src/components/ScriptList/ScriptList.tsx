import Script from 'next/script';
import { ScriptTag } from 'src/types/ScriptTag';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface ScriptData {
  ScriptTagsBody?: ScriptTag[];
  ScriptTagsHead?: ScriptTag[];
}

export enum ScriptListLocation {
  HEAD = 'head',
  BODY = 'body',
}

type LocationProps = {
  location: ScriptListLocation;
};

const ScriptList = (props: LocationProps): JSX.Element => {
  const sitecoreContext = useSitecoreContext();

  //if (sitecoreContext?.sitecoreContext) return <></>;
  // eslint-disable-next-line no-console
  // console.log('context-b');

  if (!sitecoreContext?.sitecoreContext) return <></>;

  // eslint-disable-next-line no-console
  //console.log(sitecoreContext);

  // eslint-disable-next-line no-console
  //console.log('context-a');

  const scriptData = sitecoreContext.sitecoreContext as ScriptData;

  let tagList;

  switch (props.location) {
    case ScriptListLocation.HEAD:
      tagList = scriptData?.ScriptTagsHead;
      break;
    case ScriptListLocation.BODY:
      tagList = scriptData.ScriptTagsBody;
      break;
  }

  const ary: JSX.Element[] = [];

  tagList?.forEach((tag) => {
    ary.push(
      <Script
        type={tag.json ? 'application/ld+json' : 'text/javascript'}
        src={tag.url ? tag.url : undefined}
        key={tag.id}
        id={tag.id}
        defer={tag.defer ? true : undefined}
        async={tag.async ? true : undefined}
        strategy={
          props.location === ScriptListLocation.HEAD
            ? 'beforeInteractive'
            : 'afterInteractive'
        }
      >
        {tag.code}
      </Script>
    );
  });

  return <>{ary}</>;
};

export default ScriptList;
