import { BlogDocumentType } from "@/library/db/models/blog";
import { CaseStudyDocumentType } from "@/library/db/models/case-study";
import { CategoryDocumentType } from "@/library/db/models/category";
import { PortfolioDocumentType } from "@/library/db/models/portfolio";
import { PropertyDocumentType } from "@/library/db/models/property";
import { SubcategoryDocumentType } from "@/library/db/models/subcategory";
import { TechnicalApplicationDocumentType } from "@/library/db/models/technicalApplication";


export type FormDocumentTypeV2 = 
    | { type: "category"; document: CategoryDocumentType }
    | { type: "subcategory"; document: SubcategoryDocumentType }
    | { type: "blog"; document: BlogDocumentType }
    | { type: "caseStudy"; document: CaseStudyDocumentType }
    | { type: "property"; document: PropertyDocumentType }
    | { type: "portfolio"; document: PortfolioDocumentType }
    | { type: "technicalApplication"; document: TechnicalApplicationDocumentType };



export type FormDocumentType = CategoryDocumentType | SubcategoryDocumentType | BlogDocumentType | CaseStudyDocumentType | PropertyDocumentType | PortfolioDocumentType | TechnicalApplicationDocumentType;

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



