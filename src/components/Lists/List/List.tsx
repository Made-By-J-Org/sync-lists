import React from 'react';

import {IconChevronDown, IconList} from '../../Icons';

import styles from './List.module.scss';

interface ListProps {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  item: any;
}

const List = ({item}: ListProps): React.ReactElement => {
  // due to 'show/hide' text I need a state.
  const [open, setOpen] = React.useState(false);

  return (
    <details onToggle={() => setOpen(prev => !prev)}>
      <summary>
        <span>
          <IconList/> {item.name}
        </span>
        <span
          className={`
            ${open ? styles.rotateIcon : undefined}
            ${styles.showHideText}
          `}
        >
          <IconChevronDown/> {open ? 'Hide' : 'Show'}
        </span>
      </summary>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod{' '}
        </p>
      </div>
    </details>
  );
};

export default List;
