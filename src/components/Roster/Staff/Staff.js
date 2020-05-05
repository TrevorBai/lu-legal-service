import React from 'react';
import './Staff.css';

const Staff = ({ name, memoir }) => {
  const memoirArr = Array.from(memoir);
  return (
    <div className="col-sm-4">
      <div>
        <h3>{name}</h3>
        {memoirArr.map((cur) => (
          <p key={cur} className="TeamMemberStrength">
            {cur}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Staff;
