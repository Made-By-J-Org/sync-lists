import {Atom, atom} from "jotai";
import {loadable} from "jotai/utils"

import {API_ENDPOINT} from "../constants";
import {ApiSchema} from "../api/api.mock";

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
