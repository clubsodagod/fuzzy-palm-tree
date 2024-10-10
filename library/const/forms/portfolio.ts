import { PortfolioDocumentType } from "@/library/db/models/portfolio";
import { FormFieldsFor } from "@/library/types/form/identifiers";

export const portfolioFormDocument: FormFieldsFor<PortfolioDocumentType> = [
    {
        key: 'name',
        label: 'Name',
        name: 'name',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            maxLength: 100,
            message: 'Name must be between 2 and 100 characters',
        },
    },
    {
        key: 'foreword',
        label: 'Foreword',
        name: 'foreword',
        type: 'textarea',
        validation: {
            required: false,
            maxLength: 500,
            message: 'Foreword must not exceed 500 characters',
        },
    },
    {
        key: 'sections',
        label: 'Sections',
        name: 'sections',
        type: 'tags', // For multiple sections
        validation: {
            required: true,
            message: 'At least one section is required',
        },
    },
    {
        key: 'createdAt',
        label: 'Creation Date',
        name: 'createdAt',
        type: 'text',
        validation: {
            required: true,
            regEx: '^\\d{4}-\\d{2}-\\d{2}$', // Simple date pattern (YYYY-MM-DD)
            message: 'Enter a valid date in YYYY-MM-DD format',
        },
    },
    {
        key: 'user',
        label: 'User ID',
        name: 'user',
        type: 'text',
        validation: {
            required: true,
            singleRegEx: '^[a-fA-F0-9]{24}$',
            message: 'Enter a valid ObjectId for the user',
        },
    },
];
