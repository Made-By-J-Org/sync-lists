import {atom, WritableAtom} from "jotai";
import {loadable} from "jotai/utils"
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

import {API_ENDPOINT} from "../constants";

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

export interface TasksSchema extends Array<TaskGroupSchema> {
  id: string
}

export const progressAtom = atom(0)
const calculateProgress = (lists: TasksSchema | never[]): number => {
  return 20;
}
// no mechanism for caching
export const listAsyncAtom: WritableAtom<Promise<TasksSchema | never[]>, [args: {
  tasksListId: string,
  task: TaskSchema
}], Promise<TasksSchema>> = atom(
  async () => {
    const res: Response = await fetch(API_ENDPOINT)
    const lists: TasksSchema = await res.json();
    if (lists && lists.length) {
      // const calculatedProgress = calculateProgress(lists)
      // set(progressAtom, calculatedProgress)
      //
      lists.forEach((item) => {
        item.id = uuidv4();
        item.tasks.forEach(task => {
          task.id = uuidv4()
          return task;
        })
        return item
      })
      return lists
    }
    return []
  },
  async (get, set, args: { tasksListId: string, task: TaskSchema }) => {
    const lists: TasksSchema = await get(listAsyncAtom) as TasksSchema
    const listIndex = lists.findIndex(tasksList => tasksList.id === args.tasksListId)
    const tasksList = lists[listIndex].tasks
    lists[listIndex].tasks = [...tasksList, args.task]
    const calculatedProgress = calculateProgress(lists)
    set(progressAtom, calculatedProgress)
    return lists;
  }
)

// one of jotai mechanism to handle async data
export const loadableFetchDataAsyncAtom = loadable(listAsyncAtom)
