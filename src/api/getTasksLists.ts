import {API_ENDPOINT} from "../constants";
import {TaskGroupSchema} from "../store/atoms";

export const getTasksLists = async ():  Promise<Array<TaskGroupSchema>> => {
  const res: Response = await fetch(API_ENDPOINT)
  if(res.status === 200) {
    const lists = await res.json();
    return lists.length ? lists : [];
  }

  return []
}
