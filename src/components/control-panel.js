import React from 'react';

import './control-panel.css';

// Actions
export const setActiveIconType = (iconType) => {
  return {
    iconType,
    type: 'SET_ACTIVE_ICON_TYPE'
  }
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_ICON_TYPE':
      const { iconType } = action;
      const isAlreadyActive = (state.activeIconType === iconType);
      const activeIconType = isAlreadyActive ? null : iconType;

      return { ...state, activeIconType };
    default:
      return state;
  }
};


const IconToggle = ({ store }) => {
  return (
    <li>
      <input type='checkbox' id='town-control-checkbox' />
      <label htmlFor='town-control-checkbox' onClick={() => store.dispatch(setActiveIconType('towns'))}>
        <img src='images/icons/town.png'  />
      </label>
    </li>
  )
}

export const ControlPanel = ({ store } ) => {
  return (
    <div className='control-panel'>
      <ul className='legend-list'>
        <IconToggle store={store} />
      </ul>
    </div>
  )
}
