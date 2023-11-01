import {v4 as uuidv4} from "uuid";
import {TaskGroupSchema} from "../store/atoms";

export const addIDsToListElements = (lists: Array<TaskGroupSchema>): Array<TaskGroupSchema> => {
  lists.forEach((item) => {
    item.id = uuidv4();
    item.tasks.forEach(task => {
      task.id = uuidv4()
      return task;
    })
    return item
  })

  return lists;
}
