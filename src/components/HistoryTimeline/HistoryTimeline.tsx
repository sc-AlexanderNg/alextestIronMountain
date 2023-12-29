import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageFieldValue,
  Image as JssImage,
  Link as JssLink,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Carousel from 'components/Carousel/Carousel';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import styles from './HistoryTimeline.module.css';

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: TextField;
    Description: TextField;
    Button: LinkField;
    Children: {
      Name: string;
      DisplayName: string;
      Url?: string | undefined | null;
      Fields: {
        Url?: string | undefined | null;
        Children: {
          Url?: string | undefined | null;
          Name: string;
          DisplayName: string;
          Fields: {
            Hide: Field<boolean>;
            TimelineDescription: Field<string>;
            TimelineImage: Field<ImageFieldValue>;
            TimelineTitle: Field<string>;
            TimelineYear: Field<string>;
          };
        }[];
      };
    }[];
  };
}

const HistoryTimeline = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Button = fields?.Button;
  const Children = fields?.Children;
  const { sitecoreContext } = useSitecoreContext();
  const compName = props?.rendering?.componentName?.toLowerCase();

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div
        className={styles['history-timeline']}
        data-theme={getTheme(props.params)}
      >
        <Carousel
          content={
            <div className={styles.heading}>
              <Text tag="h2" field={Title} className="font-header-xl" />
              <Text tag="p" field={Description} className="font-body" />
              {Button?.value?.text && Button?.value?.text?.length > 0 && (
                <JssLink
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={Button?.value?.text}
                  data-clickable-href={Button?.value?.href}
                  className={`${
                    Button?.value?.class
                      ? Button?.value?.class
                      : 'btn-secondary'
                  }`}
                  field={Button}
                />
              )}
            </div>
          }
          disableFade={true}
          slideEntireCarousel={false}
        >
          {Children?.map(({ Fields }, index) => {
            const segments = Fields?.Children || [];
            const firstSegment = segments[0];
            const middleSegment = segments[1];
            const lastSegment = segments[2];

            return (
              <div className={styles.slide} key={index}>
                {firstSegment?.Fields?.Hide?.value ? null : (
                  <div
                    data-has-description={
                      firstSegment?.Fields?.TimelineDescription?.value
                        ? 'true'
                        : 'false'
                    }
                  >
                    <div className={styles['timeline-image']}>
                      <JssImage field={firstSegment?.Fields?.TimelineImage} />
                    </div>
                    <div className={styles.description}>
                      <div>
                        <Text
                          tag="span"
                          className={styles.year}
                          field={firstSegment?.Fields?.TimelineYear}
                        />
                      </div>
                      <div>
                        <Text
                          tag="h3"
                          className={styles.title}
                          field={firstSegment?.Fields?.TimelineTitle}
                        />
                        <Text
                          tag="p"
                          field={firstSegment?.Fields?.TimelineDescription}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {middleSegment?.Fields?.Hide?.value ? null : (
                  <div>
                    <JssImage field={middleSegment?.Fields?.TimelineImage} />
                  </div>
                )}
                {lastSegment?.Fields?.Hide?.value ? null : (
                  <div
                    data-has-description={
                      lastSegment?.Fields?.TimelineDescription?.value
                        ? 'true'
                        : 'false'
                    }
                  >
                    <div className={styles.description}>
                      <div>
                        <Text
                          className={styles.year}
                          tag="span"
                          field={lastSegment?.Fields?.TimelineYear}
                        />
                      </div>
                      <div>
                        <Text
                          className={styles.title}
                          tag="h3"
                          field={lastSegment?.Fields?.TimelineTitle}
                        />
                        <Text
                          tag="p"
                          field={lastSegment?.Fields?.TimelineDescription}
                        />
                      </div>
                    </div>
                    <div className={styles['timeline-image']}>
                      <JssImage field={lastSegment?.Fields?.TimelineImage} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(HistoryTimeline);
