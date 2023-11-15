import React, {useState} from "react";

import {
  TaskSchema
} from "../../store/tasks.signals";

import styles from "./Task.module.scss";

interface TaskProps {
  task: TaskSchema;
  tasksListId: string;
}

const Task = ({task, tasksListId}: TaskProps): React.ReactElement => {
  const [checked, setTaskChecked] = useState(task.checked);
  // const setTaskValue = useSetAtom(listsAsyncAtom)

  const changeCheckedState = (): void => {
        setTaskChecked((checkedStatus) => {
      const newTaskState = {...task, checked: !checkedStatus}
      const taskValuePayload = {
        tasksListId: tasksListId,
        task: newTaskState
      }
      // setTaskValue(taskValuePayload)

      return !checkedStatus
    })

  }

  return (
    <div
      data-testid='task-wrapper'
      className={styles.taskWrapper}
      onClick={changeCheckedState}
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
