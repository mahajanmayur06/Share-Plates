const NGO = require('../models/Ngo');
const Restaurant = require('../models/Restaurant');

// Controller function to get all NGOs
exports.getAllNGOs = async (req, res) => {
    try {
        const ngos = await NGO.find();
        if (ngos.length === 0) {
            return res.status(204).json({ message: 'No NGOs found yet' });
        }
        res.json(ngos);
    } catch (error) {
        console.error('Error fetching NGOs:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to register a new NGO
exports.registerNGO = async (req, res) => {
    const { name} = req.body;
    const contactNumber = '83984993'
    const scale = 'medium'
    try {
        const existingNGO = await NGO.findOne({ name });
        if (existingNGO) {
            return res.status(400).json({ message: 'NGO with this name already exists' });
        }

        const newNGO = new NGO({
            name,
            contactNumber,
            scale
        });

        await newNGO.save();
        res.status(201).json({ message: 'NGO registered successfully', ngo: newNGO });
    } catch (error) {
        console.error('Error registering NGO:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.giveRatings = async (req, res) => {
    try{
        const { restName, rating } = req.body
        const restaurant = await Restaurant.findOne({name : restName })
        if (!restaurant) {
            return res.status(400).json({ message : ''})
        }
        restaurant.rating.push_back(rating)
        await Restaurant.save()
        return res.status(201).json({ message : 'rating saved'})
    } catch(err) {
        console.log(err);
    }
}

exports.getRating = async (req, res) => {
    try {
        const name = req.body.name
        const restaurant = await Restaurant.findOne({name : restName})
        if (!restaurant) {
            return res.status(400).json({ message : ''})
        }
        let sum = 0
        restaurant.ratings.forEach((index) => {
            sum += restaurant.ratings[index]
        })
        const rating = sum / restaurant.ratings.length
        return res.status(201).json(rating)
    }
    catch (err){
        console.log(err);
    }
}

exports.sendRequestToVolunteer = async (req, res) => {
    const { name , ngoName } = req.body;

    try {
        const volunteer = await Volunteer.findById(name);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        const ngo = await Ngo.findOne({ name: ngoName });
        if (!ngo) {
            return res.status(404).json({ message: 'NGO not found' });
        }

        // Check if the volunteer is already working for this NGO
        if (volunteer.working_for.includes(ngo._id)) {
            return res.status(400).json({ message: 'Volunteer is already working for this NGO' });
        }

        // Append the NGO to the volunteer's working_for array
        volunteer.working_for.push(ngo._id);
        await volunteer.save();

        res.status(200).json({ message: 'Request sent and volunteer updated', volunteer });
    } catch (error) {
        console.error('Error sending request to volunteer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
