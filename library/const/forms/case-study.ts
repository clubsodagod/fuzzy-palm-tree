import { CaseStudyDocumentType } from "@/library/db/models/case-study";
import { FormFieldsFor } from "@/library/types/form/identifiers";

export const caseStudyFormDocument: FormFieldsFor<CaseStudyDocumentType> = [
    {
        key: 'title',
        label: 'Title',
        name: 'title',
        type: 'text',
        validation: {
            required: true,
            minLength: 5,
            maxLength: 100,
            message: 'Title is required and must be between 5 and 100 characters.'
        }
    },
    {
        key: 'type',
        label: 'Type',
        name: 'type',
        type: 'radio',
        validation: {
            required: true,
            message: 'Please select the type of the case study.'
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
        key: 'summary',
        label: 'Summary',
        name: 'summary',
        type: 'textarea',
        validation: {
            required: true,
            minLength: 20,
            maxLength: 500,
            message: 'Summary is required and must be between 20 and 500 characters.'
        }
    },
    {
        key: 'objectives',
        label: 'Objectives',
        name: 'objectives',
        type: 'tags',
        validation: {
            required: true,
            singleRegEx: '^.{3,100}$', // Ensures each objective is between 3 and 50 characters
            regEx: '^(.{3,100})(,.{3,100})*$', // Ensures multiple objectives follow the same rule
            message: 'Each objective should be between 3 and 100 characters.'
        }
    },
    {
        key: 'challenges',
        label: 'Challenges',
        name: 'challenges',
        type: 'tags',
        validation: {
            required: true,
            singleRegEx: '^.{3,100}$', // Ensures each challenge is between 3 and 50 characters
            regEx: '^(.{3,100})(,.{3,100})*$', // Ensures multiple challenges follow the same rule
            message: 'Each challenge should be between 3 and 100 characters.'
        }
    },
    {
        key: 'solutions',
        label: 'Solutions',
        name: 'solutions',
        type: 'tags',
        validation: {
            required: true,
            singleRegEx: '^.{3,100}$', // Ensures each solution is between 3 and 50 characters
            regEx: '^(.{3,100})(,.{3,100})*$', // Ensures multiple solutions follow the same rule
            message: 'Each solution should be between 3 and 100 characters.'
        }
    },
    {
        key: 'outcomes',
        label: 'Outcome Description',
        name: 'outcomesDescription',
        type: 'textarea',
        validation: {
            required: true,
            minLength: 20,
            maxLength: 500,
            message: 'Outcome description is required and should be between 20 and 500 characters.'
        }
    },
    {
        key: 'outcomes',
        label: 'Value Generated (for Property)',
        name: 'outcomesValueGenerated',
        type: 'number',
        validation: {
            required: false,
            message: 'Please enter the value generated in case of a property.'
        }
    },
    {
        key: 'outcomes',
        label: 'Technical Impact (for TechnicalApplication)',
        name: 'outcomesTechnicalImpact',
        type: 'textarea',
        validation: {
            required: false,
            minLength: 20,
            maxLength: 500,
            message: 'Please describe the technical impact in case of a technical application.'
        }
    }
];
