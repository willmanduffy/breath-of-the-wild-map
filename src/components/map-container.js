import React, { Component } from "react";

import { Map, TileLayer } from "react-leaflet";

import MapIconsContainer from "./map-icons-container";

import "./map-container.css";

const maxBounds = [
  [0, -176.59],
  [85.455, 38],
];

const position = [70.505, -75.09];

export default class MapContainer extends Component {
  // For debugging points add this to <Map>
  // `onClick={(event) => console.log(event.latlng)}`
  render() {
    return (
      <Map
        center={position}
        maxBounds={maxBounds}
        zoom={4}
        onClick={(event) => console.log([event.latlng.lat, event.latlng.lng])}
      >
        <TileLayer
          minZoom={3}
          maxZoom={6}
          url="https://raw.githubusercontent.com/suradaBANG/breath-of-the-wild-map/master/public/images/tiles/{z}/{x}/{y}.png"
        />

        <MapIconsContainer />
      </Map>
    );
  }
}
