import { BlogDocumentType } from "@/library/db/models/blog";
import { CaseStudyDocumentType } from "@/library/db/models/case-study";
import { PropertyDocumentType } from "@/library/db/models/property";
import { TechnicalApplicationDocumentType } from "@/library/db/models/technicalApplication";
import { FormDocumentType, FormField } from "@/library/types/form/identifiers";
import { isCaseStudyDocument, isPropertyDocument, isTechnicalApplicationDocument } from "../admin/case-study/create";

// Validation logic for BlogDocumentType fields
export function validateBlogField(
    field: FormField<BlogDocumentType>,
    value: string
) {

    const errors = {
        error: false,
        message: '',
    };

    console.log(value);
    

    const { required, regEx, minLength, maxLength, message, singleRegEx, } = field.validation;

    // check for subcategories
    if (field.key === 'subcategories') {
        // if (singleRegEx && !new RegExp(singleRegEx).test(value)) {
        //     errors.error = true;
        //     errors.message = message || `${field.label} is required.`;
        //     return errors;
        // }
        return
    } else {

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


    }

    return errors;
}
// Validation logic for BlogDocumentType fields
export function validateField(
    field: FormField<CaseStudyDocumentType>,
    value: string | number
) {

    const errors = {
        error: false,
        message: '',
    };

    const { required, regEx, minLength, maxLength, message, singleRegEx,} = field.validation;

    // check for subcategories
    if (field.key === 'subcategories') {
        // if (singleRegEx && !new RegExp(singleRegEx).test(value)) {
        //     errors.error = true;
        //     errors.message = message || `${field.label} is required.`;
        //     return errors;
        // }
        return
    } else{

        if (typeof value === "string") {
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
                console.log("here's a check");
                
                errors.error = true;
                errors.message = message || `Invalid ${field.label}.`;
                return errors;
            }

            if(singleRegEx && !new RegExp(singleRegEx).test(value)) {
                errors.error = true;
                errors.message = message || `Invalid ${field.label}.`;
                return errors;
            }            
        } else if (typeof value === "number") {
            // errors.error = true;
            // errors.message = message || `Invalid ${field.label}.`;
            // return errors;
        } 



    }

    return errors;
}


export async function handleSubmitClient(
    apiRoute:string,
    document: CaseStudyDocumentType | TechnicalApplicationDocumentType | PropertyDocumentType,
) {

    const path = `http://localhost:3000/${apiRoute}`;
    if (isCaseStudyDocument(document)) {

        const response = await fetch(path, {
            body: JSON.stringify({caseStudy:document}),
            method:"POST"
        })

        const caseStudyResponse = {
            body: await response.json(),
            status: response.status,
        }
        if (response.status == 200) {
        
            return {message:caseStudyResponse.body.message, error:false}
        } else {
            console.log(response);
        
            return {message:caseStudyResponse.body.message, error:true}
        }
        
    } else if (isTechnicalApplicationDocument(document)) {

        const response = await fetch(path, {
            body: JSON.stringify({technicalApplication:document}),
            method:"POST"
        })

        const technicalApplicationResponse = {
            body: await response.json(),
            status: response.status,
        }
        if (response.status == 200) {
        
            return {message:technicalApplicationResponse.body.message, error:false}
        } else {
            console.log(response);
        
            return {message:technicalApplicationResponse.body.message, error:true}
        }
    } else if (isPropertyDocument(document)) {

        const response = await fetch(path, {
            body: JSON.stringify({property:document}),
            method:"POST"
        })

        const propertyResponse = {
            body: await response.json(),
            status: response.status,
        }
        if (response.status == 200) {
        
            return {message:propertyResponse.body.message, error:false}
        } else {
            console.log(response);
        
            return {message:propertyResponse.body.message, error:true}
        }
    }


}