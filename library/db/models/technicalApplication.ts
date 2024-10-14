import { Photo, PhotoV2, Video, VideoV2 } from '@/library/types/common';
import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the TechnicalApplication model
export interface TechnicalApplicationDocumentType {
  name: string;
  description: string;
  photos:PhotoV2[];
  videos:VideoV2[];
  technologiesUsed: string[];
  githubLink: string;
  link: string;
  caseStudy?: mongoose.Types.ObjectId;  // Reference to CaseStudy
  live:boolean;
}
// Define an interface for the TechnicalApplication model
export interface ITechnicalApplication extends Document {
  name: string;
  slug: string;
  description: string;
  photos:PhotoV2[];
  videos:VideoV2[];
  technologiesUsed: string[];
  githubLink?: string;
  link: string;
  caseStudy?: mongoose.Types.ObjectId;  // Reference to CaseStudy
  createdAt: Date;
  live:boolean;
}

// Define the TechnicalApplication Schema
const technicalApplicationSchema = new Schema<ITechnicalApplication>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  description: String,
  photos:[{
    type:String,
    required:true,
  }],
  videos:[{
    type:String,
    required:true,
  }],
  technologiesUsed: [String],
  githubLink: String,
  link: String,
  caseStudy: {
    type: Schema.Types.ObjectId,
    ref: 'CaseStudy',  // Reference to CaseStudy model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  live:{
    type: Boolean,
    required:true,
    default:true,
  }
});

// Define the TechnicalApplication model
const TechnicalApplication: Model<ITechnicalApplication> = mongoose.models.TechnicalApplication || model<ITechnicalApplication>('TechnicalApplication', technicalApplicationSchema);
export default TechnicalApplication;
