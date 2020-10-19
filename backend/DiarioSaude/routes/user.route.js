const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/:id', user_controller.details);
router.post('/create', user_controller.create);

module.exports = router;
