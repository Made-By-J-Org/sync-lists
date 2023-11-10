import {computed, signal} from "@preact/signals-react";
import {getTasksLists} from "../../api/getTasksLists";
import {addIDsToListElements} from "../../helpers/addIDsToListElements";

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

export const tasksList = signal<TaskGroupSchema | []>([])
// export const tasksListComputed = computed(tasksList, (tasksList) => console.log({tasksList}))
