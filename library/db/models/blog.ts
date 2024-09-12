import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Blog model
export interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  categories: mongoose.Types.ObjectId[];
  tags: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// Define the Blog Schema
const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Blog model
const Blog: Model<IBlog> = mongoose.models.Blog || model<IBlog>('Blog', blogSchema);
export default Blog;
