import React from 'react';
import { NavLink } from 'react-router-dom';

const CollapsableNavigationItem = ({
  headerLink,
  headerName,
  dropdownItems
}) => {
  return (
    <div>
      <li className="nav-item dropdown">
        <NavLink className="nav-link droplink" to={headerLink}>
          <span className="mr-1">{headerName}</span>
          <ion-icon
            name="caret-down-outline"
            className="dropdown-icon"
          ></ion-icon>
        </NavLink>
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
      </li>
    </div>
  );
};

export default CollapsableNavigationItem;
