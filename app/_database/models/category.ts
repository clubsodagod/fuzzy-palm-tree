import mongoose, { Document, Schema, Model, model, ObjectId } from 'mongoose';
import { ISubcategory } from './subcategory';
import { Photo, Video } from '@/app/_library/types/common';

// Define category document type
export interface CategoryDocumentType {
  id:string;
  name:string;
  tagline:string;
  description?:string;
  subcategories?:string[];
  photo:Photo;
  video:Video;
}


// Define an interface for the Category model
export interface ICategory extends Document {
  _id: ObjectId;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  subcategories: mongoose.Types.ObjectId[];
  photo: {
    landscape?: string;
    portrait: string;
  };
  video: {
    landscape?: string;
    portrait: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Define an interface for the Category model
export interface ICategoryPopulated extends Document {
  _id: ObjectId;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  subcategories: ISubcategory[];
  photo: {
    landscape?: string;
    portrait: string;
  };
  video: {
    landscape?: string;
    portrait: string;
  };
  createdAt: Date;
  updatedAt: Date;
}


// Define the Category Schema
const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
  }],
  photo: {
    landscape: {
      type: String,
    },
    portrait: {
      type: String,
      required: true,
    },
  },
  video: {
    landscape: {
      type: String,
    },
    portrait: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});



// Define the Category model
export const CategoryModel: Model<ICategory> = mongoose.models.Category || model<ICategory>('Category', categorySchema);

export default CategoryModel