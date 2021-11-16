import actionTypes from '../actions/actionTypes';

// eslint-disable-next-line default-param-last
export default function locationsArrayReducer(locations = [], action) {
  let newLocations = locations;
  if (action.type === actionTypes.SAVE_LOCATION) {
    newLocations = action.locations;
  }
  return newLocations;
}
