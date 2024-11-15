import { Photo, Video } from '@/app/_library/types/common';
import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the User model
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo:Photo;
  video:Video;
  password: string;
  role: 'user' | 'admin' | 'employee';
  createdAt: Date;
  updatedAt:Date;
  portfolio: mongoose.Types.ObjectId;
  verificationToken:string;
  verificationTokenExpiration:Date;
  emailVerified:boolean;
  authorProfile: mongoose.Types.ObjectId;
}

// Define the User Schema
const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'employee'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  photo: {
    portrait: {
      type:String,
    },
    landscape: {
      type:String,
    },
  },
  video: {
    portrait: {
      type:String,
    },
    landscape: {
      type:String,
    },
  },
  portfolio: {
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  },
  verificationToken: {
      type: String,
      required: true,
  },
  verificationTokenExpiration: {
      type: Date,
      required: true,
  },
  emailVerified: {
    type: Boolean,
    required:true,
    default: false,
  },
  authorProfile:{
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
  
});

// Define the User model
const User: Model<IUser> = mongoose.models.User || model<IUser>('User', userSchema);
export default User;
