const express = require('express');
const router = express.Router();
// Import user  routes
const userRoutes = require('./userRoute'); 
const Routes = require('./workoutRoute'); 
// Define API routes
router.use('/users', userRoutes);
router.use('/workouts', Routes);

module.exports = router;