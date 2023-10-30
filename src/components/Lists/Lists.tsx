import React from "react";

import apiMock from '../../api/api.mock'
import Collapsable from "../Collapsable/Collapsable";

import styles from './Lists.module.scss';

const Lists = (): React.ReactElement => {
  return (
    <div className={styles.listsWrapper}>
      {apiMock.map((item, i) =>
        <Collapsable key={i} tasksList={item}/>
      )}
    </div>
  )
}

export default Lists;
