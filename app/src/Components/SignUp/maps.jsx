import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Maps = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const options = {
                method: 'GET',
                url: 'https://map-places.p.rapidapi.com/nearbysearch/json',
                params: {
                    location: '19.18611111,72.84861111',
                    radius: '1500',
                    keyword: 'veg',
                    type: 'restaurant'
                },
                headers: {
                    'X-RapidAPI-Key': '8ed3523de8msh5f76f1ade5225e1p198c7cjsn8114ff608262',
                    'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const restaurantNames = response.data.results.map(restaurant => restaurant.name);
                console.log(restaurantNames);
                setRestaurants(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h1>Restaurants Nearby</h1>
            <ul>
                {restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Maps;
