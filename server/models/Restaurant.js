const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Restaurant collection
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    quantity : {
        type : Number,
        required : true
    },
    expiryDate : {
        type : Date
    }
});

// Create a model based on the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;