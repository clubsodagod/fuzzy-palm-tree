import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Category model
export interface ICategory extends Document {
  name: string;
  description?: string;
  createdAt: Date;
}

// Define the Category Schema
const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Category model
const Category: Model<ICategory> = mongoose.models.Category || model<ICategory>('Category', categorySchema);
export default Category;
