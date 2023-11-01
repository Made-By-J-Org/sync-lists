import {atom, WritableAtom} from "jotai";
import {loadable} from "jotai/utils"
import {v4 as uuidv4} from 'uuid';

import {API_ENDPOINT} from "../constants";
import {calculateProgressValue} from "../helpers/calculateProgressValue";
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

export const progressAtom = atom<number>(0)

// no mechanism for caching
export const listsAsyncAtom: WritableAtom<Promise<Array<TaskGroupSchema> | never[]>, [args: {
  tasksListId: string,
  task: TaskSchema
}], Promise<Array<TaskGroupSchema>>> = atom(
  async () => {
    const lists = await getTasksLists()
    return lists.length
      ? addIDsToListElements(lists)
      : []
  },
  async (get, set, args: { tasksListId: string, task: TaskSchema }) => {
    const lists: Array<TaskGroupSchema> = await get(listsAsyncAtom) as Array<TaskGroupSchema>
    const listIndex = lists.findIndex(tasksList => tasksList.id === args.tasksListId)
    const updatedTasksList = lists[listIndex].tasks.map(task => {
      return task.id === args.task.id ? args.task : task;
    })
    lists[listIndex].tasks = [...updatedTasksList]
    set(progressAtom, calculateProgressValue(lists))
    return lists;
  }
)

// one of jotai mechanism to handle async data
export const loadableFetchDataAsyncAtom = loadable(listsAsyncAtom)
