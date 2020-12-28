import RobotActionTypes from './robot.types';

const INITIAL_STATE = {
  robots: [],
};

export const requestRobots = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RobotActionTypes.REQUEST_ROBOTS:
      return {
        ...state,
        robots: action.payload,
      };
    default:
      return state;
  }
};