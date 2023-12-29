import Script from 'next/script';
import { ScriptTag } from 'src/types/ScriptTag';

export const getScriptTags = (
  preload: boolean,
  tags?: ScriptTag[]
): JSX.Element[] => {
  if (!tags) return [];

  const ary: JSX.Element[] = [];

  tags.forEach((tag) => {
    ary.push(
      <Script
        src={tag.url ? tag.url : undefined}
        key={tag.id}
        id={tag.id}
        strategy={preload ? 'beforeInteractive' : 'afterInteractive'}
        defer={tag.defer}
        async={tag.anonymous}
        onLoad={() => {
          // eslint-disable-next-line no-console
          console.log(`Script ${tag.id}has loaded`);
        }}
        onError={(e) => {
          // eslint-disable-next-line no-console
          console.log(e);
        }}
      >
        {tag.code}
      </Script>
    );
  });

  return ary;
};
