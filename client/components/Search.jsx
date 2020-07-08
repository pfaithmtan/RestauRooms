import React from 'react';
import Script from 'react-load-script';

import {
  SearchBar,
} from '../styling/style'
import config from '../../config';

const Search = ({ updateQuery }) => {

  const initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 13,
    });

    const input = document.getElementById('pac-input');

    const autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['establishment'],
    });

    autocomplete.bindTo('bounds', map);

    autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name', 'place_id']);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();
      
      if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      updateQuery(place.place_id);

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); 
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      const address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map, marker);
    });
  }

  return (
    <div>
      <Script 
      url={`https://maps.googleapis.com/maps/api/js?key=${config.TOKEN}&libraries=places`}
      onLoad={initMap}
      />

      <div>

        <SearchBar
          id="pac-input"
          type="text"
          placeholder="Search for a restaurant"
        />
        <div id="map" style={{ height: '500px' }}></div>
        <div id="infowindow-content">
          <img src="" width="16" height="16" id="place-icon" />
          <span id="place-name" className="title"></span><br />
          <span id="place-address"></span>
        </div>
      </div>

    </div >
  );
}

export default Search;
