import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define an interface for the Tag model
export interface ITag extends Document {
  name: string;
  createdAt: Date;
}

// Define the Tag Schema
const tagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Tag model
const Tag: Model<ITag> = mongoose.models.Tag || model<ITag>('Tag', tagSchema);
export default Tag;
