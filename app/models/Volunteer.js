const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    role : {
        type : String,
        enum : ['Sorting', 'Packing', 'Distributing'],
        default : 'Distributing'
    },
    working_for : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Ngo'
    }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
