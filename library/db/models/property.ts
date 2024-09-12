import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Property model
export interface IProperty extends Document {
  address: string;
  purchasePrice?: number;
  currentValue?: number;
  rentalIncome?: number;
  description?: string;
  caseStudy?: mongoose.Types.ObjectId;  // Reference to CaseStudy
  purchasedAt: Date;
}

// Define the Property Schema
const propertySchema = new Schema<IProperty>({
  address: {
    type: String,
    required: true,
  },
  purchasePrice: Number,
  currentValue: Number,
  rentalIncome: Number,
  description: String,
  caseStudy: {
    type: Schema.Types.ObjectId,
    ref: 'CaseStudy',  // Reference to CaseStudy model
  },
  purchasedAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Property model
const Property: Model<IProperty> = mongoose.models.Property || model<IProperty>('Property', propertySchema);
export default Property;
