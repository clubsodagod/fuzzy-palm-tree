import { CategoryDocumentType, ICategory } from "@/library/db/models/category";
import { ISubcategory, SubcategoryDocumentType } from "@/library/db/models/subcategory";

export type IsCategoryFunction = (identifier: ICategory | ISubcategory) => boolean

export type CategorySubcategoriesType = {
    noninclusive:ISubcategory[];
    inclusive:ISubcategory[];
    all:ISubcategory[];
}

export type HandleInclusiveSubcategoriesFunction = (
    newSubcategories:CategorySubcategoriesType|Partial<CategorySubcategoriesType>, 
    category:ICategory,
    setSubcategories:(arg0:any)=>void,
) => void;

// HandleClickFunction
export type HandleClickFunction = (identifier:ICategory|ISubcategory, setClicked:(arg0:boolean)=>void, clicked:boolean) => void;

// Type guard function to check if identifier is ICategory
export const isCategory:IsCategoryFunction = (identifier): identifier is ICategory => {
    return 'subcategories' in identifier;
}

// Function to filter and set the inclusive subcategories
export const handleInclusiveSubcategories:HandleInclusiveSubcategoriesFunction = (
    newSubcategories,
    category,
    setSubcategories,
) => {
    if (!category.subcategories || newSubcategories.all?.length === 0) return;

    // Filter subcategories that are included in category.subcategories
    const inclusive = newSubcategories.all?.filter((subcategory) =>
        category.subcategories.some((subId) => subId.toString() === subcategory._id) // Match ObjectIds
    );

    // Filter subcategories that are NOT included in category.subcategories
    const noninclusive = newSubcategories.all?.filter((subcategory) =>
        !category.subcategories.some((subId) => subId.toString() === subcategory._id) // Match ObjectIds
    );

    // Set the filtered inclusive and noninclusive subcategories to state
    setSubcategories((prevForm:Partial<CategorySubcategoriesType>)=>({...prevForm, inclusive}));
    setSubcategories((prevForm:Partial<CategorySubcategoriesType>)=>({...prevForm, noninclusive}));
};

// open card to more details
export const handleClick:HandleClickFunction = (identifier, setClicked,clicked) => {
    if (isCategory(identifier)) {
        // Logic for ICategory
        console.log('Handling category:', identifier);
        setTimeout(()=>{
            setClicked(!clicked);
        },200)
    } else {
        // Logic for ISubcategory
        console.log('Handling subcategory:', identifier);
        setTimeout(()=>{
            setClicked(!clicked);
        },200)
    }
}

export type HandleSubmitFunction = (identifier:ICategory|ISubcategory, identifierDocument:Partial<CategoryDocumentType>|Partial<SubcategoryDocumentType>|null) => Promise<void>


// handle submission of identifier update document
export const handleSubmit:HandleSubmitFunction = async(identifier, identifierDocument,) => {
    try {
        // Check if the identifierDocument is valid before submission (optional)
        if (!identifierDocument) {
            console.error('No identifier document to update.');
            return;
        }

        // If the identifier is a category, proceed with the API call
        if (isCategory(identifier)) {
            const response = await fetch(`/api/blog/identifiers/category/update/${identifier.slug}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ category: identifierDocument }) // Stringify the identifierDocument
            });

            // Check if the response is successful
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating category:', errorData.message);
                return;
            }

            // Handle successful update
            const data = await response.json();
            console.log('Category updated successfully:', data);
        } else if (!isCategory(identifier)) {
            const response = await fetch(`/api/blog/identifiers/subcategory/update/${identifier.slug}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ subcategory: identifierDocument }) // Stringify the identifierDocument
            });

            // Check if the response is successful
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating subcategory:', errorData.message);
                return;
            }

            // Handle successful update
            const data = await response.json();
            console.log('Subcategory updated successfully:', data);
        } else {
            console.error('Identifier is not a category or subcategory.');
        }
        
    } catch (error) {
        // Catch and log any errors that occur during submission
        console.error('Error during submission:', error);
    }
};

export type HandlePopulateFieldsFunction = (setIdentifierDocument:(arg0:any)=>void,identifier:ISubcategory|ICategory) => void;

// Function to map and populate fields in state
export const handlePopulateFields:HandlePopulateFieldsFunction = async (setIdentifierDocument,identifier) => {
    try {
        // Map through properties of the document and update the state
        setIdentifierDocument((prevState:Partial<ICategory|ISubcategory>) => ({
            ...prevState,
            _id: identifier._id,
            name: identifier.name,
            slug: identifier.slug,
            tagline: identifier.tagline,
            description: identifier.description,
            photo: identifier.photo,
            video: identifier.video,
        }));
    } catch (error) {
        console.error('Error fetching document:', error);
    }
};

// handle add and remove sub category type
export type HandleManageSubcategoryFunction = (subcategoryId:string, setIdentifierDocument:(arg0:any)=>void,category?:Partial<ICategory>) => void;

// Add a new subcategory ObjectId to the array
export const handleAddSubcategory:HandleManageSubcategoryFunction = (subcategoryId,setIdentifierDocument,identifierDocument) => {
    
    const handleAPI = async()=> {
        await fetch(`/api/blog/identifiers/category/update/${identifierDocument?.slug}/subcategories/add`, {
            method:"PUT",
            body:JSON.stringify({
                categoryId:identifierDocument?._id,
                subcategoryId:subcategoryId,
            })
        })
    }

    handleAPI()
};

// Remove a subcategory ObjectId from the array
export const handleRemoveSubcategory:HandleManageSubcategoryFunction = (subcategoryId,setIdentifierDocument,identifierDocument) => {
    
    const handleAPI = async()=> {
        await fetch(`/api/blog/identifiers/category/update/${identifierDocument?.slug}/subcategories/remove`, {
            method:"PUT",
            body:JSON.stringify({
                categoryId:identifierDocument?._id,
                subcategoryId:subcategoryId,
            })
        })
    }

    handleAPI()
};
