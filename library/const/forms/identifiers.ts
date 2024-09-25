import { CategoryDocumentType } from "@/library/db/models/category";
import { SubcategoryDocumentType } from "@/library/db/models/subcategory";
import { FormFieldsFor } from "@/library/types/form/identifiers";




// Validation properties for CategoryFormDocument
export const categoryFormDocument: FormFieldsFor<CategoryDocumentType> = [
    {
        key: 'name',
        label: 'Category Name',
        name: 'name',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            regEx: "^[a-zA-Z0-9 ]+$", // Only allows letters, numbers, and spaces
            message: "Category name must be at least 2 characters and contain only alphanumeric characters.",
        },
    },
    {
        key: 'tagline',
        label: 'Tagline',
        name: 'tagline',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            regEx: "^[a-zA-Z0-9,.!? ]+$", // Allows letters, numbers, punctuation, and spaces
            message: "Tagline must be at least 2 characters and contain valid characters.",
        },
    },
    {
        key: 'description',
        label: 'Description',
        name: 'description',
        type: 'textarea',
        validation: {
            required: false,
            maxLength: 500,
            minLength: 1,
            regEx: "^[\\s\\S]{0,500}$", // Matches any character up to 500 characters
            message: "Description should be at least 1 character but, not exceed 500 characters.",
        },
    },
    {
        key: 'subcategories',
        label: 'Subcategories (Comma-separated)',
        name: 'subcategories',
        type: 'checkbox',
        validation: {
            required: false,
            regEx: "^([a-zA-Z0-9]+,)*[a-zA-Z0-9]+$", // Validates comma-separated values
            message: "Subcategories should be comma-separated.",
        },
    },
    {
        key: 'photo',
        label: 'Photo (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the photo.",
        },
    },
    {
        key: 'photo',
        label: 'Photo (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the photo.",
        },
    },
    {
        key: 'video',
        label: 'Video (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the video.",
        },
    },
    {
        key: 'video',
        label: 'Video (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the video.",
        },
    },
];



// Validation properties for SubcategoryFormDocument
export const subcategoryFormDocument: FormFieldsFor<SubcategoryDocumentType> = [
    {
        key: 'name',
        label: 'Subcategory Name',
        name: 'name',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            regEx: "^[a-zA-Z0-9 ]+$", // Only allows letters, numbers, and spaces
            message: "Subcategory name must be at least 2 characters and contain only alphanumeric characters.",
        },
    },
    {
        key: 'tagline',
        label: 'Tagline',
        name: 'tagline',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            regEx: "^[a-zA-Z0-9,.!? ]+$", // Allows letters, numbers, punctuation, and spaces
            message: "Tagline must be at least 2 characters and contain valid characters.",
        },
    },
    {
        key: 'description',
        label: 'Description',
        name: 'description',
        type: 'textarea',
        validation: {
            required: false,
            maxLength: 500,
            minLength: 1,
            regEx: "^[\\s\\S]{0,500}$", // Matches any character up to 500 characters
            message: "Description should be at least 1 character but, not exceed 500 characters.",
        },
    },
    {
        key: 'photo',
        label: 'Photo (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the photo.",
        },
    },
    {
        key: 'photo',
        label: 'Photo (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the photo.",
        },
    },
    {
        key: 'video',
        label: 'Video (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the video.",
        },
    },
    {
        key: 'video',
        label: 'Video (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
            regEx: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", // Standard URL validation regex
            message: "Please enter a valid URL for the video.",
        },
    },
];


