import React from 'react';

const ChooseProfession = ({ professions, setProfession }) => {
  return (
    <div className="profession-select">
      <h3>Select a Profession:</h3>
      <ul>
        {professions.map((prof, index) => (
          <li key={index} onClick={() => {setProfession(prof)}}>
            {prof}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseProfession;
