const Volunteer = require('../models/Volunteer');
const Ngo = require('../models/Ngo');

exports.registerVolunteer = async (req, res) => {
    const { name, contactNumber, role } = req.body;
    try {
        const existingVolunteer = await Volunteer.findOne({ contactNumber });

        if (existingVolunteer) {
            return res.status(400).json({ message: 'Volunteer with this contact number already exists' });
        }

        const newVolunteer = new Volunteer({
            name,
            contactNumber,
            role,
        });

        await newVolunteer.save();
        console.log('Volunteer registered');
        res.status(201).json({ message: 'Volunteer registered successfully', volunteer: newVolunteer });
    } catch (error) {
        console.error('Error registering volunteer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.acceptRequestFromNgo = async (req, res) => {
    const { name, ngoName } = req.body;

    try {
        const volunteer = await Volunteer.findById(name);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        if (!volunteer.working_for) {
            // Will accept their request
            volunteer.working_for = ngoName;
            await volunteer.save();
            console.log('Volunteer: Food is handed over to me');
        } else {
            console.log('Volunteer: Cannot accept request as already working with another NGO');
        }

        res.status(200).json({ message: 'Request updated', volunteer });
    } catch (error) {
        console.error('Error accepting/rejecting request from NGO:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.freeToWork = async (req, res) => {
    const { name } = req.body;
    try {
        const volunteer = await Volunteer.findOne({ name });
        volunteer.working_for = '';
        await volunteer.save();
        console.log(`${volunteer.name} is now free to work`);
        res.status(200).json({ message: 'Volunteer updated successfully' });
    } catch (err) {
        console.error('Error freeing volunteer to work:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getNgo = async (req, res) => {
    const { name } = req.body;
    try {
        const volunteer = await Volunteer.findOne({ name });
        res.status(200).json(volunteer.working_for || 'Not working with any NGO');
    } catch (err) {
        console.error('Error getting NGO for volunteer:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
