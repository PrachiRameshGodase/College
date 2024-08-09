const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/collegeController');


router.post('/colleges', collegeController.createCollege);
router.get('/colleges', collegeController.getColleges);
router.put('/colleges/:id', collegeController.updateCollege);
router.delete('/colleges/:id', collegeController.deleteCollege);

module.exports = router;
