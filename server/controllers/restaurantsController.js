const Restaurant = require('../models/Restaurant');
const Ngo = require('../models/Ngo');

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        if (restaurants.length === 0) {
            return res.status(204).json({ message: 'No restaurants found yet' });
        }
        res.json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getRestaurant = async (req, res) => {
    try {
        const restaurantName = req.body.restaurantName;
        const restaurant = await Restaurant.findOne({ name: restaurantName });

        if (!restaurant) {
            return res.json({ message: 'Restaurant not found' });
        }
        console.log('Restaurant fetched');
        res.status(200).send(restaurant);
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.registerRestaurant = async (req, res) => {
    try {
        const { name, location, quantity, expiryDate } = req.body;
        const exRestaurant = await Restaurant.findOne({ name: name, location: location });
        console.log('in regi controller');
        if (exRestaurant) {
            // If the restaurant already exists, update its quantity
            exRestaurant.quantity = quantity;
            await exRestaurant.save();
            console.log('Restaurant updated successfully');
            res.status(200).json({ message: 'Restaurant updated successfully', restaurant: exRestaurant });
        } else {
            // If the restaurant doesn't exist, create a new one
            const newRestaurant = await Restaurant.create({
                name: name,
                location: location,
                quantity: quantity,
                expiryDate: expiryDate
            });
            console.log('Restaurant registered successfully');
            res.status(201).json({ message: 'Restaurant registered successfully', restaurant: newRestaurant });
        }
    } catch (error) {
        console.error('Error registering restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addFood = async (req, res) => {
    const { name, location, quantity, expiryDate } = req.body;

    try {
        let restaurant = await Restaurant.findOne({ name: name });
        if (!restaurant) {
            restaurant = new Restaurant({
                name: name,
                location: location,
                foodItem: foodItem,
                quantity: quantity,
                expiryDate: new Date(expiryDate)
            });
        } else {
            // If the restaurant already exists, update its foodItem de
            restaurant.quantity = quantity;
            restaurant.expiryDate = new Date(expiryDate);
        }

        await restaurant.save();
        console.log(restaurant, 'created / updated');
        res.status(200).json({ message: 'Food item added/updated successfully', restaurant });
    } catch (error) {
        console.error('Error adding food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.donateFood = async (req, res) => {
    const { restaurantName, ngoName } = req.body;
    try {
        const restaurant = await Restaurant.findOne({ name: restaurantName });
        const ngo = await Ngo.findOne({ name: ngoName });

        if (!restaurant || !ngo) {
            return res.status(400).json({ message: 'All fields are mandatory' });
        }

        restaurant.quantity = 0 // Set the quantity to 0 for donation

        // Save the updated restaurant and respond with success message
        console.log('Food donated successfully');
        await restaurant.save();
        res.status(200).json({ message: 'Food donated successfully' });
    } catch (error) {
        console.error('Error donating food:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
