import { BlogDocumentType } from "@/library/db/models/blog";
import { CategoryDocumentType } from "@/library/db/models/category";
import { SubcategoryDocumentType } from "@/library/db/models/subcategory";






export type FormDocumentType = CategoryDocumentType | SubcategoryDocumentType | BlogDocumentType;

export interface FormField<T> {
    key: keyof T | string; // Support nested keys
    label: string;
    name: keyof T | string; // Same here to support nested fields
    type: 'text' | 'textarea' | 'checkbox' | 'select' | 'number'|'radio'|'editor'|'session'|'tags'; // Add other types as needed
    validation: {
        required: boolean;
        regEx?: string; // Array validation (for entire array)
        singleRegEx?: string; // Single ObjectId validation
        message?: string;
        minLength?: number;
        maxLength?: number;
    };
}

// Helper type to handle nested fields for Photo and Video, ensuring keys are string or number
export type NestedFieldKeys<T, K extends keyof T> = K extends string
    ? T[K] extends object
        ? `${K}.${Extract<keyof T[K], string | number>}` // Restrict to string | number
        : K
    : never;


export type FormFieldsFor<T> = {
    [K in keyof T]: T[K] extends object
        ? FormField<T> | FormField<{ [P in NestedFieldKeys<T, K>]: any }>
        : FormField<T>;
}[keyof T][];


// Define the Status type
export type Status = {
    error: boolean;
    message: string;
};

// StatusObject to handle nested properties
export type StatusObject<T extends object> = {
    [K in keyof T]: T[K] extends object
      ? StatusObject<T[K]> // Recursively map nested objects to StatusObject
      : Status;            // Map non-object fields directly to Status
};



