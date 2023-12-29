import styles from './EmbeddedComponent.module.css';

const EmbeddedComponent = (): JSX.Element => {
  return <div className={styles['embedded-component']}>EmbeddedComponent</div>;
};

export default EmbeddedComponent;
