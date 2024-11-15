import { TechnicalApplicationDocumentType } from "@/app/_database/models/technicalApplication";
import { FormFieldsFor } from "@/library/types/form/identifiers";

export const technicalApplicationFormDocument: FormFieldsFor<TechnicalApplicationDocumentType> = [
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
        key: 'description',
        label: 'Description',
        name: 'description',
        type: 'textarea',
        validation: {
            required: true,
            minLength: 10,
            message: 'Description is required with a minimum length of 10 characters',
        },
    },
    {
        key: 'photos',
        label: 'Photos',
        name: 'photos',
        type: 'tags', // or another appropriate type for handling multiple photo entries
        validation: {
            required: true,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: 'Please provide a valid image URL.',
        },
    },
    {
        key: 'videos',
        label: 'Videos',
        name: 'videos',
        type: 'tags', // or another appropriate type for handling multiple video entries
        validation: {
            required: false,
            regEx:  "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: 'Please provide a valid video URL.',
        },
    },
    {
        key: 'technologiesUsed',
        label: 'Technologies Used',
        name: 'technologiesUsed',
        type: 'tags',
        validation: {
            required: true,
            message: 'Please specify at least one technology used',
        },
    },
    {
        key: 'githubLink',
        label: 'GitHub Link',
        name: 'githubLink',
        type: 'text',
        validation: {
            required: false,
            regEx: 'https?://[\\w.-]+', // Simple URL validation
            message: 'Enter a valid URL',
        },
    },
    {
        key: 'link',
        label: 'Web Url',
        name: 'link',
        type: 'text',
        validation: {
            required: false,
            regEx: 'https?://[\\w.-]+',
            message: 'Enter a valid URL',
        },
    },
    {
        key: 'caseStudy',
        label: 'Case Study Reference',
        name: 'caseStudy',
        type: 'text',
        validation: {
            required: false,
            singleRegEx: '^[a-fA-F0-9]{24}$', // MongoDB ObjectId regex pattern
            message: 'Enter a valid ObjectId',
        },
    },
    {
        key: 'live',
        label: 'Is Live?',
        name: 'live',
        type: 'checkbox',
        validation: {
            required: false,
            message: 'Check if this technical application is live',
        },
    },
];
