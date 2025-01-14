const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    scale: {
        type: String,
        enum: ['Small', 'Medium', 'Large'],
        default: 'Medium',
    },
    volunteer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Volunteer'
    },
    ratings : [{
        type : Number,
        min : 0,
        max : 5,
        default : 0
    }]
});

const NGO = mongoose.model('NGO', ngoSchema);

module.exports = NGO;
