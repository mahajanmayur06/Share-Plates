import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PopUp.css'; // Import the external CSS file

const PopUp = ({ isOpen, onClose, ngo }) => {
    return (
        <Popup open={isOpen} closeOnDocumentClick onClose={onClose}>
            <div className="popup-container">
                {/* Cross button to close the popup */}
                <button onClick={onClose} className="close-btn">✖</button>

                <h2>{ngo.name}</h2>

                {ngo.city && <p><strong>City:</strong> {ngo.city}</p>}

                {ngo.description?.length > 0 && (
                    <p><strong>Description:</strong> {ngo.description.join(", ")}</p>
                )}

                {ngo.full_address && (
                    <p><strong>Address:</strong> {ngo.full_address}</p>
                )}

                {ngo.phone_number && (
                    <p><strong>Phone Number:</strong> {ngo.phone_number}</p>
                )}

                {ngo.rating && ngo.review_count && (
                    <p><strong>Rating:</strong> {ngo.rating} ({ngo.review_count} reviews)</p>
                )}

                {ngo.state && <p><strong>Status:</strong> {ngo.state}</p>}

                {ngo.website && (
                    <p><strong>Website:</strong> <a href={ngo.website} target="_blank" rel="noopener noreferrer">{ngo.website}</a></p>
                )}

                {ngo.place_link && (
                    <p><strong>Google Maps Link:</strong> <a href={ngo.place_link} target="_blank" rel="noopener noreferrer">View on Map</a></p>
                )}

                {ngo.types?.length > 0 && (
                    <p><strong>Types:</strong> {ngo.types.join(", ")}</p>
                )}
            </div>
        </Popup>
    );
};

export default PopUp;
