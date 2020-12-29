import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { requestRobots } from './redux/robot/robot.actions'

jest.mock('./redux/robot/robot.actions', () => {
  const robots = [{ id: 1, name: 'Fake Robot Name', email: 'fake@test.com' }];
  return {
    requestRobots: jest.fn(() => Promise.resolve(robots))
  };
});

test('renders robots collection title', async () => {
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByText('Robots Collection')).toBeInTheDocument()
});

test('request robots function is called', async () => {
  render(<Provider store={store}><App /></Provider>);
  expect(requestRobots).toHaveBeenCalledTimes(1);
});
