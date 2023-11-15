import {computed, signal} from "@preact/signals-react";
import {getTasksLists} from "../api/getTasksLists";
import {addIDsToListElements} from "../helpers/addIDsToListElements";

export interface TaskSchema {
  id: string,
  description: string,
  value: number,
  checked: boolean
}

export interface TaskGroupSchema {
  id: string;
  name: string;
  tasks: Array<TaskSchema>
}

export const tasksList = signal<Array<TaskGroupSchema>|[]>([])
export const tasksCheckedValue = computed(() => {
    // return tasksList.value.length ? tasksList : []
  console.log('test tasksList.value', tasksList.value)

  return 40
    // const allTasks = tasksList.value ? tasksList.value.map((list) => list.tasks).flat() : []
    // if(!allTasks.length) return 0;
    // const sumAllTasksValues = allTasks.reduce((acc, task) =>  acc + task.value, 0)
    // const sumAllCheckedTasksValues = allTasks.reduce((acc, task) =>  task.checked? acc + task.value: acc, 0)
    // return Math.floor(sumAllCheckedTasksValues / sumAllTasksValues * 100)
})
