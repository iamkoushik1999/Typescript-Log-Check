import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  username: string;
  email: string;
  phoneNumber: string;
  roll: string;
  joiningDate: string;
  graduated: boolean;
  city: string;
  country: string;
}

const studentSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    roll: {
      type: String,
      require: true,
    },
    joiningDate: {
      type: String,
      require: true,
    },
    graduated: {
      type: Boolean,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const studentModel = mongoose.model<IStudent>('Student', studentSchema);
export default studentModel;
