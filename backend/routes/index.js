const express = require('express');
const authRoutes = require('./auth.route');
const usersRoutes = require('./user.route');
const pharmacieRoutes = require('./pharmacie.route');
const contactRoutes = require('./contact.route');

const router = express.Router();

// localhost:4050/api/
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/pharmacie', pharmacieRoutes);
router.use('/contactUs', contactRoutes);

module.exports = router;