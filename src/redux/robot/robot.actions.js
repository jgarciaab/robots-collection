import RobotActionTypes from './robot.types';

export const requestRobots = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: RobotActionTypes.REQUEST_ROBOTS, payload: data }))
};