const express = require("express");
const {
  registerUser,
  loginUser,
  getSingleUser,
  getAllUser,
  enrollUser,
  removeEnrollment,
  updateCompletionStatus,
  approveTeacher,
  getUnapprovedTeachers,
} = require("../controllers/userController");
const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/get-user", getSingleUser);
router.get("/getAllstudents", getAllUser);
router.post("/enrollCourse", enrollUser);
router.post("/removeEnroll", removeEnrollment);
router.post("/updateStatus", updateCompletionStatus);
router.post("/approveTeacher", approveTeacher);
router.get("/unapprovedTeachers", getUnapprovedTeachers);

module.exports = router;
