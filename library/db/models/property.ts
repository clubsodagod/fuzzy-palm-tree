import { PhotoV2, VideoV2 } from '@/library/types/common';
import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Property model
export interface PropertyDocumentType {
  address: string;
  investmentType: "Rental" | "Wholesale" | "Fix and Flip" | string ;
  acquired: boolean;
  purchasePrice?: number;
  rehabCost?: number;
  currentValue?: number;
  photos:PhotoV2[];
  videos:VideoV2[];
  monthlyFinancialFigures?: {
    propertyMonthlyIncome?: number;
    propertyMonthlyExpenses?: number;
    propertyMonthlyDebtServiceExpense?: number;
  };
  description: string;
  caseStudy?: mongoose.Types.ObjectId;  // Reference to CaseStudy
  live: boolean;
}
// Define an interface for the Property model
export interface IProperty extends Document {
  address: string;
  investmentType: "rental" | "wholesale" | "fix and flip";
  slug: string;
  acquired: boolean;
  purchasePrice?: number;
  rehabCost?: number;
  currentValue?: number;
  photos:PhotoV2[];
  videos:VideoV2[];
  monthlyFinancialFigures?: {
    propertyMonthlyIncome?: number;
    propertyMonthlyExpenses?: number;
    propertyMonthlyDebtServiceExpense?: number;
  };
  description: string;
  caseStudy?: mongoose.Types.ObjectId;  // Reference to CaseStudy
  live: boolean;
}

// Define the Property Schema
const propertySchema = new Schema<IProperty>({
  address: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  investmentType: {
    type:String,
    enum:["rental", "wholesale", "fix and flip"],
    required:true,
  },
  acquired:{
    type:Boolean,
    required:true,
    default:false,
  },
  photos:[{
    type:String,
    required:true,
  }],
  videos:[{
    type:String,
    required:true,
  }],
  purchasePrice: Number,
  rehabCost: Number,
  currentValue: Number,
  monthlyFinancialFigures: {
    propertyMonthlyIncome: {
      type: Number,
    },
    propertyMonthlyExpenses: {
      type: Number,
    },
    propertyMonthlyDebtServiceExpense: {
      type: Number,
    },
  },
  description: String,
  caseStudy: {
    type: Schema.Types.ObjectId,
    ref: 'CaseStudy',  // Reference to CaseStudy model
  },
  live: {
    type: Boolean,
    required: true,
    default: false,
  }
});

// Define the Property model
const Property: Model<IProperty> = mongoose.models.Property || model<IProperty>('Property', propertySchema);
export default Property;
