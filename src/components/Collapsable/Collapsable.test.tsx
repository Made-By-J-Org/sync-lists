import React from 'react';
import {render, screen} from '@testing-library/react';
import Collapsable from './Collapsable';
import userEvent from '@testing-library/user-event'

describe('Collapsable', () => {
  const tasksList = {
    name: 'Test Tasks',
    tasks: [
      {
        checked: true,
        description: "Test Task",
        id: 1,
        value: 1
      },
      {
        checked: false,
        description: "Test Task2",
        id: 2,
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

  it('toggles the state when details is clicked twice', async () => {
    const user = userEvent.setup()

    const {getByTestId, getByText, asFragment} = render(<Collapsable
      tasksList={tasksList}/>);

    const collapsibleDetails = getByTestId('collapsible-details');
    const collapsibleDetailsHeader = getByText('Test Tasks');

    await user.click(collapsibleDetailsHeader);
    expect(collapsibleDetails.getAttribute('open')).toBe('');

    await user.click(collapsibleDetailsHeader);
    expect(collapsibleDetails.getAttribute('open')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
