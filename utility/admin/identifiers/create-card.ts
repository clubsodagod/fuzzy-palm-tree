import { categoryFormDocument, subcategoryFormDocument } from "@/library/const/forms/identifiers";
import { CategoryDocumentType } from "@/library/db/models/category";
import { SubcategoryDocumentType } from "@/library/db/models/subcategory";
import { FormField, StatusObject } from "@/library/types/form/identifiers";


export type InitFieldsFunction = (setFields: (arg0: any) => void, setFields2?: (arg0: any) => void,) => void;
export type InitDataFunction = (setFields: (arg0: any) => void) => Promise<void>;
// Initialize eFs/Error Fields with default values
export const initErrorFields: InitFieldsFunction = (setErrorFields) => {
    // Define the initial error fields document with partial types for categories and subcategories
    const initialErrorFieldsDoc: Partial<{
        category: StatusObject<Partial<CategoryDocumentType>>;
        subcategory: StatusObject<Partial<SubcategoryDocumentType>>;
    }> = {
        category: {},
        subcategory: {}
    };

    // Iterate over each field in the category form document
    // Initialize Error Fields with default values
    categoryFormDocument.forEach((field) => {
        const key = field?.key as keyof CategoryDocumentType;
        console.log(key, "keep eyes open and be aware");

        // Check for simple fields and assign default error states
        if (key === 'name' || key === 'tagline' || key === 'description' || key === 'subcategories') {
            initialErrorFieldsDoc.category![key] = {
                error: false,  // Default error state
                message: '',   // Default message state
            };
        }
        // Check for nested photo and video fields and handle them separately
        else if (key === 'photo' || key === 'video') {
            // Initialize nested error fields for photo or video
            initialErrorFieldsDoc.category![key] = {
                portrait: { error: false, message: '' },  // Default error state for portrait
                landscape: { error: false, message: '' }  // Default error state for landscape
            } as unknown as StatusObject<Partial<CategoryDocumentType>>[typeof key];

        }
        // Set default error state for other fields
        else {
            initialErrorFieldsDoc.category![key] = {
                error: false,  // Default error state
                message: '',   // Default message state
            };
        }
    });


    // If needed, iterate over subcategoryFormDocument and add initialization for subcategory errors
    subcategoryFormDocument.forEach((field) => {
        const key = field?.key as keyof SubcategoryDocumentType;

        // Check for simple fields and assign default error states
        if (key === 'name' || key === 'tagline' || key === 'description') {
            initialErrorFieldsDoc.subcategory![key] = {
                error: false,  // Default error state
                message: '',   // Default message state
            };
        }
        // Check for nested photo and video fields and handle them separately
        else if (key === 'photo' || key === 'video') {
            // Initialize nested error fields for photo or video
            initialErrorFieldsDoc.subcategory![key] = {
                portrait: { error: false, message: '' },  // Default error state for portrait
                landscape: { error: false, message: '' }  // Default error state for landscape
            } as unknown as StatusObject<Partial<SubcategoryDocumentType>>[typeof key];


        }
        // Set default error state for other fields
        else {
            initialErrorFieldsDoc.subcategory![key] = {
                error: false,  // Default error state
                message: '',   // Default message state
            };
        }
    });

    // Set the initialized error fields using a state setter or relevant handler
    setErrorFields(initialErrorFieldsDoc);
};


// Initialize the category document with default values
export const initCategoryDocument: InitFieldsFunction = (setCategoryDocument) => {
    const initialCategoryDoc: Partial<CategoryDocumentType> = {};

    categoryFormDocument.forEach((field) => {
        const key = field?.key as keyof CategoryDocumentType;

        // Assign appropriate default values based on the field type
        if (key === 'name' || key === 'tagline' || key === 'description') {
            initialCategoryDoc[key] = '' as CategoryDocumentType[typeof key]; // String fields
        } else if (key === 'subcategories') {
            initialCategoryDoc[key] = [] as CategoryDocumentType[typeof key]; // Array fields
        } else if (key === 'photo') {
            initialCategoryDoc[key] = { portrait: '', landscape: '' } as CategoryDocumentType[typeof key]; // Object (Photo)
        } else if (key === 'video') {
            initialCategoryDoc[key] = { portrait: '', landscape: '' } as CategoryDocumentType[typeof key]; // Object (Video)
        }
    });

    setCategoryDocument(initialCategoryDoc);
};

// Initialize the subcategory document with default values
export const initSubcategoryDocument: InitFieldsFunction = (setSubcategoryDocument) => {
    const initialSubcategoryDoc: Partial<SubcategoryDocumentType> = {};

    subcategoryFormDocument.forEach((field) => {
        const key = field?.key as keyof SubcategoryDocumentType;

        // Assign appropriate default values based on the field type
        if (key === 'name' || key === 'tagline' || key === 'description') {
            initialSubcategoryDoc[key] = '' as SubcategoryDocumentType[typeof key]; // String fields
        } else if (key === 'photo') {
            initialSubcategoryDoc[key] = { portrait: '', landscape: '' } as SubcategoryDocumentType[typeof key]; // Object (Photo)
        } else if (key === 'video') {
            initialSubcategoryDoc[key] = { portrait: '', landscape: '' } as SubcategoryDocumentType[typeof key]; // Object (Video)
        }
    });

    setSubcategoryDocument(initialSubcategoryDoc);
};

// Validation function to check input based on validation rules of FormField
export const validateIdentifierField = (
    field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
    value: string
) => {
    const errors = {
        error: false,
        message: '',
    };

    const { required, regEx, minLength, maxLength, message } = field.validation;
    if (field.key === "description") {
        console.log(field.validation);

    }
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
};

// initialize subcategories
export const initIdentifiers: InitDataFunction = async (setSubcategories) => {
    const response = await fetch('/api/blog/identifiers/subcategory/get-all', {
        method: "GET",
    });
    const subcategoriesData = await response.json()
    if (subcategoriesData.subcategories) {
        setSubcategories(subcategoriesData.subcategories);
    }
    return
}


export type StatusResponseObject = {
    category: { error: boolean | null, message: string };
    subcategory: { error: boolean | null, message: string };
}

export type HandleIdentifiersSubmitCreateCard = (
    category: boolean | undefined,
    cD: Partial<CategoryDocumentType>,
    sD: Partial<SubcategoryDocumentType>,
    setErrorResponseMessage: (arg0: any) => void,
    setCategoryDocument: (arg0: any) => void,
    setSubcategoryDocument: (arg0: any) => void,
    setSubcategories: (arg0: any) => void,
    initData: InitDataFunction,
) => Promise<void>

// handle submit
export const handleCreateCardSubmit: HandleIdentifiersSubmitCreateCard = async (
    category,
    cD,
    sD,
    setErrorResponseMessage,
    setCategoryDocument,
    setSubcategoryDocument,
    setSubcategories,
    initData
) => {

    let response
    // check if category or subcategory document
    if (category) {

        // send fetch request to api
        response = await fetch("/api/blog/identifiers/category/create", {
            body: JSON.stringify({ category: cD }),
            method: "POST",
        });
        // check response status
        if (response.ok) {
            const data = await response.json()
            initData(setSubcategories);
            setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, category: { error: false, message: data.message } }));
            setTimeout(() => {
                setCategoryDocument({});
                initCategoryDocument(setCategoryDocument);
                setTimeout(() => {
                    setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, category: { error: null, message: "" } }));
                }, 2000)
            }, 500)
            return
        } else {
            const data = await response.json()
            console.log(data);
            setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, category: { error: true, message: data.message } }));
            setTimeout(() => {
                setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, category: { error: null, message: "" } }));
            }, 3000)
            return
        }
    } else {

        // send fetch request to api
        response = await fetch("/api/blog/identifiers/subcategory/create", {
            body: JSON.stringify({ subcategory: sD }),
            method: "POST"
        });
        // check response status
        if (response.ok) {
            const data = await response.json()
            initData(setSubcategories);
            setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, subcategory: { error: false, message: data.message } }));
            setTimeout(() => {
                setCategoryDocument({});
                initSubcategoryDocument(setSubcategoryDocument);
                setTimeout(() => {
                    setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, subcategory: { error: null, message: "" } }));
                }, 2000)
            }, 500)
            return
        } else {
            const data = await response.json()

            setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, subcategory: { error: true, message: data.message } }));
            setTimeout(() => {
                setErrorResponseMessage((prev: Partial<StatusResponseObject>) => ({ ...prev, subcategory: { error: null, message: "" } }));
            }, 3000)
            return
        }
    }


}


export type HandleCreateCardChangeFunction = (
    category: boolean | undefined,
    field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setErrorFields: (arg0: any) => void,
    setCategoryDocument: (arg0: any) => void,
    setSubcategoryDocument: (arg0: any) => void,
) => void;

// handleChange function for create card
export const handleCreateCardChange: HandleCreateCardChangeFunction = (
    category,
    field,
    event,
    setErrorFields,
    setCategoryDocument,
    setSubcategoryDocument,
) => {
    const { name, value } = event.target; // Destructuring event target
    const validationErrors = validateIdentifierField(field, value); // Validate the field value

    // Set the error state based on validation results
    if (category) {
        if (["photo", "video"].includes(field.key)) {
            const mediaType = field.key === "photo" ? "photo" : "video";
            setErrorFields((prev: Partial<{
                category: StatusObject<Partial<CategoryDocumentType>>,
                subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
            }>) => ({
                ...prev,
                category: {
                    ...(prev.category ?? {}), // Use an empty object if category is undefined
                    [mediaType]: {
                        ...((prev.category?.[mediaType] ?? {}) as Partial<CategoryDocumentType>), // Handle mediaType safely
                        ...(name.includes("landscape") ? { landscape: validationErrors } : { portrait: validationErrors })
                    },
                },
            }));
        } else {
            // Handle other fields
            setErrorFields((prevState: Partial<{
                category: StatusObject<Partial<CategoryDocumentType>>,
                subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
            }>) => ({
                ...prevState,
                category: {
                    ...prevState.category,
                    [name]: validationErrors,
                }

            }));
        }

    } else {
        if (["photo", "video"].includes(field.key)) {
            const mediaType = field.key === "photo" ? "photo" : "video";
            setErrorFields((prev: Partial<{
                category: StatusObject<Partial<CategoryDocumentType>>,
                subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
            }>) => ({
                ...prev,
                subcategory: {
                    ...(prev.subcategory ?? {}), // Use an empty object if category is undefined
                    [mediaType]: {
                        ...((prev.subcategory?.[mediaType] ?? {}) as Partial<SubcategoryDocumentType>), // Handle mediaType safely
                        ...(name.includes("landscape") ? { landscape: validationErrors } : { portrait: validationErrors })
                    },
                },
            }));
        } else {
            // Handle other fields
            setErrorFields((prevState: Partial<{
                category: StatusObject<Partial<CategoryDocumentType>>,
                subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
            }>) => ({
                ...prevState,
                subcategory: {
                    ...prevState.subcategory,
                    [name]: validationErrors,
                }

            }));
        }
    }

    // Handle Category form changes
    if (category) {
        if (["photo", "video"].includes(field.key)) {
            // Handle nested properties
            const mediaType = field.key === "photo" ? "photo" : "video";

            setCategoryDocument((prevState: Partial<CategoryDocumentType>) => ({
                ...prevState,
                [mediaType]: {
                    ...prevState[mediaType],
                    ...(name.includes("landscape") ? { landscape: value } : { portrait: value }),
                },
            }));
        } else {
            // Handle other fields
            setCategoryDocument((prevState: Partial<CategoryDocumentType>) => ({
                ...prevState,
                [name]: value,
            }));
        }
    } else {
        // Handle Subcategory form changes
        if (["photo", "video"].includes(field.key)) {
            const mediaType = field.key === "photo" ? "photo" : "video";

            setSubcategoryDocument((prevState: Partial<SubcategoryDocumentType>) => ({
                ...prevState,
                [mediaType]: {
                    ...prevState[mediaType],
                    ...(name.includes("landscape") ? { landscape: value } : { portrait: value }),
                },
            }));
        } else {
            // Handle other fields
            setSubcategoryDocument((prevState: Partial<SubcategoryDocumentType>) => ({
                ...prevState,
                [name]: value,
            }));
        }
    }
};



export type HandleSubcategoryToggleFunction = (
    value: string,
    setDocumentReactDispatchFunction: (arg0: any) => void,
    cD: Partial<CategoryDocumentType>,
) => void;

// handle subcategory toggle
export const handleSubcategoryToggle: HandleSubcategoryToggleFunction = (value: string, setCategoryDocument, cD) => {
    const clickedSubcategory = cD?.subcategories?.indexOf(value)
    if (cD?.subcategories) {
        const all = [...cD.subcategories]

        if (clickedSubcategory === -1) {
            all.push(value)
        } else {
            all.splice(clickedSubcategory!, 1)
        }
        console.log(all);
        setCategoryDocument((pF: any) => ({
            ...pF,
            subcategories: all
        }))
    }
};