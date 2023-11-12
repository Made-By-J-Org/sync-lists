import {API_ENDPOINT} from "../constants";
import {TaskGroupSchema} from "../store/atoms";

export const getTasksLists = async ():  Promise<Array<TaskGroupSchema> | []> => {
  const defaultValue = [] as Array<TaskGroupSchema>;
  const res = await fetch(API_ENDPOINT)

  if(res.status === 200) {
    const lists: Array<TaskGroupSchema> = await res.json();
    return lists.length ? lists : defaultValue;
  }

  return defaultValue
}
