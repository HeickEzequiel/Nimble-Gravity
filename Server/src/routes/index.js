const router = require('express').Router();

const getCandidate = require('../controllers/getCandidate.js');
const getPositions = require('../controllers/getPositions.js');


router.get('/candidate', getCandidate);
router.get('/positions', getPositions);

module.exports = router;