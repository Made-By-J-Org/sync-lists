import React, {useState} from "react";
import {useSetAtom} from "jotai";

import {
  listAsyncAtom,
  TaskSchema
} from "../../store/atoms";

import styles from "./Task.module.scss";

interface TaskProps {
  task: TaskSchema;
  tasksListId: string;
}

const Task = ({task, tasksListId}: TaskProps): React.ReactElement => {
  const [checked, setTaskChecked] = useState(task.checked);
  const setTaskValue = useSetAtom(listAsyncAtom)

  const setTask = (): void => {
    setTaskChecked(prev => {
      setTaskValue({tasksListId: tasksListId, task: {...task, checked: !prev}})
      return !prev
    })
  }

  return (
    <div
      data-testid='task-wrapper'
      className={styles.taskWrapper}
      onClick={setTask}
    >
      <span
        data-testid='task-wrapper-checkbox'
        className={`
          ${checked ? styles.checkboxSelected : ''}
          ${styles.checkbox}
        `}
      />
      <span>
        {task.description}
      </span>
    </div>
  )
}

export default Task;
