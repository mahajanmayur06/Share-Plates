import React, { useState } from 'react';
import PopUp from './NGOPopup/PopUp';
import './NGOsList.css';

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
        <div className="ngo-cards">
          {ngos.map((ngo, index) => (
            <div
              key={index}
              className="ngo-card"
              onClick={() => handleNgoClick(ngo)}
            >
              <h3>{ngo.name}</h3>
              <p>{ngo.description}</p> {/* You can adjust this depending on the data available */}
            </div>
          ))}
        </div>
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
