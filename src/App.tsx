import React, {useEffect, useState} from "react";


import Container from './components/Container/Container';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Lists from "./components/Lists/Lists";
import {getTasksLists} from "./api/getTasksLists";
import {addIDsToListElements} from "./helpers/addIDsToListElements";
import {
  TaskGroupSchema,
  tasksCheckedValue,
  tasksList
} from "./store/tasks.signals";
import {effect, signal} from "@preact/signals-react";

const dataFetchStatusSignal = signal<{
  loading: boolean,
  error: boolean
}>({loading: true, error: false})

effect(() => {
  if(tasksList.value){
    dataFetchStatusSignal.value.loading = false
  }
})

const App = (): React.ReactElement => {
  const fetchTasksListData = async (): Promise<void> => {
    const lists: Array<TaskGroupSchema> = await getTasksLists()
    tasksList.value = lists.length
      ? addIDsToListElements(lists)
      : []
  }

  useEffect(() => {
    try {
      fetchTasksListData()
    } catch (e) {
      console.error(e)
    }
  },[]);

  if (dataFetchStatusSignal.value.error) {
    return <div>Error...</div>
  }

  return dataFetchStatusSignal.value.loading
    ? <div>Loading...</div>
    : (
      <>
      <div>{JSON.stringify(tasksList)}</div>
      <Container
        title="Tasks Collapsable"
        header={<ProgressBar/>}
        content={<Lists/>}
      />

      </>
  );
}

export default App;
