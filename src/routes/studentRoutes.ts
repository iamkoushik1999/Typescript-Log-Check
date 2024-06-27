import express from 'express';
// Controller
import {
  addStudents,
  deleteStudent,
  getStudent,
  getStudents,
  updateStudent,
} from '../controllers/studentController';
const router = express.Router();

// ----------------------------------------------
// POST
// Add Student
router.route('/').post(addStudents);

// GET
// Get Students
router.route('/').get(getStudents);

// GET
// Get Students
router.route('/:id').get(getStudent);

// PUT
// Update Student
router.route('/:id').put(updateStudent);

// DELETE
// Delete Student
router.route('/:id').delete(deleteStudent);

export default router;
