/* eslint-disable react/prop-types */
import React from "react";

import styles from './Loader.module.scss';

interface LoaderProps {
  message?: string;
}
// function test() {
//   const test = 10
//   console.log({test})
// }
//
// console.log({test})

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
