import React from "react";
import {render} from "@testing-library/react";
import Task from "./Task";
import userEvent from '@testing-library/user-event'

describe("Task component", () => {
  const task = {
    checked: false,
    description: "Sample task",
    id: '1',
    value: 10
  };

  it('render component', () => {
    const {baseElement} = render(<Task tasksListId={'test'} task={task}/>);
    expect(baseElement).toBeInTheDocument();
  });

  it('match snapshot', () => {
    const {asFragment} = render(<Task tasksListId={'test'} task={task}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the task description", () => {
    const {getByText} = render(<Task tasksListId={'test'} task={task}/>);
    expect(getByText("Sample task")).toBeInTheDocument();
  });

  it("should toggle the selected state on click", async () => {
    const user = userEvent.setup()
    const {getByTestId} = render(<Task tasksListId={'test'} task={task}/>);
    const taskWrapperCheckbox = getByTestId("task-wrapper-checkbox");

    expect(taskWrapperCheckbox.getAttribute('class')).not.toMatch(/checkboxSelected/gi)
    await user.click(taskWrapperCheckbox);
    expect(taskWrapperCheckbox.getAttribute('class')).toMatch(/checkboxSelected/gi)
    await user.click(taskWrapperCheckbox);
    expect(taskWrapperCheckbox.getAttribute('class')).not.toMatch(/checkboxSelected/gi)
  });
});
