import { Photo, Video } from '@/library/types/common';
import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Case Study model
export interface CaseStudyDocumentType {
  title: string;
  type: 'TechnicalApplication' | 'Property' | "";
  featuredImg:Photo;
  featuredVideo:Video;
  summary: string;
  objectives: string[];
  challenges: string[];
  solutions: string[];
  outcomes: {
    description: string;
    valueGenerated: number;  // Value in case of Property (e.g., rental increase or appraised value)
    technicalImpact: string; // Impact in case of TechnicalApplication
  };
}



// Define an interface for the Case Study model
export interface ICaseStudy extends Document {
  title: string;
  type: 'TechnicalApplication' | 'Property';
  featuredImg:Photo;
  featuredVideo:Video;
  slug:string;
  relatedItem?: mongoose.Types.ObjectId|null;
  summary: string;
  objectives: string[];
  challenges: string[];
  solutions: string[];
  outcomes: {
    description: string;
    valueGenerated?: number;  // Value in case of Property (e.g., rental increase or appraised value)
    technicalImpact?: string; // Impact in case of TechnicalApplication
  };
  createdAt: Date;
}

// Define the Case Study Schema
const caseStudySchema = new Schema<ICaseStudy>({
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
  type: {
    type: String,
    enum: ['TechnicalApplication', 'Property'],
    required: true,
  },
  relatedItem: {
    type: Schema.Types.ObjectId,
    required: false,
    refPath: 'type',
  },
  summary: {
    type: String,
    required: true,
  },
  objectives: [{
    type: String,
    required: true,
  }],
  challenges: [{
    type: String,
    required: true,
  }],
  solutions: [{
    type: String,
    required: true,
  }],
  outcomes: {
    description: {
      type: String,
      required: true,
    },
    valueGenerated: Number,  // For property-related case studies
    technicalImpact: String, // For technical applications case studies
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Case Study model
const CaseStudy: Model<ICaseStudy> = mongoose.models.CaseStudy || model<ICaseStudy>('CaseStudy', caseStudySchema);
export default CaseStudy;
