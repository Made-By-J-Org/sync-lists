import React, {useEffect} from "react";
import {useAtom, useAtomValue} from "jotai";

import {
  loadableFetchDataAsyncAtom,
  progressAtom,
  TaskGroupSchema
} from "../../store/atoms";
import {calculateProgressValue} from "../../helpers/calculateProgressValue";

import styles from './ProgressBar.module.scss';
import {tasksCheckedValue} from "../../store/tasks.signals";

const ProgressBar = (): React.ReactElement => {
  const data = useAtomValue(loadableFetchDataAsyncAtom)
  const [progressValue, setProgressValue] = useAtom(progressAtom)
  console.log('tasksCheckedValue.value',
    tasksCheckedValue.value)
  // init progressValue after data fetch
  // this effect will run once due to the fact that 'data' update does not cause rerender
  useEffect(() => {
    if (data.state === 'hasData') {
      setProgressValue(calculateProgressValue(data.data as Array<TaskGroupSchema>))
    }
  }, [data, setProgressValue])

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
