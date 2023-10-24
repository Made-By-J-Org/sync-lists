import styles from './Container.module.scss';

const Container = ({title, children}) => (
  <div className={styles.container}>
    <header className="box-header">
      <p className="header">{title}</p>
    </header>
    {children && <div className="box-content">
      {children}
    </div>}
  </div>
);

export default Container;
