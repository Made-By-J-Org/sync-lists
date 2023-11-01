import { TaskGroupSchema} from "../store/atoms";

// 4 tasks
// 2 checked
// value of 25 each
export const mockTasksSchema: Array<TaskGroupSchema> = [
  {
    id: '1',
    name: "List 1",
    tasks: [
      {
        checked: true,
        description: 'ABC',
        id: '11',
        value: 25
      }, {
        checked: true,
        description: 'ABC',
        id: '12',
        value: 25
      }
    ]
  },
  {
    id: '2',
    name: "List 2",
    tasks: [
      {
        checked: false,
        description: 'ABC',
        id: '21',
        value: 25
      }
    ]
  },
  {
    id: '3',
    name: "List 3",
    tasks: [
      {
        checked: false,
        description: 'ABC',
        id: '31',
        value: 25
      }
    ]
  }
]
