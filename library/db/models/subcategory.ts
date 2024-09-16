import { Photo, Video } from '@/library/types/common';
import mongoose, { Document, Schema, Model, model } from 'mongoose';
import slugify from 'slugify'
import { sluggerPlugin } from 'mongoose-slugger-plugin';

// Define category document type
export interface SubcategoryDocumentType {
  id:string;
  name?:string;
  tagline?:string;
  description?:string;
  photo?:Photo;
  video?:Video;
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

// create a unique index for slug generation;
// here, the slugs must be unique for each name
subcategorySchema.index({ name: 1, slug: 1 }, { name: 'name_slug', unique: true });

// add the plugin
subcategorySchema.plugin(sluggerPlugin, {
  // the property path which stores the slug value
  slugPath: 'slug',
  // specify the properties which will be used for generating the slug
  generateFrom: ['name'],
  // specify the max length for the slug
  maxLength: 30,
  // the unique index, see above
  index: 'name_slug'
});


// Define the Subcategory model
const Subcategory: Model<ISubcategory> = mongoose.models.Subcategory || model<ISubcategory>('Subcategory', subcategorySchema);
export default Subcategory;
