const express = require('express');
const router = express.Router();
const {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
} = require('../../controllers/memberController');

// Routes for Members
router.route('/')
  .get(getMembers)
  .post(createMember);

router.route('/:memberId')
  .get(getMemberById)
  .put(updateMember)
  .delete(deleteMember);

module.exports = router;
