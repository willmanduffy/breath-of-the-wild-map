import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Marker,
  Popup
} from 'react-leaflet';

import { icons } from './icons';

const DisplayIcons = ({ activeIconTypes, locations }) => {
  const displayIcons = activeIconTypes.map((iconType) => {
    return locations[iconType].map((location) => {
      const icon = icons[iconType];

      return (
        <Marker
          position={location.coordinates}
          icon={icon}
          title={location.name}
          key={location.name}
        >
          <Popup>
            <span>{location.name}</span>
          </Popup>
        </Marker>
      )
    });
  });

  return (
    <div>{displayIcons}</div>
  )
};

class MapIconsContainer extends Component {
  render() {
    const { activeIconTypes, locations } = this.props;

    return (
      <div>
        {activeIconTypes && locations &&
          <DisplayIcons { ...{ activeIconTypes, locations } } />
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  const activeIconTypes = state.activeIconTypes;

  return {
    activeIconTypes,
    locations: state.locations
  }
};

export default connect(mapStateToProps)(MapIconsContainer);