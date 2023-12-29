import { CSSProperties } from 'react';
import styles from './Tile.module.css';

interface TileProps {
  src?: string | null | undefined;
  border?: string | null | undefined;
  radius?: string | null | undefined;
  size?: string | null | undefined;
  className?: string | null | undefined;
  gradient?:
    | 'teal'
    | 'purple'
    | 'orange'
    | 'light-blue'
    | 'dark-blue'
    | null
    | undefined
    | string
    | number;
  style?: CSSProperties | null | undefined;
  content?: JSX.Element | null;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tile = ({
  size,
  border,
  radius = '8px',
  gradient,
  src,
  style,
  className,
  content,
  onClick,
  ...htmlAttributes
}: TileProps): JSX.Element => {
  if (onClick) {
    return (
      <button
        {...htmlAttributes}
        className={`${styles.tile} ${className ? className : ''}`}
        style={
          {
            ...style,
            '--tile-size': size,
            '--tile-border-radius': radius,
          } as CSSProperties
        }
        data-tile
        data-border={border}
        onClick={(e) => onClick?.(e)}
      >
        {src ? (
          <img src={src} alt="" />
        ) : gradient && content ? (
          <div data-tile-gradient={gradient} className={styles.content}>
            {content}
          </div>
        ) : gradient ? (
          <div data-tile-gradient={gradient} />
        ) : content ? (
          <div className={styles.content}>{content}</div>
        ) : null}
      </button>
    );
  }

  return (
    <div
      {...htmlAttributes}
      className={`${styles.tile} ${className ? className : ''}`}
      style={
        {
          ...style,
          '--tile-size': size,
          '--tile-border-radius': radius,
        } as CSSProperties
      }
      data-tile
      data-border={border}
    >
      {src ? (
        <img src={src} alt="" />
      ) : gradient && content ? (
        <div data-tile-gradient={gradient} className={styles.content}>
          {content}
        </div>
      ) : gradient ? (
        <div data-tile-gradient={gradient} />
      ) : content ? (
        <div className={styles.content}>{content}</div>
      ) : null}
    </div>
  );
};

export default Tile;
