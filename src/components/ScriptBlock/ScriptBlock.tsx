import {
  ComponentParams,
  ComponentRendering,
  Field,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ScriptBlockProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Script: Field<string>;
  };
}

const ScriptBlock = (props: ScriptBlockProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const script = props?.fields?.Script;

  return (
    <>
      {sitecoreContext.pageEditing ? (
        <Text field={script} />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: props?.fields?.Script?.value,
          }}
        />
      )}
    </>
  );
};

export default withDatasourceCheck()<ScriptBlockProps>(ScriptBlock);
