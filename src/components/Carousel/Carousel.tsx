import 'swiper/css';
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useId, useRef, useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import SwiperCore from 'swiper';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './Carousel.module.css';
import { useI18n } from 'next-localization';
import { useMediaQuery } from 'react-responsive';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface CarouselProps {
  putMobileContentAreaOnBottom?: boolean;
  slideEntireCarousel?: boolean;
  disableFade?: boolean;
  children: JSX.Element[];
  content?: JSX.Element;
}

const Carousel = ({
  children = [],
  content,
  putMobileContentAreaOnBottom,
  slideEntireCarousel = true,
  disableFade = false,
}: CarouselProps): JSX.Element => {
  SwiperCore.use([Scrollbar, FreeMode, Navigation]);
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n() || {};
  const dragDictionary = t ? t('global-drag') : 'DRAG';
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1919 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1920 });
  const carouselId = useId().replaceAll(':', '_');
  const isRTL = (typeof document !== 'undefined' &&
    document?.dir === 'rtl') as boolean;
  const translateX =
    typeof window === 'undefined' || isDesktop
      ? 660
      : typeof window === 'undefined' || isLargeDesktop
      ? 970
      : window.innerWidth - 21;

  const { sitecoreContext } = useSitecoreContext();
  const motionAttributesDrag = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, top: 0 },
        whileInView: { opacity: 1, translateY: '-50%', top: '50%' },
        viewport: {
          once: true,
        },
      }
    : {};
  const motionAttributesHeader = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const motionAttributesContent = !sitecoreContext.pageEditing
    ? {
        initial: {
          opacity: 0,
          x: isRTL ? -translateX : translateX,
        },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 2, ease: 'easeInOut' },
      }
    : {};

  const drag = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return <div />;
  }

  return (
    <>
      {content && !putMobileContentAreaOnBottom ? (
        <motion.div
          {...motionAttributesHeader}
          className={styles['carousel-mobile-content']}
          data-carousel-mobile-content
        >
          {content}
        </motion.div>
      ) : null}
      {slideEntireCarousel ? (
        <>
          <motion.div
            {...motionAttributesHeader}
            className={styles['carousel-desktop-content-top']}
          >
            {content}
          </motion.div>
          <motion.div {...motionAttributesContent}>
            <Swiper
              dir={isRTL ? 'rtl' : 'ltr'}
              spaceBetween={0}
              freeMode
              slidesPerView="auto"
              className={styles.carousel}
              data-disable-fade={disableFade}
              scrollbar={{
                draggable: true,
                el: `.scrollbar_${carouselId}`,
              }}
              navigation={{
                nextEl: `.next_${carouselId}`,
                prevEl: `.previous_${carouselId}`,
              }}
              mousewheel={false}
              modules={[Mousewheel]}
            >
              {(isDesktop || isLargeDesktop) && (
                <motion.div
                  {...motionAttributesDrag}
                  transition={{
                    delay: 2,
                    duration: 1,
                    ease: 'easeInOut',
                    repeat: 1,
                    repeatDelay: 2,
                    repeatType: 'reverse',
                  }}
                  ref={drag}
                  className={styles.drag}
                  onAnimationComplete={() => {
                    if (drag.current) {
                      try {
                        if (
                          typeof window === 'undefined' ||
                          isDesktop ||
                          isLargeDesktop
                        ) {
                          drag.current.hidden = true;
                        }
                      } catch (e) {
                        console.warn('FED Carousel Code', e);
                      }
                    }
                  }}
                >
                  <div className={styles['arrow-container']}>
                    <div
                      className={classNames(styles.arrow, styles['left-arrow'])}
                    />
                  </div>
                  {dragDictionary}
                  <div className={styles['arrow-container']}>
                    <div
                      className={classNames(
                        styles.arrow,
                        styles['right-arrow']
                      )}
                    />
                  </div>
                </motion.div>
              )}
              <motion.div {...motionAttributesContent}>
                {children.map((child, i) => (
                  <SwiperSlide
                    key={i}
                    className={styles.slide}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={() => {}}
                  >
                    {child}
                  </SwiperSlide>
                ))}
              </motion.div>
            </Swiper>
          </motion.div>
        </>
      ) : (
        <Swiper
          dir={isRTL ? 'rtl' : 'ltr'}
          spaceBetween={0}
          freeMode
          slidesPerView="auto"
          className={styles.carousel}
          data-disable-fade={disableFade}
          scrollbar={{
            draggable: true,
            el: `.scrollbar_${carouselId}`,
          }}
          navigation={{
            nextEl: `.next_${carouselId}`,
            prevEl: `.previous_${carouselId}`,
          }}
          mousewheel={false}
          modules={[Mousewheel]}
        >
          {(isDesktop || isLargeDesktop) && (
            <motion.div
              {...motionAttributesDrag}
              transition={{
                delay: 2,
                duration: 1,
                ease: 'easeInOut',
                repeat: 1,
                repeatDelay: 2,
                repeatType: 'reverse',
              }}
              ref={drag}
              className={styles.drag}
              onAnimationComplete={() => {
                if (drag.current) {
                  try {
                    if (
                      typeof window === 'undefined' ||
                      isDesktop ||
                      isLargeDesktop
                    ) {
                      drag.current.hidden = true;
                    }
                  } catch (e) {
                    console.warn('FED Carousel Code', e);
                  }
                }
              }}
            >
              <div className={styles['arrow-container']}>
                <div
                  className={classNames(styles.arrow, styles['left-arrow'])}
                />
              </div>
              {dragDictionary}
              <div className={styles['arrow-container']}>
                <div
                  className={classNames(styles.arrow, styles['right-arrow'])}
                />
              </div>
            </motion.div>
          )}
          <SwiperSlide
            className={classNames(
              styles.slide,
              styles['carousel-desktop-content']
            )}
          >
            <motion.div {...motionAttributesHeader}>{content}</motion.div>
          </SwiperSlide>
          <motion.div {...motionAttributesContent}>
            {children.map((child, i) => {
              if (i === 0) {
                return (
                  <SwiperSlide
                    key={i}
                    className={styles.slide}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={() => {}}
                  >
                    <motion.div {...motionAttributesContent}>
                      {child}
                    </motion.div>
                  </SwiperSlide>
                );
              }

              return (
                <SwiperSlide
                  key={i}
                  className={styles.slide}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  onClick={() => {}}
                >
                  {child}
                </SwiperSlide>
              );
            })}
          </motion.div>
        </Swiper>
      )}
      <div className={styles['carousel-controls']}>
        <button
          className={classNames(
            `previous_${carouselId}`,
            'carousel-previous',
            styles['carousel-previous']
          )}
        />
        <div>
          <div
            className={classNames(
              `scrollbar_${carouselId}`,
              'carousel-scrollbar',
              styles['carousel-scrollbar']
            )}
          />
        </div>
        <button
          className={classNames(
            `next_${carouselId}`,
            'carousel-next',
            styles['carousel-next']
          )}
        />
      </div>
      {putMobileContentAreaOnBottom ? (
        <motion.div
          {...motionAttributesHeader}
          className={styles['carousel-mobile-content']}
          data-carousel-mobile-content
        >
          {content}
        </motion.div>
      ) : null}
    </>
  );
};

export default Carousel;
