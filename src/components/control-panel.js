import React from 'react';

import './control-panel.css';

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
      <label htmlFor={iconIdentifier} onClick={() => store.dispatch(setActiveIconTypes(type))}>
        <img alt={type} src={`images/icons/${type}.png`}  />
      </label>
    </li>
  )
}

export const ControlPanel = ({ store } ) => {
  return (
    <div className='control-panel'>
      <ul className='legend-list'>
        <IconToggle type='town' store={store} />
        <IconToggle type='tower' store={store} />
      </ul>
    </div>
  )
}
