import { ContactDocumentType } from "@/library/db/models/contact";
import { FormFieldsFor } from "@/library/types/form/identifiers";

export const contactFormDocument: FormFieldsFor<ContactDocumentType> = [
    {
        key: 'firstName',
        label: 'First Name',
        name: 'firstName',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            maxLength: 100,
            message: 'Name is required and must be between 2 and 100 characters.'
        }
    },
    {
        key: 'lastName',
        label: 'Last Name',
        name: 'lastName',
        type: 'text',
        validation: {
            required: true,
            minLength: 2,
            maxLength: 100,
            message: 'Name is required and must be between 2 and 100 characters.'
        }
    },
    {
        key: 'company',
        label: 'Company',
        name: 'company',
        type: 'text',
        validation: {
            required: false,
            minLength: 2,
            maxLength: 100,
            message: 'Company must be between 2 and 100 characters.'
        }
    },
    {
        key: 'email',
        label: 'Email Address',
        name: 'email',
        type: 'text',
        validation: {
            required: true,
            regEx: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/", // Basic email validation
            message: 'A valid email address is required.'
        }
    },
    {
        key: 'phone',
        label: 'Phone Number',
        name: 'phone',
        type: 'text',
        validation: {
            required: false,
            message: 'Please provide a valid phone number.'
        }
    },
    {
        key: 'reason',
        label: 'Reason for Contact',
        name: 'reason',
        type: 'radio',
        validation: {
            required: true,
            message: 'Please select a reason for contact.'
        }
    },
    {
        key: 'message',
        label: 'Message',
        name: 'message',
        type: 'textarea',
        validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            message: 'Message is required and must be between 10 and 1000 characters.'
        }
    }
];
