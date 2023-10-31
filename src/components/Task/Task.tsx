import React, {useState} from "react";

import {TaskSchema} from "../../api/api.mock";

import styles from "./Task.module.scss";

interface TaskProps {
  task: TaskSchema;
}

const Task = ({task}: TaskProps): React.ReactElement => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      data-testid='task-wrapper'
      className={styles.taskWrapper}
      onClick={() => setSelected(prev => !prev)}
    >
      <span
        data-testid='task-wrapper-checkbox'
        className={`
          ${selected ? styles.checkboxSelected : ''}
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
