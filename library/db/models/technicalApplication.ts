import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the TechnicalApplication model
export interface ITechnicalApplication extends Document {
  name: string;
  description?: string;
  technologiesUsed: string[];
  githubLink?: string;
  liveLink?: string;
  caseStudy?: mongoose.Types.ObjectId;  // Reference to CaseStudy
  createdAt: Date;
}

// Define the TechnicalApplication Schema
const technicalApplicationSchema = new Schema<ITechnicalApplication>({
  name: {
    type: String,
    required: true,
  },
  description: String,
  technologiesUsed: [String],
  githubLink: String,
  liveLink: String,
  caseStudy: {
    type: Schema.Types.ObjectId,
    ref: 'CaseStudy',  // Reference to CaseStudy model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the TechnicalApplication model
const TechnicalApplication: Model<ITechnicalApplication> = mongoose.models.TechnicalApplication || model<ITechnicalApplication>('TechnicalApplication', technicalApplicationSchema);
export default TechnicalApplication;
