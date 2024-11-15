import { StatusObject } from "@/library/types/form/identifiers";
import { FormField } from "@/library/types/form/identifiers";
import { validateIdentifierField } from "./create-card";
import { CategoryDocumentType } from "@/app/_database/models/category";
import { SubcategoryDocumentType } from "@/app/_database/models/subcategory";

export type IdentifierDocument = Partial<CategoryDocumentType>;

export type HandleModifyCardChangeFunction = (
    category: boolean | undefined,
    field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setErrorFields: (arg0: any) => void,
    setIdentifierDocument: (arg0: any) => void,
) => void;

// handle change function for modify card
export const handleModifyCardChange:HandleModifyCardChangeFunction = (
    category,
    field,
    event,
    setErrorFields,
    setIdentifierDocument,
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

    // Define the paths for category and subcategory based on ID
    if (category) {
        // If it's a category, check for specific keys like "photo landscape", etc.
        if (["photo", "video",].includes(field.key)) {
            // Handle photo/video sub-properties

            if (["photo"].includes(field.key)) {
                setIdentifierDocument((prevState:IdentifierDocument) => ({
                    ...prevState,
                    photo: {
                        ...prevState.photo,
                        ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                    },
                }));
            } else {
                setIdentifierDocument((prevState:IdentifierDocument)=> ({
                    ...prevState,
                    video: {
                        ...prevState.video,
                        ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                    }
                }));
            }

        } else {
            // Handle other fields for CategoryDocumentType
            setIdentifierDocument((prevState:IdentifierDocument) => ({
                ...prevState,
                [name]: value
            }))
        }
    } else {
        // If it's a subcategory, check for the same keys

        if (["photo", "video",].includes(field.key)) {
            // Handle photo/video sub-properties

            if (["photo"].includes(field.key)) {
                setIdentifierDocument((prevState:IdentifierDocument) => ({
                    ...prevState,
                    photo: {
                        ...prevState.photo,
                        ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                    },
                }));
            } else {
                setIdentifierDocument((prevState:IdentifierDocument) => ({
                    ...prevState,
                    video: {
                        ...prevState.video,
                        ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                    }
                }));
            }

        } else {
            // Handle other fields for SubcategoryDocumentType
            setIdentifierDocument((prevState:IdentifierDocument) => ({
                ...prevState,
                [name]: value
            }));
        }
    }
};
