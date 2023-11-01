import React from "react";

import Task from "../Task/Task";
import {TaskSchema} from "../../store/atoms";

import styles from "./TasksGroup.module.scss";

interface TasksGroupProps {
  tasks: Array<TaskSchema>;
  tasksListId: string;
}

const TasksGroup = (
  {
    tasks,
    tasksListId
  }: TasksGroupProps): React.ReactElement => {
  return (
    <div className={styles.tasksGroupWrapper}>
      {tasks.map((task: TaskSchema, i: number) => (
        <Task
          key={i}
          task={task}
          tasksListId={tasksListId}/>
      ))}
    </div>
  )
}
export default TasksGroup;
