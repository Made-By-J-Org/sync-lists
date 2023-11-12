// on the one hand I could update original list and store normalized values
// on the other hand I could store original list and calculate progress value on the fly
import {TaskGroupSchema} from "../store/atoms";

//  @TODO: add tests
export const calculateProgressValue = (lists: Array<TaskGroupSchema>): number => {
  const allTasks = lists.map((list) => list.tasks).flat()
  if(!allTasks.length) return 0;
  const sumAllTasksValues = allTasks.reduce((acc, task) =>  acc + task.value, 0)
  const sumAllCheckedTasksValues = allTasks.reduce((acc, task) =>  task.checked? acc + task.value: acc, 0)
  return Math.floor(sumAllCheckedTasksValues / sumAllTasksValues * 100)
}
