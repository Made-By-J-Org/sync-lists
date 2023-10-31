import React from "react";
import {useAtomValue} from "jotai";

import {
  loadableFetchDataAsyncAtom
} from "../../store/atoms";

import Collapsable from "../Collapsable/Collapsable";
import Loader from "../Loader/Loader";

import styles from './Lists.module.scss';

const Lists = (): React.ReactElement => {

  // initial load
  const data = useAtomValue(loadableFetchDataAsyncAtom)
  if (data.state === 'hasError') return <div>{typeof data.error === 'string' ? data.error : 'Sorry, something went wrong'}</div>
  if (data.state === 'loading') return <Loader message="One more sec..."/>

  return (
    <div className={styles.listsWrapper}>
      {data?.data.map((item, i) =>
        <Collapsable key={i} tasksList={item}/>
      )}
    </div>
  )
  // }
}

export default Lists;
