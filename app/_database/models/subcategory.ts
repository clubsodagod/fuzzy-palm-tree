import { Photo, Video } from '@/app/_library/types/common';
import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define category document type
export interface SubcategoryDocumentType {
  id:string;
  name:string;
  tagline:string;
  description?:string;
  photo:Photo;
  video:Video;
}


// Define an interface for the Subcategory model
export interface ISubcategory extends Document {
  name: string;
  slug: string;
  tagline:string;
  description: string;
  photo:Photo;
  video:Video;
  createdAt: Date;
}

// Define the Subcategory Schema
const subcategorySchema = new Schema<ISubcategory>({
  name: {
    type: String,
    unique:true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  tagline:{
    type:String,
    required: true
  },
  description:{
    type:String,
    required: true
  },
  photo:{
    landscape:{
      type:String,
    },
    portrait:{
      type:String,
      required:true,
    }
  },
  video:{
    landscape:{
      type:String,
    },
    portrait:{
      type:String,
      required:true,
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Subcategory model
const Subcategory: Model<ISubcategory> = mongoose.models.Subcategory || model<ISubcategory>('Subcategory', subcategorySchema);
export default Subcategory;
