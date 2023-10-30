import React from "react";

import styles from './Container.module.scss';

interface ContainerProps {
  title: string;
  header: React.ReactNode;
  content: React.ReactNode;
}

const Container = (
  {
    title,
    header,
    content
  }: ContainerProps): React.ReactElement => (
  <div className={styles.containerWrapper}>
    <div className={styles.header}>
      <h2>{title}</h2>
      {header}
    </div>
    {content}
  </div>
);

export default Container;
