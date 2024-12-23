import React, { useState } from 'react';
import PopUp from '../../PopUp';

function NGOsList({ ngos }) {
  const [selectedNgo, setSelectedNgo] = useState(null); // State for selected NGO

  // Function to open the popup with the selected NGO's data
  const handleNgoClick = (ngo) => {
    setSelectedNgo(ngo); // Set the clicked NGO as selected
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedNgo(null); // Clear the selected NGO to hide the popup
  };

  return (
    <div className="NgoContainer">
      {ngos ? (
        <ul>
          {ngos.map((ngo, index) => (
            <li key={index} onClick={() => handleNgoClick(ngo)}>
              {ngo.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No NGOs nearby.</p>
      )}

      {/* Popup to show selected NGO details */}
      {selectedNgo && (
        <PopUp 
          isOpen={Boolean(selectedNgo)}
          onClose={closePopup}
          ngo={selectedNgo}
        />
      )}
    </div>
  );
}

export default NGOsList;
