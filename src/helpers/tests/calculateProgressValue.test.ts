import {calculateProgressValue} from "../calculateProgressValue";
import {mockTasksSchema} from "../../mocks/TaskSchem.mock";
import {TaskGroupSchema} from "../../store/atoms";

describe('calculateProgressValue', () => {
  it('should return correct progress value when some tasks are checked', () => {
    const listHalfChecked: Array<TaskGroupSchema>  = <Array<TaskGroupSchema>>mockTasksSchema;
    const progressValue = calculateProgressValue(listHalfChecked);
    expect(progressValue).toBe(50);
  });

  it('should return correct progress value when all tasks are checked', () => {
    const listAllChecked: Array<TaskGroupSchema>  = <Array<TaskGroupSchema>>mockTasksSchema.map((list: TaskGroupSchema) => {
      list.tasks = list.tasks.map(task => {
        task.checked = true
        return task
      })
      return list;
    })
    const progressValue = calculateProgressValue(listAllChecked);
    expect(progressValue).toBe(100);
  });

  it('should return 0 progress value when no tasks are checked', () => {
    const listNoneChecked: Array<TaskGroupSchema>  = <Array<TaskGroupSchema>>mockTasksSchema.map((list: TaskGroupSchema) => {
      list.tasks = list.tasks.map(task => {
        task.checked = false
        return task
      })
      return list;
    })
    const progressValue = calculateProgressValue(listNoneChecked);
    expect(progressValue).toBe(0);
  });

  it('should return 0 progress value when no tasks are present', () => {
    const listNoTasks: Array<TaskGroupSchema>  = <Array<TaskGroupSchema>>mockTasksSchema.map((list: TaskGroupSchema) => {
      list.tasks = []
      return list;
    })
    const progressValue = calculateProgressValue(listNoTasks);
    expect(progressValue).toBe(0);
  });
});
