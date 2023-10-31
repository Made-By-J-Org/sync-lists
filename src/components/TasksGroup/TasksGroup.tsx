import React from "react";

import Task from "../Task/Task";
import {TaskSchema} from "../../store/atoms";

import styles from "./TasksGroup.module.scss";

interface TasksGroupProps {
  tasks: Array<TaskSchema>;
}

const TasksGroup = ({tasks}: TasksGroupProps): React.ReactElement =>
  <div className={styles.tasksGroupWrapper}>
    {tasks.map((task: TaskSchema, i: number) => (
      <Task
        key={i}
        task={task}/>
    ))}
  </div>

export default TasksGroup;
