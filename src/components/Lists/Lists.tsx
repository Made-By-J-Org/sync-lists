import React from "react";

import apiMock from '../../api/api.mock'
import List from "./List/List";

import styles from './Lists.module.scss';

const Lists = (): React.ReactElement => {
  return (
    <div className={styles.listsWrapper}>
      {apiMock.map((item, i) =>
        <List key={i} item={item}/>
      )}
    </div>
  )
}

export default Lists;
