import { CategoryDocumentType } from "@/library/db/models/category";
import { SubcategoryDocumentType } from "@/library/db/models/subcategory";
import { FormFieldsFor } from "@/library/types/form/identifiers";




export const categoryFormDocument: FormFieldsFor<CategoryDocumentType> = [
    {
        key: 'name',
        label: 'Category Name',
        name: 'name',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
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
        },
    },
    {
        key: 'subcategories',
        label: 'Subcategories (Comma-separated)',
        name: 'subcategories',
        type: 'checkbox',
        validation: {
            required: false,
        },
    },
    // Handling nested properties for Photo
    {
        key: 'photo',
        label: 'Photo (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
        },
    },
    {
        key: 'photo',
        label: 'Photo (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
        },
    },
    // Handling nested properties for Video
    {
        key: 'video',
        label: 'Video (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
        },
    },
    {
        key: 'video',
        label: 'Video (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
        },
    },
];


export const subcategoryFormDocument: FormFieldsFor<SubcategoryDocumentType> = [
    {
        key: 'name',
        label: 'Subcategory Name',
        name: 'name',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
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
        },
    },
    // Handling nested properties for Photo
    {
        key: 'photo',
        label: 'Photo (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
        },
    },
    {
        key: 'photo',
        label: 'Photo (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
        },
    },
    // Handling nested properties for Video
    {
        key: 'video',
        label: 'Video (Portrait)',
        name: 'portrait',
        type: 'text',
        validation: {
            required: false,
        },
    },
    {
        key: 'video',
        label: 'Video (Landscape)',
        name: 'landscape',
        type: 'text',
        validation: {
            required: false,
        },
    },
];

