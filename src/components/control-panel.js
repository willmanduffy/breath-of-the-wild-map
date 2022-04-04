import React from "react";

import "./control-panel.css";
import icons from "../data/icons";

// Actions
export const setActiveIconTypes = (iconType) => {
  return {
    iconType,
    type: "SET_ACTIVE_ICON_TYPES",
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ICON_TYPES":
      const { iconType } = action;
      const isAlreadyActive = state.activeIconTypes.includes(iconType);
      let activeIconTypes;

      if (isAlreadyActive) {
        activeIconTypes = state.activeIconTypes.filter(
          (icon) => icon !== iconType
        );
      } else {
        activeIconTypes = state.activeIconTypes.concat(iconType);
      }

      return { ...state, activeIconTypes };
    default:
      return state;
  }
};

const IconToggle = ({ displayName, store, type }) => {
  const iconIdentifier = `${type}-control-checkbox`;

  return (
    <li>
      <input type="checkbox" id={iconIdentifier} />

      <label
        htmlFor={iconIdentifier}
        onClick={() => store.dispatch(setActiveIconTypes(type))}
        title={displayName}
      >
        <img
          src={`https://raw.githubusercontent.com/suradaBANG/breath-of-the-wild-map/master/public/images/icons/${type}.png`}
          alt={type}
        />
      </label>
    </li>
  );
};

export const ControlPanel = ({ store }) => {
  const displayIconToggles = Object.keys(icons).map((iconType) => {
    const { displayName } = icons[iconType];

    return (
      <IconToggle {...{ displayName, type: iconType, key: iconType, store }} />
    );
  });

  return (
    <div className="control-panel">
      <ul className="legend-list">{displayIconToggles}</ul>
    </div>
  );
};
