import mongoose, { Document, Schema, Model, model } from 'mongoose';


// Define an interface for the Portfolio model
export interface PortfolioDocumentType {
  name: string;
  foreword?: string;
  sections: Section[];
  createdAt: Date;
  owner: mongoose.Types.ObjectId;
}

export type Item = {
  itemType: 'TechnicalApplication' | 'Property';
  item: mongoose.Types.ObjectId;
};

export type Section = {
  sectionName: 'Computer Science' | 'Real Estate';
  items: Item[];
};

// Define an interface for the Portfolio model
export interface IPortfolio extends Document {
  name: string;
  foreword?: string;
  sections: Section[];
  createdAt: Date;
  owner: mongoose.Types.ObjectId;
}

// Define the Portfolio Schema
const portfolioSchema = new Schema<IPortfolio>({
  name: {
    type: String,
    required: true,
  },
  foreword: String,
  sections: [
    {
      sectionName: {
        type: String,
        enum: ['TechnicalApplication', 'Property'],
        required: true,
      },
      items: [{
        itemType: {
          type: String,
          enum: ['TechnicalApplication', 'Property'],
          required: true,
        },
        item: {
          type: Schema.Types.ObjectId,
          required: true,
          refPath: 'items.itemType',
        },
      }]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique:true,
  }
});

// Define the Portfolio model
const Portfolio: Model<IPortfolio> = mongoose.models.Portfolio || model<IPortfolio>('Portfolio', portfolioSchema);
export default Portfolio;
