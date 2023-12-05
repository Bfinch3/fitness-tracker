// const express = require('express');
// const router = express.Router();
// const {
//   getWorkouts,
//   getWorkoutById,
//   createWorkout,
//   updateWorkout,
//   deleteWorkout,
//   createReaction,
//   deleteReaction,
// } = require('../../controllers/workoutController');

// //routes for Workouts
// router.route('/')
//   .get(getWorkouts)
//   .post(createWorkout);

// router.route('/:workoutId')
//   .get(getWorkoutById)
//   .put(updateWorkout)
//   .delete(deleteWorkout);
// //routes for reactions
// router.route('/:workoutId/reactions')
//   .post(createReaction);

// router.route('/:workoutId/reactions/:reactionId')
//   .delete(deleteReaction);

// module.exports = router;