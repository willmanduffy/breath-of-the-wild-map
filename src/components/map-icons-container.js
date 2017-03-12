import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Marker,
  Popup
} from 'react-leaflet';

import { townIcon } from './icons';

const DisplayIcons = ({ locations }) => {
  const icons = locations.map((town) => {
    return (
      <Marker
        position={town.coordinates}
        icon={townIcon}
        title={town.name}
        key={town.name}
      >
        <Popup>
          <span>{town.name}</span>
        </Popup>
      </Marker>
    )
  });

  return (
    <div>{icons}</div>
  )
};

class MapIconsContainer extends Component {
  render() {
    const { activeIconType, locations } = this.props;

    return (
      <div>
        {activeIconType && locations &&
          <DisplayIcons locations={locations} />
        }
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  const activeIconType = state.activeIconType;

  return {
    activeIconType,
    locations: state.locations[activeIconType]
  }
};

export default connect(mapStateToProps)(MapIconsContainer);