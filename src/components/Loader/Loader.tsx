import React from "react";

import styles from './Loader.module.scss';

interface LoaderProps {
  message?: string;
}

const Loader = ({message}: LoaderProps): React.ReactElement => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}>
        <p>{message}</p>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </div>
    </div>
  )
}

export default Loader;
