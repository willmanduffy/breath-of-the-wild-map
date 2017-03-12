import React, { Component } from 'react';

import {
  Map,
  TileLayer
} from 'react-leaflet';

import './map-container.css';

const position = [70.505, -75.09];

export default class MapContainer extends Component {
  render() {
    return (
      <Map animate={true} center={position} zoom={4}>
        <TileLayer
          minZoom={3}
          maxZoom={6}
          url='/images/tiles/{z}/{x}/{y}.png'
        />
      </Map>
    )
  }
}