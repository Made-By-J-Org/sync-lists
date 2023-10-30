import React from "react";

import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({value}: ProgressBarProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <progress value={value} max="100"
                className={styles.customProgress}/>
      <span
        style={{left: `${value - 5}%`}}
      >{value}%</span>
    </div>
  );
};

export default ProgressBar;
