const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user/user.controller');

router.post('/user/register', ctrlUser.register);
router.post('/user/authentication', ctrlUser.authenticate);
router.get('/user/get/:id', ctrlUser.userProfile);

module.exports = router;
