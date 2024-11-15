
import mongoose, { Document, Schema, Model, model} from 'mongoose';
import { IUser } from './user';
import { ICategory } from './category';
import { Photo, Video } from '@/app/_library/types/common';

// Define an interface for Blog Document 
export interface BlogDocumentType {
  title: string;
  featuredImg:Photo;
  featuredVideo:Video;
  content: string;
  category: string;
  subcategories: string[];
  user:string;
  tags:string[];
}

// Define an interface for the Blog model
export interface IBlog extends Document {
  title: string;
  slug:string;
  featuredImg:Photo;
  featuredVideo:Video;
  content: string;
  author: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  subcategories: mongoose.Types.ObjectId[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
}
export interface IBlogPopulated extends Document {
  title: string;
  slug:string;
  featuredImg:Photo;
  featuredVideo:Video;
  content: string;
  author: IUser;
  category: ICategory;
  subcategories: mongoose.Types.ObjectId[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
}

// Define the Blog Schema
const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
    unique:true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  featuredImg:{
    portrait:{
      type:String
    },
    landscape:{
      type:String
    },
  },
  featuredVideo:{
    portrait:{
      type:String
    },
    landscape:{
      type:String
    },
  },
  content: {
    type: String,
    required: true,
    min: 200,
    max: 2000000,
    trim:true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
  }],
  tags: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  featured:{
    type:Boolean,
    required:true,
    default:false,
  },
});


// Define the Blog model
const Blog: Model<IBlog> = mongoose.models.Blog || model<IBlog>('Blog', blogSchema);
export default Blog;
