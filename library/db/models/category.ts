import { Photo, Video } from '@/library/types/common';
import mongoose, { Document, Schema, Model, model, ObjectId } from 'mongoose';
import slugify from 'slugify'
import { sluggerPlugin } from 'mongoose-slugger-plugin';

// Define category document type
export interface CategoryDocumentType {
  id:string;
  name?:string;
  tagline?:string;
  description?:string;
  subcategories?:string[];
  photo?:Photo;
  video?:Video;
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


// create a unique index for slug generation;
// here, the slugs must be unique for each name
categorySchema.index({ name: 1, slug: 1 }, { name: 'name_slug', unique: true });

// add the plugin
categorySchema.plugin(sluggerPlugin, {
  // the property path which stores the slug value
  slugPath: 'slug',
  // specify the properties which will be used for generating the slug
  generateFrom: ['name'],
  // specify the max length for the slug
  maxLength: 30,
  // the unique index, see above
  index: 'name_slug'
});


// Define the Category model
export const CategoryModel: Model<ICategory> = mongoose.models.Category || model<ICategory>('Category', categorySchema);

export default CategoryModel