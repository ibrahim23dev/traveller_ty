// src/models/user.model.ts
import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export interface UserDocument extends IUser, Document {}

const userSchema = new Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<UserDocument>('User', userSchema);
