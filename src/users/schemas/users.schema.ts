import { Schema, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}

export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
