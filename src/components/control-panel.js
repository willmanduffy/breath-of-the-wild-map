import React from 'react';

import './control-panel.css';
import { icons } from './icons';

// Actions
export const setActiveIconTypes = (iconType) => {
  return {
    iconType,
    type: 'SET_ACTIVE_ICON_TYPES'
  }
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_ICON_TYPES':
      const { iconType } = action;
      const isAlreadyActive = state.activeIconTypes.includes(iconType);
      let activeIconTypes;

      if (isAlreadyActive) {
        activeIconTypes = state.activeIconTypes.filter((icon) => icon !== iconType);
      } else {
        activeIconTypes = state.activeIconTypes.concat(iconType);
      }

      return { ...state, activeIconTypes };
    default:
      return state;
  }
};

const IconToggle = ({ store, type }) => {
  const iconIdentifier = `${type}-control-checkbox`;

  return (
    <li>
      <input type='checkbox' id={iconIdentifier} />

      <label
        htmlFor={iconIdentifier}
        onClick={() => store.dispatch(setActiveIconTypes(type))}
      >
        <img src={`images/icons/${type}.png`} alt={type} />
      </label>
    </li>
  )
}

export const ControlPanel = ({ store } ) => {
  const displayIconToggles = Object.keys(icons).map((iconType) => {
    return (
      <IconToggle type={iconType} store={store} />
    )
  });

  return (
    <div className='control-panel'>
      <ul className='legend-list'>
        {displayIconToggles}
      </ul>
    </div>
  )
}
