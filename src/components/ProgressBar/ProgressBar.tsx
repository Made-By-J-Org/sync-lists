import React from "react";
import {useAtomValue} from "jotai";

import {progressAtom} from "../../store/atoms";

import styles from './ProgressBar.module.scss';

const ProgressBar = (): React.ReactElement => {
  const progressValue = useAtomValue(progressAtom)
  console.log({progressValue})

  return (
    <div className={styles.container}>
      <progress
        className={styles.customProgress}
        value={progressValue}
        max="100"
      />
      <span style={{left: `${progressValue - 5}%`}}>
        {progressValue}%
      </span>
    </div>
  );
};

export default ProgressBar;
