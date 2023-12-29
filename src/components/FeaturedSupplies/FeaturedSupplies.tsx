import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  LinkField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { JSX } from 'react';
import dynamic from 'next/dynamic';
import styles from '../FeaturedSupplies/FeaturedSupplies.module.css';

//import { ComponentProps } from 'lib/component-props';

// eslint-disable-next-line n/no-extraneous-import
import 'owl.carousel/dist/assets/owl.carousel.css';

// eslint-disable-next-line n/no-extraneous-import
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

type FeaturedProps = {
  url: string;
  fields: {
    Name: Field<string>;
    'Product Image': ImageField;
    'CTA Link': LinkField;
    url: LinkField;
  };
};
interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: Field<string>;
    Featured: FeaturedProps[];
  };
}

const FeaturedSupplies = (props: ComponentProps): JSX.Element => {
  const Featured = props?.fields?.Featured;
  const compName = props?.rendering?.componentName?.toLowerCase();

  const Responsive = {
    0: {
      items: 1,
    },
    575: {
      items: 2,
    },
    768: {
      items: 3,
    },
    991: {
      items: 4,
    },
    1199: {
      items: 5,
    },
  };

  // // eslint-disable-next-line no-console

  return (
    <div className={styles['featured-supplies']}>
      <div className={styles.container}>
        <div className={styles.headers}>
          <Text tag="h2" field={props?.fields?.Title} />
        </div>
      </div>
      <div className={styles.container}>
        <OwlCarousel
          loop={true}
          items={5}
          responsiveRefreshRate={0}
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
          dots={false}
          nav={true}
          navText={['<span>‹</span>', '<span>›</span>']}
          margin={20}
          responsive={Responsive}
        >
          {Featured?.map((featured, index) => {
            // // eslint-disable-next-line no-console

            return (
              // eslint-disable-next-line react/jsx-key

              <div key={index} className={styles['featured-carousel-wrapper']}>
                <a
                  href={featured.url}
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={featured.fields.Name}
                  data-clickable-href={featured.url}
                >
                  <JssImage field={featured?.fields['Product Image']} />
                  <Text tag="p" field={featured.fields.Name} />
                </a>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default FeaturedSupplies;
