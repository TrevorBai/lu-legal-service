import React from 'react';
import { NavLink } from 'react-router-dom';

const CollapsableNavigationItem = ({
  headerLink,
  headerName,
  dropdownItems,
  isProfile,
  toLeft
}) => {
  return (
    <div>
      <li className="nav-item dropdown">
        <NavLink className="nav-link droplink" to={headerLink}>
          {isProfile ? (
            <span className="mr-1 ProfileIcon">{headerName}</span>
          ) : (
            <span className="mr-1">{headerName}</span>
          )}
          <ion-icon
            name="caret-down-outline"
            className="dropdown-icon"
          ></ion-icon>
        </NavLink>
        {toLeft ? (
          <div className="dropdown-content dropdown-menu-right ShiftDown">
            {dropdownItems.map(dropdownItem => (
              <NavLink
                className="dropdown-custom-item"
                key={dropdownItem.name}
                to={dropdownItem.link}
              >
                {dropdownItem.name}
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="dropdown-content">
            {dropdownItems.map(dropdownItem => (
              <NavLink
                className="dropdown-custom-item"
                key={dropdownItem.name}
                to={dropdownItem.link}
              >
                {dropdownItem.name}
              </NavLink>
            ))}
          </div>
        )}
      </li>
    </div>
  );
};

export default CollapsableNavigationItem;
