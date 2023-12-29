import {
  Image as JssImage,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef } from 'react';
import { BioProfile } from './ProfileCards';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import hideBackToTop from 'src/utils/hideBackToTop';
import styles from './ProfileCards.module.css';

interface ProfileModalProps {
  isOpen?: boolean;
  onClose: () => void;
  profile: BioProfile;
}

const ProfileModal = (props: ProfileModalProps) => {
  const { isOpen, onClose, profile } = props;

  useEffect(() => {
    hideBackToTop();
  }, []);

  useEffect(() => {
    const anchorid = `popup-profilecards-anchor-link`;
    const buttonid = `popup-profilecards-button-link`;
    const anchors = document.body.querySelectorAll('[data-rte] a[href]');
    const buttons = document.body.querySelectorAll('[data-rte] button');

    [...anchors].forEach((element: HTMLAnchorElement) => {
      element.dataset.clickableId = anchorid;

      if (element.href) {
        element.dataset.clickableHref = element.href;
      }

      if (element.textContent) {
        element.dataset.clickableText = element.textContent;
      }
    });

    [...buttons].forEach((element: HTMLButtonElement) => {
      element.dataset.clickableId = buttonid;

      if (element.textContent) {
        element.dataset.clickableText = element.textContent;
      }
    });
  });

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

  if (!isOpen) return null;

  return createPortal(
    <div className={styles['popup-container']} data-rte>
      <div className={styles.popup} ref={ref}>
        <div onClick={onClose} className={styles['close-button']} />
        <div className={styles['top-content']}>
          <JssImage field={profile.fields.BioImage} />
          <div className={styles.titles}>
            <Text tag="h4" field={profile.fields.NameTitle} />
            <Text tag="h5" field={profile.fields.OrganizationTitle} />
          </div>
        </div>
        <RichText
          field={profile.fields.Bio}
          className={classNames('font-list', styles['long-bio'])}
        />
      </div>
    </div>,
    document?.body
  );
};

export default ProfileModal;
