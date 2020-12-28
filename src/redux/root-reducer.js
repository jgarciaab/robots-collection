import { combineReducers } from 'redux';

import { requestRobots } from './robot/robot.reducer';

export default combineReducers({
  requestRobots: requestRobots
});