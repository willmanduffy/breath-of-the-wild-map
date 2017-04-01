import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Marker,
  Popup
} from 'react-leaflet';

import { icons } from './icons';

import './map-icons-container.css';

const DisplayIcons = ({ activeIconTypes, locations }) => {
  const displayIcons = activeIconTypes.map((iconType) => {
    return locations[iconType].map((location) => {
      const icon = icons[iconType];
      const korokPuzzleTypes = [
        /*  0 */  "Unknown"
        /*  1 */ ,"Hiding Spot (usually under a rock but sometimes you need to burn leaves, melt ice or move a large object first)"
        /*  2 */ ,"Target Circles (throw rock through circle, magnesis ball on chain into stump, dive through a ring of flowers, etc.)"
        /*  3 */ ,"Yellow Flowers (follow a trail of disappearing flowers, touch flowers in the proper order, etc.)"
        /*  4 */ ,"Cube Pattern (find a cube nearby and use it to make the block patterns match)"
        /*  5 */ ,"Examine Sparkles (usually a stationary cloud of leaves and fairy dust but sometimes it is moving and sometimes it is high at the top of a building)"
        /*  6 */ ,"Timed Race (step on a stump to start the clock then make it to the ring of dots before time runs out)"
        /*  7 */ ,"Rock Pattern (a large geometric shape made out of rocks is missing at least one rock and needs you to complete it)"
        /*  8 */ ,"Tree Pattern (a series of fruit trees needs you to remove the extra fruit off one until they all match)"
        /*  9 */ ,"Fruit Offering (a series of fruit plates is waiting for you to place matching fruit on any of the empty plates)"
        /* 10 */ ,"Boulders (a large boulder must be moved to a certain position)"
        /* 11 */ ,"Horse Hurdles (a fence which must be jumped over while riding a horse)"
        /* 12 */ ,"Archery (a series of targets you must hit with arrows while standing next to a pinwheel)"
      ];
      const popupTitle = location.name;
      const popupText = (location.seedType) ? korokPuzzleTypes[location.seedType] : "";

      return (
        <Marker
          position={location.coordinates}
          className={icon.classNames}
          icon={icon.icon}
          title={location.name}
          key={location.name}
        >
          <Popup>
            <span><strong>{popupTitle}</strong><br></br>{popupText}</span>
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
