import { BlogDocumentType } from "@/library/db/models/blog";
import { FormFieldsFor } from "@/library/types/form/identifiers";




export const blogFormDocument: FormFieldsFor<BlogDocumentType> = [
    {
        key: 'title',
        label: 'Blog Title',
        name: 'title',
        type: 'text',
        validation: {
            required: true,
            regEx: "^[\\s\\S]{5,200}$", // Alphanumeric with spaces, 5-200 characters
            message: 'Title must be alphanumeric and between 5 to 200 characters.',
            minLength: 5,
            maxLength: 200
        }
    },
    {
        key: 'content',
        label: 'Content',
        name: 'content',
        type: 'editor',
        validation: {
            required: true,
            regEx: '^[\\s\\S]{20,10000}$', // Allow all characters, length between 20-10000
            message: 'Content must be between 20 and 10000 characters.',
            minLength: 20,
            maxLength: 10000
        }
    },
    {
        key: 'featuredImg',
        label: 'Featured Image (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: true,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: 'Please provide a valid image URL.',
        }
    },
    {
        key: 'featuredImg',
        label: 'Featured Image (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: true,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: 'Please provide a valid image URL.',
        }
    },
    {
        key: 'featuredVideo',
        label: 'Featured Video (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
            regEx:  "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: 'Please provide a valid video URL.',
        }
    },
    {
        key: 'featuredVideo',
        label: 'Featured Video (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
            regEx:  "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: 'Please provide a valid video URL.',
        }
    },
    {
        key: 'category',
        label: 'Category',
        name: 'category',
        type: 'radio',
        validation: {
            required: true,
            regEx: '^[a-f\\d]{24}$', // MongoDB ObjectId regex (24 hex characters)
            message: 'Category should be a valid ObjectId (24 hexadecimal characters).',
        }
    },
    {
        key: 'subcategories',
        label: 'Subcategories',
        name: 'subcategories',
        type: 'checkbox',
        validation: {
            required: true,
            singleRegEx: '^[a-f\\d]{24}$', // Single MongoDB ObjectId (24 hex characters)
            regEx: '^([a-f\\d]{24})(,[a-f\\d]{24})*$', // MongoDB ObjectId array validation (comma-separated)
            message: 'Subcategories should be a list of valid ObjectIds.',
        },
    },
    {
        key: 'user',
        label: 'User',
        name: 'user',
        type: 'session',
        validation: {
            required: true,
            regEx: '^[a-f\\d]{24}$', // MongoDB ObjectId regex (24 hex characters)
            message: 'Invalid user ID. It should be a valid ObjectId.',
        }
    },
    {
        key: 'tags',
        label: 'Tags',
        name: 'tags',
        type: 'tags',
        validation: {
            required: true,
            regEx: "^[a-zA-Z0-9 ]{2,100}$", // Alphanumeric with spaces, 5-100 characters
            message: 'Title must be alphanumeric and between 2 to 100 characters.',
            minLength: 2,
            maxLength: 100
        }
    }
];
