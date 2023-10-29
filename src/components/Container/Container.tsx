import styles from './Container.module.scss';
import React from "react";

interface ContainerProps {
  title: string;
  children?: React.ReactNode;
}

const Container = ({title, children}: ContainerProps): React.ReactElement => (
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
