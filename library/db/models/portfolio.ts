import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Portfolio model
export interface IPortfolio extends Document {
  title: string;
  description?: string;
  items: {
    itemType: 'TechnicalApplication' | 'Property';
    item: mongoose.Types.ObjectId;
  }[];
  createdAt: Date;
  user: mongoose.Types.ObjectId;
}

// Define the Portfolio Schema
const portfolioSchema = new Schema<IPortfolio>({
  title: {
    type: String,
    required: true,
  },
  description: String,
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
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

// Define the Portfolio model
const Portfolio: Model<IPortfolio> = mongoose.models.Portfolio || model<IPortfolio>('Portfolio', portfolioSchema);
export default Portfolio;
