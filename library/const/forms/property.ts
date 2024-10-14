import { PropertyDocumentType } from "@/library/db/models/property";
import { FormFieldsFor } from "@/library/types/form/identifiers";

export const propertyFormDocument: FormFieldsFor<PropertyDocumentType> = [
    {
        key: 'address',
        label: 'Address',
        name: 'address',
        type: 'text',
        validation: {
            required: true,
            minLength: 5,
            message: 'Address is required with a minimum length of 5 characters',
        },
    },
    {
        key: 'investmentType',
        label: 'Investment Type',
        name: 'investmentType',
        type: 'select',
        validation: {
            required: true,
            message: 'Please select an investment type',
        },
    },
    {
        key: 'acquired',
        label: 'Acquired',
        name: 'acquired',
        type: 'select',
        validation: {
            required: false,
            message: 'Check if this property is acquired',
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
        key: 'purchasePrice',
        label: 'Purchase Price',
        name: 'purchasePrice',
        type: 'number',
        validation: {
            required: false,
            minLength: 1,
            message: 'Enter a valid purchase price',
        },
    },
    {
        key: 'rehabCost',
        label: 'Rehab Cost',
        name: 'rehabCost',
        type: 'number',
        validation: {
            required: false,
            message: 'Enter the rehabilitation cost if applicable',
        },
    },
    {
        key: 'currentValue',
        label: 'Current Value',
        name: 'currentValue',
        type: 'number',
        validation: {
            required: false,
            message: 'Enter the current value of the property',
        },
    },
    {
        key: 'monthlyFinancialFigures',
        label: 'Monthly Income',
        name: 'propertyMonthlyIncome',
        type: 'number',
        validation: {
            required: false,
            message: 'Enter the monthly income generated by the property',
        },
    },
    {
        key: 'monthlyFinancialFigures',
        label: 'Monthly Expenses',
        name: 'propertyMonthlyExpenses',
        type: 'number',
        validation: {
            required: false,
            message: 'Enter the monthly expenses for the property',
        },
    },
    {
        key: 'monthlyFinancialFigures',
        label: 'Monthly Debt Service',
        name: 'propertyMonthlyDebtServiceExpense',
        type: 'number',
        validation: {
            required: false,
            message: 'Enter the monthly debt service expense',
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
        key: 'live',
        label: 'Live',
        name: 'live',
        type: 'checkbox',
        validation: {
            required: false,
            message: 'Check if this property is currently live',
        },
    },
];