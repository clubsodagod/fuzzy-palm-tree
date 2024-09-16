import { BlogDocumentType } from "@/library/db/models/blog";

// Validation logic for BlogDocumentType fields
export function validateField<T extends keyof BlogDocumentType>(name: T, value: BlogDocumentType[T]) {
    let isValid = true;
    let errorMessage = null;

    switch (name) {
        case 'title':
        // Title should not be empty and should have at least 3 characters
        if (!value || (typeof value === 'string' && value.trim().length < 3)) {
            isValid = false;
            errorMessage = 'Title must be at least 3 characters long.';
        }
        break;

        case 'content':
        // Content should not be empty
        if (!value || (typeof value === 'string' && value.trim().length < 200)) {
            isValid = false;
            errorMessage = 'Content must be at least 200 characters long.';
        }
        break;

        case 'categories':
        case 'subcategories':
        // Categories and subcategories must have at least one selected item
        if (Array.isArray(value) && value.length === 0) {
            isValid = false;
            errorMessage = `${name} must have at least one item.`;
        }
        break;

        case 'featuredImg':
        // featuredImg must be provided
        if (!value) {
            isValid = false;
            errorMessage = 'Featured image is required.';
        }
        break;

      // You can add more validation rules for other fields if needed
        default:
            isValid = true;
            errorMessage = null;
        }

    return { isValid, errorMessage };
}
