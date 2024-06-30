import { Request, Response } from 'express';
// Models
import studentModel from '../models/studentModel';
import logger from '../utils/logger';

// ---------------------------------------------------

// POST
// Add Students
export const addStudents = async (req: Request, res: Response) => {
  const {
    username,
    email,
    phoneNumber,
    roll,
    joiningDate,
    graduated,
    city,
    country,
  } = req.body;
  if (
    !username ||
    !email ||
    !phoneNumber ||
    !roll ||
    !joiningDate ||
    !graduated ||
    !city ||
    !country
  ) {
    res.status(400).json({ message: 'Please fill all' });
  }
  try {
    const student = await studentModel.create({
      username,
      email,
      phoneNumber,
      roll,
      joiningDate,
      graduated,
      city,
      country,
    });

    res.status(201).json({ message: 'Data added', data: student });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// GET
// Get Students
export const getStudents = async (req: Request, res: Response) => {
  logger.info('Get All Students');
  const students = await studentModel.find();

  const totalStudents = await studentModel.countDocuments();

  res.status(200).json({ count: totalStudents, data: students });
};

// GET
// GET One Student
export const getStudent = async (req: Request, res: Response) => {
  const student = await studentModel.findById(req.params.id);
  if (!student) {
    res.status(404).json({ message: 'No student Found' });
  }

  res.status(200).json({ data: student });
};

// PUT
// Update Student
export const updateStudent = async (req: Request, res: Response) => {
  const Id = req.params.id;
  const student = await studentModel.findByIdAndUpdate(Id, req.body, {
    new: true,
  });

  res.status(200).json({ message: 'Data updated', data: student });
};

// DELETE
// Delete Student
export const deleteStudent = async (req: Request, res: Response) => {
  const Id = req.params.id;
  await studentModel.findByIdAndDelete(Id);

  res.status(200).json({ message: 'Data deleted' });
};
