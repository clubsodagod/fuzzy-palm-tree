import { BlogDocumentType } from "@/library/db/models/blog";
import { FormField } from "@/library/types/form/identifiers";

// Validation logic for BlogDocumentType fields
export function validateBlogField(
    field: FormField<BlogDocumentType>,
    value: string
) {

    const errors = {
        error: false,
        message: '',
    };

    const { required, regEx, minLength, maxLength, message } = field.validation;

    // Check for required fields
    if (required && !value.trim()) {
        errors.error = true;
        errors.message = message || `${field.label} is required.`;
        return errors;
    }

    // Check for minimum length
    if (minLength && value.length < minLength) {
        errors.error = true;
        errors.message = message || `${field.label} must be at least ${minLength} characters long.`;
        return errors;
    }

    // Check for maximum length
    if (maxLength && value.length > maxLength) {
        errors.error = true;
        errors.message = message || `${field.label} must be less than ${maxLength} characters long.`;
        return errors;
    }

    // Check for regex pattern
    if (regEx && !new RegExp(regEx).test(value)) {
        errors.error = true;
        errors.message = message || `Invalid ${field.label}.`;
        return errors;
    }

    return errors;
}
