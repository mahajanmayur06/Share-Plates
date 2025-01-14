const Restaurant = require('../models/Restaurant');

exports.checkFoodAvailability = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    if (!restaurants || restaurants.length === 0) {
      return res.status(400).json({ message: 'Restaurant not found' });
    }

    const availFoodArray = [];

    for (const restaurant of restaurants) {
        if (restaurant.foodItems && Array.isArray(restaurant.foodItems)) {
            for (const item of restaurant.foodItems) {
                if (item.quantity > 0) {
                    availFoodArray.push({
                        item: item.item,
                        quantity: item.quantity
                    });
                }
            }
        }
        
    }

    if (availFoodArray.length > 0) {
      // Respond with success and available food items in JSON format
      console.log('food available');
      res.json({ success: true, availFoodArray });
    } else {
      // Respond with no food available
      res.json({ success: false, message: 'No food available' });
    }
  } catch (error) {
    console.error('Error checking food availability:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
