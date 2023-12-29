import {
  ComponentParams,
  ComponentRendering,
  DateField,
  Field,
  ImageField,
  Image as JssImage,
  Link as JssLink,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import adjustDateToStandard from 'src/utils/adjustDateToStandard';
import areUtcDatesSameDay from 'src/utils/areUtcDatesSameDay';
import formatUtcDateString from 'src/utils/formatUtcDateString';
import { motion } from 'framer-motion';
import styles from './EventHero.module.css';
import { useI18n } from 'next-localization';

type EventTypeFieldLink = {
  fields: {
    Value: TextField;
  };
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    PageTitle?: Field<string>;
    ShortDescription?: Field<string>;
    EventType?: EventTypeFieldLink;
    Location?: Field<string>;
    StartDate?: Field<string>;
    EndDate?: Field<string>;
    Time?: Field<string>;
    Image?: ImageField;
    Button: LinkField;
  };
}

const EventHero = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const PageTitle = fields?.PageTitle;
  const EventType = fields?.EventType;
  const ShortDescription = fields?.ShortDescription;
  const Location = fields?.Location;
  const StartDate = fields?.StartDate;
  const EndDate = fields?.EndDate;
  const Time = fields?.Time;
  const Image = fields?.Image;
  const Button = fields?.Button;
  const compName = props?.rendering?.componentName?.toLowerCase();
  const eventType = EventType?.fields?.Value;
  const { t } = useI18n() || {};
  const whereDictionary = t ? t('eventhero-where') : 'Where';
  const whenDictionary = t ? t('eventhero-when') : 'When';
  const registerNow = t ? t('eventhero-register-now') : 'Register Now';
  const willYouBeAttending = t
    ? t('eventhero-will-you-be-attending')
    : 'Will you be attending?';
  const siteURLDictionary = t ? t('site-url') : 'https://www.ironmountain.com';
  const eventSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: PageTitle?.value,
    startDate: StartDate?.value,
    endDate: EndDate?.value,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: Button?.value?.href,
    },
    image: [Image?.value?.src],
    description: ShortDescription?.value,
    organizer: {
      '@type': 'Organization',
      name: 'Iron Mountain',
      url: siteURLDictionary,
    },
  };

  const { sitecoreContext } = useSitecoreContext();

  let startDate = '';

  if (StartDate?.value && StartDate?.value !== '0001-01-01T00:00:00Z') {
    const baseDate = adjustDateToStandard(new Date(StartDate.value));

    startDate = formatUtcDateString(
      baseDate.toString(),
      sitecoreContext?.language
    );
  }

  let endDate = '';

  if (EndDate?.value && EndDate?.value !== '0001-01-01T00:00:00Z') {
    const baseDate = adjustDateToStandard(new Date(EndDate.value));

    endDate = formatUtcDateString(
      baseDate.toString(),
      sitecoreContext?.language
    );
  }

  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <div className={styles['event-hero-wrap']}>
      <BreadCrumb />
      <div className={styles['event-hero-container']}>
        <motion.div {...motionAttributes} className={styles['event-hero']}>
          <div className={styles['mobile-layout']}>
            <Text tag="h1" field={PageTitle} className={styles.heading} />
            <Text
              tag="h2"
              field={ShortDescription}
              className={styles['sub-heading']}
            />
            <Text tag="span" field={eventType} className={styles.category} />
            <div className={styles.background}></div>
            <div className={styles['desktop-layout']}>
              <div className={styles['content-container']}>
                <dl className={styles['where-when']}>
                  <div>
                    <dt>{whenDictionary}</dt>
                    <dd
                      data-event-start={
                        StartDate && StartDate?.value !== ''
                          ? Math.floor(
                              new Date(StartDate.value).getTime() / 1000
                            )
                          : undefined
                      }
                      data-event-end={
                        EndDate && EndDate.value !== ''
                          ? Math.floor(new Date(EndDate.value).getTime() / 1000)
                          : undefined
                      }
                      data-event-time={Time?.value ? Time?.value : undefined}
                    >
                      {sitecoreContext.pageState === 'edit' ? (
                        <>
                          {StartDate && <DateField field={StartDate} />}
                          {EndDate && <DateField field={EndDate} />}
                          {Time && <Text tag="span" field={Time} />}
                        </>
                      ) : (
                        <>
                          {areUtcDatesSameDay(startDate, endDate) ? (
                            <div>{startDate}</div>
                          ) : (
                            <div>
                              {startDate} - {endDate}
                            </div>
                          )}
                          {Time?.value && <div>{Time?.value}</div>}
                        </>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt>{whereDictionary}</dt>
                    <Text
                      tag="dd"
                      data-event-location={Location?.value}
                      field={Location}
                    />
                  </div>
                </dl>
                <div className={styles['button-container']}>
                  {willYouBeAttending}

                  {!sitecoreContext.pageEditing && Button?.value?.href ? (
                    <JssLink
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={Button?.value?.text}
                      data-clickable-href={Button?.value?.href}
                      className={`${
                        Button?.value?.class ? Button?.value?.class : 'btn-blue'
                      }`}
                      field={Button}
                    >
                      {registerNow}
                    </JssLink>
                  ) : (
                    ''
                  )}

                  {sitecoreContext.pageEditing ? (
                    <JssLink
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={Button?.value?.text}
                      data-clickable-href={Button?.value?.href}
                      className={`${
                        Button?.value?.class ? Button?.value?.class : 'btn-blue'
                      }`}
                      field={Button}
                    ></JssLink>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className={styles['image-container']}>
                <JssImage
                  data-image-type="event-hero"
                  field={Image}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(eventSchemaMarkup),
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EventHero;
