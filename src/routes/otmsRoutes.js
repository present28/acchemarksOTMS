const express = require('express');
const router = express.Router();
const mcqController = require('../controllers/mcqController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/insert', authMiddleware, mcqController.insertMcqData);
router.get('/get', authMiddleware, mcqController.getMcqData);

module.exports = router;
