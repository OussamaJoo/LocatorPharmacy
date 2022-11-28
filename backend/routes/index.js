const express = require('express');
const authRoutes = require('./auth.route');
const usersRoutes = require('./user.route');

const router = express.Router();

// localhost:4050/api/
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);

module.exports = router;