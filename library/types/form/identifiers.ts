import { CategoryDocumentType } from "@/library/db/models/category";
import { SubcategoryDocumentType } from "@/library/db/models/subcategory";






export type FormDocumentType = CategoryDocumentType | SubcategoryDocumentType;

export interface FormField<T> {
    key: keyof T | string; // Add string to support nested keys like 'photo.portrait'
    label: string;
    name: keyof T | string; // Same here to support nested fields
    type: 'text' | 'textarea' | 'checkbox' | 'select' | 'number'; // Add other types as needed
    validation: {
        required: boolean;
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