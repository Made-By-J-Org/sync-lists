import {Atom, atom} from "jotai";
import {loadable} from "jotai/utils"

import {API_ENDPOINT} from "../constants";

export interface TaskSchema {
  description: string,
  value: number,
  checked: boolean
}

export interface ApiSchema {
  name: string;
  tasks: Array<TaskSchema>
}

const fetchDataAsyncAtom: Atom<Promise<Array<ApiSchema>>> = atom(async () => {
  const res = await fetch(API_ENDPOINT)
  return await res.json()
})

// one of jotai mechanism to handle async data
export const loadableFetchDataAsyncAtom = loadable(fetchDataAsyncAtom)

export const progressAtom = atom((get) => {
  const data = get(fetchDataAsyncAtom)
  console.log({data})
  return data
})
