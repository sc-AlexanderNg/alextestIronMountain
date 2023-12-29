import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useId, useMemo, useState } from 'react';
import Carousel from 'components/Carousel/Carousel';
import SwiperCore from 'swiper';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import classNames from 'classnames';
import { createYoutubeThumbnailUrl } from 'src/helpers/URLHelper';
import { fetchBrightcoveThumbnail } from 'src/helpers/FetchHelper';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import router from 'next/router';
import styles from './MediaGallery.module.css';

type MediaGalleryFields = {
  BrightcoveId?: Field<string>;
  YouTubeId?: Field<string>;
  Image?: ImageField;
  Caption?: Field<string>;
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: TextField;
    Children: {
      TemplateId?: string;
      Fields: {
        TabTitle: Field<string>;
        Gallery: {
          fields: MediaGalleryFields;
        }[];
      };
    }[];
  };
}

const MediaGallery = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Children = fields?.Children;
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number>(0);
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [currentGallery, setCurrentGallery] = useState(Children[0]);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [thumbnails, setThumbnails] = useState<{
    [key: string]: string;
  } | null>(null);
  const carouselId = useId().replaceAll(':', '_');

  SwiperCore.use([Scrollbar, FreeMode, Navigation]);

  const compName = props?.rendering?.componentName?.toLowerCase();

  const handleGalleryClick = (index: number) => {
    setSelectedGalleryIndex(index);
    setSelectedSlide(0);
    setCurrentGallery(Children[index]);
  };

  useMemo(() => {
    const thumbnailObject: { [key: string]: string } = {};
    const brightcoveArray: { id: string; key: string }[] = [];

    if (Children.length > 0) {
      Children.forEach(async (child, i) => {
        child.Fields.Gallery !== undefined && child.Fields.Gallery.length > 0
          ? child.Fields.Gallery?.forEach(async (gallery, index) => {
              const BrightcoveId = gallery?.fields?.BrightcoveId;
              const YouTubeId = gallery?.fields?.YouTubeId;
              const Image = gallery?.fields?.Image;
              const key = `${i}-${index}`;

              if (Image?.value?.src) {
                thumbnailObject[key] = Image.value.src;
              } else if (BrightcoveId?.value) {
                brightcoveArray.push({
                  id: BrightcoveId.value,
                  key,
                });
              } else if (YouTubeId?.value) {
                thumbnailObject[key] = createYoutubeThumbnailUrl(
                  YouTubeId.value as string
                );
              }
            })
          : null;
      });
    }

    async function fetchAll() {
      return await Promise.all(
        brightcoveArray.map((e) => fetchBrightcoveThumbnail(e.id))
      );
    }

    fetchAll()
      .then((response) => {
        response.forEach((res, index) => {
          thumbnailObject[brightcoveArray[index].key] = res?.poster;
        });
        setThumbnails(thumbnailObject);
      })
      .catch((err) => {
        setError(err as Error);
      });
  }, [Children]);

  const handleSlideClick = (index: number) => {
    setSelectedSlide(index);
  };

  const handleVideoClick = () => {
    setIsVideoActive(!isVideoActive);
  };

  if (error) {
    router.push('/_error');
  }

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  if (thumbnails) {
    const desktopVideoProps = {
      BrightcoveID:
        currentGallery?.Fields?.Gallery[selectedSlide]?.fields?.BrightcoveId,
      YoutubeID:
        currentGallery?.Fields?.Gallery[selectedSlide]?.fields?.YouTubeId,
      Thumbnail: {
        value: {
          src: thumbnails[`${selectedGalleryIndex}-${selectedSlide}`],
        },
      },
      onClickHandler: handleVideoClick,
    };

    return (
      <>
        {getAnchorTag(props)}
        <div
          className={styles['gallery-container']}
          data-tabid={props?.params?.tabid}
        >
          <motion.div {...motionAttributes} className={styles.gallery}>
            <Text field={Title} tag="h2" className="font-header-h2" />
            {Children?.length > 1 && (
              <ul className={styles.tabs}>
                {Children.map((child, index) => (
                  <Text
                    tag="li"
                    field={child.Fields.TabTitle}
                    key={index}
                    onClick={() => handleGalleryClick(index)}
                    className={
                      index === selectedGalleryIndex ? styles.selected : ''
                    }
                    data-clickable-action="true"
                    data-clickable-id={`${compName}-details`}
                  />
                ))}
              </ul>
            )}

            <div className={styles['mobile-gallery']}>
              {Children?.map((child, index) => (
                <div
                  key={index}
                  className={styles['mobile-carousel']}
                  data-selected-gallery={index === selectedGalleryIndex}
                >
                  <Carousel>
                    {child.Fields.Gallery?.map((element, index) => {
                      const BrightcoveId = element?.fields?.BrightcoveId;
                      const YouTubeId = element?.fields?.YouTubeId;
                      const Image = element?.fields?.Image;
                      const Caption = element?.fields?.Caption;
                      const isImage = Image?.value?.src;

                      const mobileVideoProps = {
                        BrightcoveID: BrightcoveId,
                        YoutubeID: YouTubeId,
                        Thumbnail: {
                          value: {
                            src: thumbnails[`${selectedGalleryIndex}-${index}`],
                          },
                        },
                      };

                      return (
                        <div key={index} className={styles.slide}>
                          {BrightcoveId?.value || YouTubeId?.value ? (
                            <div className={styles['video-wrapper']}>
                              <VideoPlayer
                                rendering={props.rendering}
                                params={props.params}
                                fields={mobileVideoProps}
                              />
                            </div>
                          ) : (
                            <div
                              className={styles['image-wrapper']}
                              style={{
                                backgroundImage: isImage
                                  ? `url('${Image?.value?.src}')`
                                  : '',
                              }}
                            />
                          )}
                          <Text
                            tag="p"
                            field={Caption}
                            className={styles.caption}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              ))}
            </div>

            {currentGallery?.Fields?.Gallery !== undefined &&
            currentGallery?.Fields?.Gallery.length > 0 ? (
              <>
                <div
                  className={classNames(
                    styles['desktop-gallery'],
                    isVideoActive ? '' : styles.inactive
                  )}
                >
                  <Swiper
                    dir={document?.dir === 'rtl' ? 'rtl' : 'ltr'}
                    spaceBetween={4}
                    freeMode
                    slidesPerView="auto"
                    direction="vertical"
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: `.next_${carouselId}`,
                      prevEl: `.previous_${carouselId}`,
                    }}
                    key={selectedGalleryIndex}
                    className={styles.swiper}
                  >
                    <button
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text="up"
                      className={classNames(
                        `previous_${carouselId}`,
                        'carousel-previous',
                        styles['carousel-previous']
                      )}
                    />
                    <button
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text="down"
                      className={classNames(
                        `next_${carouselId}`,
                        'carousel-next',
                        styles['carousel-next']
                      )}
                    />
                    {currentGallery.Fields.Gallery.map((_element, index) => {
                      const key = `${selectedGalleryIndex}-${index}`;

                      return (
                        <SwiperSlide
                          key={index}
                          className={classNames(
                            styles.slide,
                            index === selectedSlide
                              ? styles.active
                              : styles.inactive
                          )}
                          onClick={() => handleSlideClick(index)}
                          data-clickable-action={index === selectedSlide}
                          data-clickable-id={`${compName}-details`}
                        >
                          <div
                            className={styles.thumbnail}
                            style={{
                              backgroundImage: `url(${thumbnails[key]})`,
                            }}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className={styles['selected-wrapper']}>
                    {currentGallery.Fields.Gallery[selectedSlide].fields
                      .BrightcoveId?.value ||
                    currentGallery.Fields.Gallery[selectedSlide].fields
                      .YouTubeId?.value ? (
                      <VideoPlayer
                        rendering={props.rendering}
                        params={props.params}
                        fields={desktopVideoProps}
                      />
                    ) : (
                      <div
                        className={styles.image}
                        style={{
                          backgroundImage: `url('${currentGallery.Fields.Gallery[selectedSlide].fields.Image?.value?.src}')`,
                        }}
                      />
                    )}
                    <Text
                      tag="p"
                      field={
                        currentGallery.Fields.Gallery[selectedSlide].fields
                          .Caption
                      }
                      className={classNames('font-body-sm', styles.caption)}
                    />
                  </div>
                </div>
              </>
            ) : null}
          </motion.div>
        </div>
      </>
    );
  }

  return <></>;
};

export default withDatasourceCheck()<ComponentProps>(MediaGallery);
