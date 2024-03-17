import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapsWithLocation = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [coordinates, setCoordinates] = useState([null, null]);

    const handleDonate = async (resName) => {
        try {
            const response = await axios.post('http://localhost:3500/register-community', {
                name: resName
            });
            console.log('Donation successful:', response.data);
        } catch (error) {
            console.error('Error donating:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // Fetch location from local storage
            const storedLocation = localStorage.getItem('location');

            // If location is found in local storage, use it in the API call
            if (storedLocation) {
                const locationOptions = {
                    method: 'GET',
                    url: 'https://maps-data.p.rapidapi.com/geocoding.php',
                    params: {
                      query: storedLocation,
                      lang: 'en',
                      country: 'in'
                    },
                    headers: {
                      'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
                      'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
                    }
                  };
                  
                  try {
                      const locationResponse = await axios.request(locationOptions);
                      const { lat, lng } = locationResponse.data.data;
                      setCoordinates([lat, lng]);

                      // Fetch nearby restaurants using the obtained coordinates
                      const nearbyRestaurantsOptions = {
                          method: 'GET',
                          url: 'https://map-places.p.rapidapi.com/nearbysearch/json',
                          params: {
                              location: `${lat},${lng}`,
                              radius: '1500',
                              keyword: 'veg',
                              type: 'restaurant'
                          },
                          headers: {
                              'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
                              'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
                          }
                      };
              
                      const nearbyRestaurantsResponse = await axios.request(nearbyRestaurantsOptions);
                      setRestaurants(nearbyRestaurantsResponse.data.results);
                      
                  } catch (error) {
                      console.error(error);
                  }
            } else {
                console.log('Location not found in local storage');
            }
        };
    
        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Coordinates submitted:', coordinates);
        setCoordinates([null, null]); // Reset coordinates after submission
    };

    return (
        <div>
            {/* <h1>Restaurants Nearby</h1> */}
            {/* <p>Latitude: {coordinates[0]}, Longitude: {coordinates[1]}</p> */}
            <form onSubmit={handleSubmit}>
                {/* <button type="submit">Submit</button> */}
            </form>
            
            <ul>
                {restaurants.forEach((restaurant, index) => (
                    <li key={index}>
                        {restaurant}
                        <button onClick={() => handleDonate(restaurant)}>Fix</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default MapsWithLocation;
