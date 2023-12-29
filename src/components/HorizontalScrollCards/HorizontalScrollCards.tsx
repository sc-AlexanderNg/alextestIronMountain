import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  Link,
  LinkField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';
import Carousel from 'components/Carousel/Carousel';
import RichTextBlock from 'components/RichTextBlock/RichTextBlock';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import styles from './HorizontalScrollCards.module.css';
import { useMediaQuery } from 'react-responsive';

type Color = {
  fields: {
    Value: {
      value: string;
    };
  };
};

type CalloutPosition = {
  fields: {
    Value: {
      value: string;
    };
  };
};

type ImagePosition = {
  fields: {
    Value: {
      value: string;
    };
  };
};

type CardsProps = {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    Image: ImageField;
    ImagePosition: ImagePosition;
    CTA: LinkField;
    CalloutText: Field<string>;
    CalloutColor: Color;
    CalloutPosition: CalloutPosition;
  };
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Headline: Field<string>;
    Cards: CardsProps[];
  };
}

const HorizontalScrollCards = (props: ComponentProps): JSX.Element => {
  const Headline = props?.fields?.Headline;
  const Cards = props?.fields?.Cards;
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const compName = props?.rendering?.componentName?.toLowerCase();
  const [mounted, setMounted] = useState(false);

  const slides = Cards?.map((card, i) => {
    const Title = card?.fields?.Title;
    const Description = card?.fields?.Description;
    const Image = card?.fields?.Image;
    const ImagePos: string = card?.fields?.ImagePosition?.fields?.Value?.value;
    const Cta = card?.fields?.CTA;
    const CalloutText = card?.fields?.CalloutText;
    const CalloutColor = card?.fields?.CalloutColor?.fields?.Value?.value;
    const CalloutPos: string =
      card?.fields?.CalloutPosition?.fields?.Value?.value;

    return (
      <div
        key={i}
        className={styles.card}
        // onClick={() => {
        //   if (Cta?.value?.href) window.location.href = Cta?.value?.href;
        // }}
      >
        {CalloutText && CalloutPos === 'top' && (
          <Text
            tag="div"
            field={CalloutText}
            className={styles.callout}
            data-color={CalloutColor}
          />
        )}
        <div className={styles.body}>
          {Image && ImagePos === 'top' && (
            <JssImage field={Image} className={styles.image} />
          )}
          {Title && (
            <Text
              tag="h3"
              field={Title}
              className={classNames('font-header-h3', styles.title)}
            />
          )}
          {Description && (
            <div className={styles.description}>
              <RichTextBlock
                rendering={props.rendering}
                params={props.params}
                fields={{ Content: Description }}
              />
            </div>
          )}
          <div>
            {Cta?.value?.href && (
              <Link
                data-clickable-id={`${compName}-details`}
                data-clickable-text={Cta?.value?.text}
                data-clickable-href={Cta?.value?.href}
                field={Cta}
                className={`${styles.cta} btn-tertiary`}
              />
            )}
          </div>
          {Image && ImagePos === 'bottom' && (
            <JssImage field={Image} className={styles.image} />
          )}
        </div>
        {CalloutText && CalloutPos === 'bottom' && (
          <Text
            tag="div"
            field={CalloutText}
            className={styles.callout}
            data-color={CalloutColor}
          />
        )}
      </div>
    );
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return <div />;
  }

  return (
    <>
      {getAnchorTag(props)}
      <div
        className={styles['horizontal-scroll-cards']}
        data-mountains={getTheme(props.params)}
      >
        {isDesktop && Cards?.length < 5 ? (
          <>
            <Text
              tag="h2"
              className={classNames('font-header-h2', styles.headline)}
              field={Headline}
            />
            <div className={styles.list}>{slides}</div>
          </>
        ) : (
          <Carousel
            content={
              <Text
                tag="h2"
                className={classNames('font-header-h2', styles.headline)}
                field={Headline}
              />
            }
            disableFade={true}
          >
            {[<div className={styles.spacer} key={'spacer'} />, ...slides]}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(HorizontalScrollCards);
