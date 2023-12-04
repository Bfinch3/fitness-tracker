const express = require('express');
const router = express.Router();
// Import member  routes
const memberRoutes = require('./memberRoute'); 
const Routes = require('./workoutRoute'); 
// Define API routes
router.use('/members', memberRoutes);
router.use('/workouts', Routes);

module.exports = router;