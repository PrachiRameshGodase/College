const College = require('../models/college');

// Create a College
const createCollege = async (req, res) => {
    const { name, location, courses_offered, fees } = req.body;
    try {
        const newCollege = await College.create({
            name,
            location,
            courses_offered,
            fees,
        });
        res.status(201).json({ message: 'College created successfully', college: newCollege });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to create college' });
    }
};

// Retrieve College List
const getColleges = async (req, res) => {
    try {
        const colleges = await College.findAll();
        res.status(200).json(colleges);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to retrieve colleges' });
    }
};

// Update College Details
const updateCollege = async (req, res) => {
    const collegeId = req.params.id;
    const { name, location, courses_offered, fees } = req.body;
    try {
        const college = await College.findByPk(collegeId);
        if (!college) {
            return res.status(404).json({ error: 'College not found' });
        }

        college.name = name || college.name;
        college.location = location || college.location;
        college.courses_offered = courses_offered || college.courses_offered;
        college.fees = fees || college.fees;

        await college.save();
        res.status(200).json({ message: 'College updated successfully', college });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update college' });
    }
};

//  Delete College
const deleteCollege = async (req, res) => {
    const collegeId = req.params.id;
    try {
        const college = await College.findByPk(collegeId);
        if (!college) {
            return res.status(404).json({ error: 'College not found' });
        }

        await college.destroy();
        res.status(200).json({ message: 'College deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to delete college' });
    }
};

module.exports = {
    createCollege,
    getColleges,
    updateCollege,
    deleteCollege,
};
