import {addIDsToListElements} from "../addIDsToListElements";
import {TaskGroupSchema} from "../../store/atoms";

describe('addIDsToListElements', () => {
  it('should add unique ids to each list and task', () => {
    const lists = [
      { id: null, tasks: [{ id: null }] },
      { id: null, tasks: [{ id: null }, { id: null }] }
    ];

    // @ts-ignore
    const result =  addIDsToListElements(lists as Array<TaskGroupSchema>);

    expect(result[0].id).not.toBeNull();
    expect(result[0].tasks[0].id).not.toBeNull();
    expect(result[1].id).not.toBeNull();
    expect(result[1].tasks[0].id).not.toBeNull();
    expect(result[1].tasks[1].id).not.toBeNull();
  });
});
