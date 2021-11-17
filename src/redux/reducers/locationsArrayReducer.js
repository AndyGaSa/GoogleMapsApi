import actionTypes from '../actions/actionTypes';

const initialState = [{
  geometry: { location: { lat: 41.388487, lng: 2.1562865 } },
  name: 'Barcelona',
  formatted_address: 'Barcelona, España',
}];

export default function locationsArrayReducer(locations = initialState, action) {
  let newLocations = locations;
  if (action.type === actionTypes.SAVE_LOCATION) {
    newLocations = [...locations, action.location];
  }
  return newLocations;
}
