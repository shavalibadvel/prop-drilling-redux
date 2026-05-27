import {
  ADD_WORKOUT,
  SET_GOALS,
  WORKOUT_FILTER,
  UPDATE_PROGRESS,
} from "./type";

const ADD_WORKOUT_ACTION = (newWorkout) => ({
  type: ADD_WORKOUT,
  payload: newWorkout,
});

const ADD_GOALS_ACTION = (newGoal) => ({
  type: SET_GOALS,
  payload: newGoal,
});

const SET_NEW_FILTER = (newFilter) => ({
  type: WORKOUT_FILTER,
  payload: newFilter,
});
const SET_UPDATE_PROGRESS_ACTION = (newProgress) => ({
  type: UPDATE_PROGRESS,
  payload: newProgress,
});
export {
  ADD_WORKOUT_ACTION,
  ADD_GOALS_ACTION,
  SET_NEW_FILTER,
  SET_UPDATE_PROGRESS_ACTION,
};
