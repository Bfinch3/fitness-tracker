const { Schema, model } = require("mongoose");
const Member = require("../models/member");

module.exports = {
  // Create a new member
  async createMember(req, res) {
    try {
      const memberData = req.body;
      const newMember = await Member.create(memberData);
      res.status(201).json({ data: newMember });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  },

  // Get all members
  async getMembers(req, res) {
    try {
      const members = await Member.find()
      .populate('workouts') // Replace 'workouts' with the actual field name in your Member schema
      .populate('friends');
      res.json(members);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get member by ID
  async getMemberById(req, res) {
    try {
      const memberId = req.params.memberId;
      const member = await Member.findOne({ _id: memberId });
      if (!member) {
        return handleNotFound(res);
      }
      res.json({ data: member });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  },

  // Update member by ID
  async updateMember(req, res) {
    try {
      const memberId = req.params.memberId;
      const updatedMemberData = req.body;
      const member = await Member.findByIdAndUpdate(
        memberId,
        updatedMemberData,
        {
          new: true,
        }
      );
      if (!member) {
        return handleNotFound(res);
      }
      res.json({ data: member });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  },
  // Delete member by ID
  async deleteMember(req, res) {
    try {
      const memberId = req.params.memberId;
      const deletedMember = await Member.findByIdAndDelete(memberId);
      if (!deletedMember) {
        return handleNotFound(res);
      }
      res.json({ message: "member removed", data: deletedMember });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  },
  // remove friend from friend list
  async deleteFriend(req, res) {
    try {
      const memberId = req.params.memberId;
      const friendId = req.params.friendId;
      const member = await Member.findByIdAndUpdate(
        memberId,
        { $pull: { friends: friendId } },
        { new: true }
      );
      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }
      res.json({ message: "Friend removed", member });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
 // add friend to friend list
 async addFriend(req, res) {
  try {
    const memberId = req.params.memberId;
    const friendId = req.params.friendId;
    const member = await Member.findByIdAndUpdate(
      memberId,
      { $push: { friends: friendId } },
      { new: true }
    );
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(member);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
},
};