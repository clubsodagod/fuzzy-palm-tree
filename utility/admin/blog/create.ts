import { categoryFormDocument, subcategoryFormDocument } from "@/library/const/forms/identifiers";
import { CategoryDocumentType, ICategory } from "@/library/db/models/category";
import { ISubcategory, SubcategoryDocumentType } from "@/library/db/models/subcategory";
import { FormField, StatusObject } from "@/library/types/form/identifiers";
import { InitDataFunction, InitFieldsFunction } from "../identifiers/create-card";
import { BlogDocumentType } from "@/library/db/models/blog";
import { ErrorObject } from "@/library/types/common";
import { blogFormDocument } from "@/library/const/forms/blog";
import { validateBlogField } from "@/utility/functions/forms";
import { debounce } from '@/utility/functions';

const hasErrors = <T extends object>(errorFields: Partial<ErrorObject<T>>): boolean => {
    // Loop through each key in the errorFields object
    return Object.keys(errorFields).some((key) => {
        const field = errorFields[key as keyof Partial<ErrorObject<T>>];

        // Handle nested objects, like featuredImg or featuredVideo
        if (typeof field === 'object' && field !== null) {
            // Check for nested errors (e.g., portrait and landscape within featuredImg or featuredVideo)
            return Object.values(field).some((subField) => {
                if (typeof subField === 'object' && subField !== null) {
                    return Object.values(subField).some((nestedField) => (nestedField as { error: boolean }).error);
                }
                return (subField as unknown as { error: boolean }).error;
            });
        }

        // If it's a simple field, return whether the error is true
        return (field as unknown as { error: boolean }).error ;
    });
};


// Initialize eFs/Error Fields with default values
export const initBlogErrorFields: InitFieldsFunction = (setErrorFields) => {
    // Define the initial error fields document with partial types for categories and subcategories
    const initialErrorFieldsDoc: Partial<ErrorObject<BlogDocumentType>> = {};

    // Iterate over each field in the category form document
    // Initialize Error Fields with default values
    blogFormDocument.forEach((field) => {
        const key = field?.key as keyof BlogDocumentType;
        console.log(key, "keep eyes open and be aware");

        // Check for simple fields and assign default error states
        if (key === 'title' || key === 'content' || key === 'subcategories') {
            initialErrorFieldsDoc[key] = {
                error: false,  // Default error state
                message: '',   // Default message state
            };
        }
        // Check for nested photo and video fields and handle them separately
        else if (key === 'featuredImg' || key === 'featuredVideo') {
            // Initialize nested error fields for photo or video
            initialErrorFieldsDoc[key] = {
                portrait: { error: false, message: '' },  // Default error state for portrait
                landscape: { error: false, message: '' }  // Default error state for landscape
            } as unknown as StatusObject<Partial<BlogDocumentType>>[typeof key];

        }
        // Set default error state for other fields
        else {
            initialErrorFieldsDoc[key] = {
                error: false,  // Default error state
                message: '',   // Default message state
            };
        }
    });

    // Set the initialized error fields using a state setter or relevant handler
    setErrorFields(initialErrorFieldsDoc);
};


export type HandleCreateBlogChangeFunction = (
    setSubmittable:(arg0:boolean)=>void,
    field: FormField<BlogDocumentType>,
    eFs:Partial<ErrorObject<BlogDocumentType>>,
    setErrorFields: (arg0: any) => void,
    setBlogDocument: (arg0: any) => void,
    setValue: (arg0: any) => void,
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string,
) => void;

// Handle form field changes dynamically
export const handleBlogChange: HandleCreateBlogChangeFunction = (
    setSubmittable,
    field,
    eFs,
    setErrorFields,
    setBlogDocument,
    setValue,
    event,
    newValue,
) => {
    if (event) {
        const { name, value } = event?.target; // Destructuring event target
        const validationErrors = validateBlogField(field, value);

        // Handle fields like featuredImg or featuredVideo (with nested portrait/landscape properties)
        if (["featuredImg", "featuredVideo"].includes(field.key)) {
            const mediaType = field.key === "featuredImg" ? "featuredImg" : "featuredVideo";

            setErrorFields((prev: Partial<ErrorObject<BlogDocumentType>>) => ({
                ...prev,
                [mediaType]: {
                    ...(name.includes("landscape")
                        ? { landscape: validationErrors }
                        : { portrait: validationErrors })
                },
            }));

            setBlogDocument((prevState: Partial<BlogDocumentType>) => ({
                ...prevState,
                [mediaType]: {
                    ...prevState[mediaType],
                    ...(name.includes("landscape")
                        ? { landscape: value }
                        : { portrait: value }),
                },
            }));

        } else {
            // Handle other fields
            setErrorFields((prevState: Partial<ErrorObject<BlogDocumentType>>) => ({
                ...prevState,
                [name]: validationErrors,
            }));

            setBlogDocument((prevState: Partial<BlogDocumentType>) => ({
                ...prevState,
                [name]: value,
            }));
        }
    } else {
        if (newValue) {
            const validationErrors = validateBlogField(field, newValue);
            setErrorFields((prev: Partial<ErrorObject<BlogDocumentType>>) => ({
                ...prev,
                [field.name]: validationErrors,
            }));

            setBlogDocument((prevState: Partial<BlogDocumentType>) => ({
                ...prevState,
                [field.name]: newValue,
            }));

            setValue(newValue!);
        }
    }

    // After updating the error fields, check if the form has any errors
    const formHasErrors = hasErrors(eFs);
    setSubmittable(!formHasErrors);
};


// Initialize the category document with default values
export const initBlogDocument: InitFieldsFunction = (setBlogDocument) => {
    const initialCategoryDoc: Partial<BlogDocumentType> = {};

    blogFormDocument.forEach((field) => {
        const key = field?.key as keyof BlogDocumentType;

        // Assign appropriate default values based on the field type
        if (key === 'title' || key === 'content' || key === 'category') {
            initialCategoryDoc[key] = '' as BlogDocumentType[typeof key]; // String fields
        } else if (key === 'subcategories') {
            initialCategoryDoc[key] = [] as BlogDocumentType[typeof key]; // Array fields
        } else if (key === 'featuredImg') {
            initialCategoryDoc[key] = { portrait: '', landscape: '' } as BlogDocumentType[typeof key]; // Object (Photo)
        } else if (key === 'featuredVideo') {
            initialCategoryDoc[key] = { portrait: '', landscape: '' } as BlogDocumentType[typeof key]; // Object (Video)
        }
    });

    setBlogDocument(initialCategoryDoc);
};



// init categories
export const initCategoriesBlogCreate: InitDataFunction = async (setCategories) => {
    try {
        const response = await fetch('/api/blog/identifiers/category/get-all');
        const data = async () => await response.json().then((body) => {
            setCategories(body.categories);
            return body.categories;
        })
        data()
    } catch (error) {
        console.error(error);
    }
};



export type HandleSubcategoryToggleBlogCreateFunction = (
    id: string,
    article: Partial<BlogDocumentType>,
    setArticle: (arg0: any) => void,
) => void;

export const handleSubcategoryToggleBlogCreate: HandleSubcategoryToggleBlogCreateFunction = (
    id,
    article,
    setArticle,
) => {
    // setValues({...values, error: ''});
    const clickedSubcategory = article?.subcategories?.indexOf(id)!;
    const all = [...article?.subcategories!]

    if (clickedSubcategory === -1) {
        all.push(id)
    } else {
        all.splice(clickedSubcategory, 1)
    }
    setArticle((prev:Partial<BlogDocumentType>)=>({
        ...prev,
        subcategories:all,
    }))
};


export type InitSubcategoriesBlogCreateFunction = (
    id: string,
    setBlogDocument: (arg0: any) => void,
    setSubcategories: (arg0: any) => void,
    categories: ICategory[] | null,
) => void;

// init subcategories
export const initSubcategoriesBlogCreate: InitSubcategoriesBlogCreateFunction = (
    id: string,
    setBlogDocument,
    setSubcategories,
    categories
) => {
    console.log(id);
    // set categories property of article
    setBlogDocument((prevForm: Partial<BlogDocumentType>) => ({ ...prevForm, category: id }))


    // filter the selected category id
    const cat = categories?.filter((c) =>
        c._id as unknown as string == id
    )
    console.log(cat);

    // use filtered category id to get sub categories
    const sub = cat && cat[0].subcategories;
    console.log(sub);



    setSubcategories(sub as unknown as ISubcategory[]);

}