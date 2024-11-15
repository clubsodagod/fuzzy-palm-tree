import mongoose, { Document, Schema, Model, model } from 'mongoose';


export type ReasonForContact = 'employment' | 'business' | 'collaboration' | 'other';
export const reasonsForContactArray = ['employment' , 'business' , 'collaboration' , 'other'];

// Define an interface for the Contact model
export interface IContact extends Document {
    firstName: string;
    lastName: string;
    company:string;
    email: string;
    phone?: string;
    reason: ReasonForContact;
    message: string;
    createdAt: Date;
}

// Define an interface for the Contact model
export interface ContactDocumentType {
    firstName: string;
    lastName: string;
    company:string;
    email: string;
    phone?: string;
    reason: ReasonForContact;
    message: string;
}

// Define the Contact Schema
const contactSchema = new Schema<IContact>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
    },
    phone: {
        type: String,
        required: false,
    },
    reason: {
        type: String,
        enum: reasonsForContactArray,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Define the Contact model
const ContactModel: Model<IContact> = mongoose.models.Contact || model<IContact>('Contact', contactSchema);

export default ContactModel;
