import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Author model
export interface IAuthor extends Document {
  name: string;
  bio?: string;
  avatar?: string;
  user: mongoose.Types.ObjectId;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Define the Author Schema
const authorSchema = new Schema<IAuthor>({
  name: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique:true,
  },
  socialLinks: {
    github: String,
    twitter: String,
    linkedin: String,
  }
});

// Define the Author model
const Author: Model<IAuthor> = mongoose.models.Author || model<IAuthor>('Author', authorSchema);
export default Author;
