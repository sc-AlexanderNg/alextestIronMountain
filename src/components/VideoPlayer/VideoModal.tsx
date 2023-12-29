import YouTube, { YouTubeProps } from 'react-youtube';
import { useEffect, useRef } from 'react';
import ReactPlayerLoader from '@brightcove/react-player-loader';
import { createPortal } from 'react-dom';
import hideBackToTop from 'src/utils/hideBackToTop';
import styles from './VideoPlayer.module.css';

interface VideoModalProps {
  isOpen?: boolean;
  onClose: () => void;
  YoutubeID?: string;
  BrightcoveID?: string;
}

const VideoModal = (props: VideoModalProps) => {
  const { isOpen, onClose, YoutubeID, BrightcoveID } = props;
  const brightcoveAccountNumber = '2202959091001';
  const brightcovePlayerId = 'vlj0tVmXuj';
  const opts: YouTubeProps['opts'] = {
    playerVars: { autoplay: 1 },
  };

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [callback, ref]);

    return ref;
  };

  const ref = useOutsideClick(onClose);

  useEffect(() => {
    hideBackToTop();
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles['popup-container']}>
      <div className={styles.popup}>
        <div className={styles['close-button']} />
        <div ref={ref}>
          {BrightcoveID && (
            <ReactPlayerLoader
              accountId={brightcoveAccountNumber}
              videoId={BrightcoveID}
              playerId={brightcovePlayerId}
              onSuccess={(success) => success.ref.play()}
              embedOptions={{ responsive: true }}
            />
          )}
          {!BrightcoveID && YoutubeID && (
            <YouTube
              videoId={YoutubeID}
              className={styles['iframe-container']}
              iframeClassName={styles.iframe}
              opts={opts}
            />
          )}
        </div>
      </div>
    </div>,
    document?.body
  );
};

export default VideoModal;
