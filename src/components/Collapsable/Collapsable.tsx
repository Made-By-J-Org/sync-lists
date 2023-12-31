import React from 'react';

import {IconChevronDown, IconList} from '../Icons';
import TasksGroup from "../TasksGroup/TasksGroup";
import {TaskGroupSchema} from "../../store/atoms";

import styles from './Collapsable.module.scss';

interface CollapsableProps {
  tasksList: TaskGroupSchema;
}

const Collapsable = ({tasksList}: CollapsableProps): React.ReactElement => {
  // due to 'show/hide' text I need a state.
  const [open, setOpen] = React.useState(false);
  return (
    <details
      onToggle={() => setOpen(prev => !prev)}
      data-testid='collapsible-details'
    >
      <summary>
        <span>
          <IconList/>
          {' '}
          <b>{tasksList.name}</b>
        </span>
        <span
          className={`
            ${open ? styles.rotateIcon : ''}
            ${styles.positionText}
          `}
        >
          <IconChevronDown/>
          {' '}
          {open ? 'Hide' : 'Show'}
        </span>
      </summary>

      <div className={styles.content}>
        {
          tasksList.tasks && tasksList.tasks.length
          ? <TasksGroup tasksListId={tasksList.id} tasks={tasksList.tasks}/>
          : <div>No tasks</div>
        }
      </div>
    </details>
  );
};

export default Collapsable;
