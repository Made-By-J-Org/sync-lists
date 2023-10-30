import React from "react";

import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({value}: ProgressBarProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <progress
        className={styles.customProgress}
        value={value}
        max="100"
      />
      <span style={{left: `${value - 5}%`}}>
        {value}%
      </span>
    </div>
  );
};

export default ProgressBar;
