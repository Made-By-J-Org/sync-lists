import styles from './Container.module.scss';

const Container = ({title, children}) => (
  <div className={styles.wrapper}>
    <h2>{title}</h2>

    {children && (
      <div className={styles.content}>
        {children}
      </div>
    )}
  </div>
);

export default Container;
