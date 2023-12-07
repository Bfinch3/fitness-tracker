// const { Workout, Member } = require("../models");
// const mongoose = require("mongoose");
// const { Workout, User } = require("../server/models");
// const mongoose = require("mongoose");

// module.exports = {
//   //create new workout
//   async createWorkout(req, res) {
//     try {
//       const { memberId } = req.body;
//       const workout = await Workout.create(req.body);
//       const member = await Member.findByIdAndUpdate(memberId, {
//         $push: { workouts: workout._id },
//       });
//       res.json(workout);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   //Get all workouts
//   async getWorkouts(req, res) {
//     try {
//       const workouts = await Workout.find();
//       res.json(workouts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   //Get single workout
//   async getWorkoutById(req, res) {
//     try {
//       const workout = await Workout.findById(req.params.workoutId).select();
//       if (!workout) {
//         return res.status(404).json({ message: "Workout not found" });
//       }
//       res.json(workout);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   //update reaction
//   async createReaction(req, res) {
//     const { workoutId } = req.params;
//     const { reactionBody, membername, createdAt, memberId } = req.body;
//     try {
//       const workout = await Workout.findByIdAndUpdate(
//         workoutId,
//         { $push: { comments: { reactionBody, membername, createdAt } } },
//         { new: true }
//       );
//       if (!workout) {
//         return res.status(404).json({ message: "Workout not found" });
//       }
//       res.status(201).json(workout.comments[workout.comments.length - 1]);
//     } catch (err) {
//       console.err(err);
//       res.status(500).json({ message: "Internal server err" });
//     }
//   },
//   //update workout
//   async updateWorkout(req, res) {
//     try {
//       const workout = await Workout.findByIdAndUpdate(
//         req.params.workoutId,
//         req.body,
//         { new: true }
//       );
//       if (!workout) {
//         return res.status(404).json({ message: "Workout not found" });
//       }
//       res.json(workout);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Find and delete workout by ID
//   async deleteWorkout(req, res) {
//     try {
//       const memberId = req.params.memberId;
//       const workoutId = req.params.workoutId;
//       const deletedWorkout = await Workout.findByIdAndDelete(workoutId);
//       if (!deletedWorkout) {
//         return res.status(404).json({ message: "Workout not found" });
//       }
//       // Remove Workout ID from members Workout array
//       const member = await Member.findByIdAndUpdate(
//         memberId,
//         { $pull: { workouts: workoutId } },
//         { new: true }
//       );
//       res.json({ message: "Workout deleted" });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   },
//   //Delete reaction by ID
//   async deleteReaction(req, res) {
//     try {
//       const workoutId = req.params.workoutId;
//       const reactionId = req.params.reactionId;
//       const workout = await Workout.findByIdAndUpdate(
//         workoutId,
//         { $pull: { comments: reactionId } },
//         { new: true }
//       );
//       if (!workout) {
//         return res.status(404).json({ message: "Member not found" });
//       }
//       res.json({ message: "Reaction removed", Workout });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   },
// };
