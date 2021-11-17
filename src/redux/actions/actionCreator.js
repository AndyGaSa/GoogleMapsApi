import actionTypes from './actionTypes';

export const addLocation = (location) => ({
  type: actionTypes.SAVE_LOCATION,
  location,
});

export default addLocation;
