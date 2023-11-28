const express = require('express');
const router = express.Router();
// Import member  routes
const memberRoutes = require('./memberRoute'); 
// const Routes = require('./Route'); 
// Define API routes
router.use('/members', memberRoutes);
// router.use('/', Routes);

module.exports = router;