import React, {
  useState,
} from 'react';
import {
  GoogleMap, Marker, Autocomplete, useJsApiLoader,
} from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Map.styles';
import { addLocation } from '../redux/actions/actionCreator';

const Map = function () {
  const dispatch = useDispatch();
  const locations = useSelector(({ locationsArray }) => locationsArray);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_googleApiKey,
    libraries: ['places'],
  });
  const [autocomplete, setAutocomplete] = useState(null);
  const onAutocompleteLoad = (autocompleteParam) => {
    setAutocomplete(autocompleteParam);
  };
  const onAutocompletePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      dispatch(addLocation(place));
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };
  const options = {
    disableDefaultUI: true,
  };
  return isLoaded && (
  <GoogleMap
    mapContainerStyle={styles.container}
    center={locations[locations.length - 1].geometry.location}
    zoom={18}
    options={options}
  >
      {locations.map(({ geometry: { location }, formatted_address }) => (
        <Marker
          position={location}
          key={formatted_address}
          icon={{
            path:
              'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z',
            fillColor: 'pink',
            fillOpacity: 1,
            scale: 2,
            strokeColor: 'purple',
            strokeWeight: 2.5,
          }}
        />
      ))}
    <Autocomplete
      onLoad={onAutocompleteLoad}
      onPlaceChanged={onAutocompletePlaceChanged}
    >
      <input
        type="text"
        placeholder="Search here and select to add markers..."
        style={styles.searchInputStyle}
      />
    </Autocomplete>
  </GoogleMap>
  );
};

export default Map;
