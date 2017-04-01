import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Marker,
  Popup
} from 'react-leaflet';

import icons from '../data/icons';

import './map-icons-container.css';

const iconText = (location, iconType) => {
  const instructions = icons[iconType].instructions;

  if (location.name) {
    return location.name;
  } else if (instructions) {
    return instructions[location.instructionType];
  }
}

const DisplayIcons = ({ activeIconTypes, locations }) => {
  const displayIcons = activeIconTypes.map((iconType) => {
    return locations[iconType].map((location) => {
      const icon = icons[iconType];
      const popupText = iconText(location, iconType);

      return (
        <Marker
          position={location.coordinates}
          className={icon.classNames}
          icon={icon.icon}
          title={location.name}
          key={location.name}
        >
          <Popup>
            <span>{popupText}</span>
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
