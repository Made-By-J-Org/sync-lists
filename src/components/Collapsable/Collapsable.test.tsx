import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Collapsable from './Collapsable';

describe('Collapsable', () => {
  const tasksList = {
    id: '1',
    name: 'Test Tasks',
    tasks: [
      {
        checked: true,
        description: "Test Task",
        id: '11',
        value: 1
      },
      {
        checked: false,
        description: "Test Task2",
        id: '12',
        value: 2
      }
    ]
  };

  it('render component', () => {
    const {baseElement} = render(<Collapsable tasksList={tasksList}/>);
    expect(baseElement).toBeInTheDocument();
  });

  it('match snapshot', () => {
    const {asFragment} = render(<Collapsable tasksList={tasksList}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render no tasks when no tasks', () => {
    const noTasks = {...tasksList}
    noTasks.tasks = []
    const {asFragment, getByText} = render(<Collapsable tasksList={noTasks}/>);
    expect(getByText('No tasks')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles the state when details is clicked twice', async () => {
    const user = userEvent.setup()
    const {getByTestId, getByText, asFragment} = render(
      <Collapsable tasksList={tasksList}
      />);

    const collapsibleDetails = getByTestId('collapsible-details');
    const collapsibleDetailsHeader = getByText('Test Tasks');

    await user.click(collapsibleDetailsHeader);
    expect(collapsibleDetails.getAttribute('open')).toBe('');

    await user.click(collapsibleDetailsHeader);
    expect(collapsibleDetails.getAttribute('open')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
