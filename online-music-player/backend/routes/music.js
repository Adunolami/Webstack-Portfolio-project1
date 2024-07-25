const express = require('express');
const router = express.Router();
const { getTracks, addTrack } = require('../controllers/musicController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, getTracks);
router.post('/', auth, addTrack);

module.exports = router;
