import { blogFormDocument } from "@/library/const/forms/blog";
import { CaseStudyDocumentType } from "@/library/db/models/case-study";
import { caseStudyFormDocument } from "@/library/const/forms/case-study";
import { InitFieldsFunction } from "../identifiers/create-card";
import { FormField } from "@/library/types/form/identifiers";
import { validateField } from "@/utility/functions/forms";
import { ErrorObject } from "@/library/types/common";


// Initialize the category document with default values
export const initCaseStudyDocument: InitFieldsFunction = (setCaseStudyDocument) => {
    const initialCaseStudyDoc: Partial<CaseStudyDocumentType> = {};

    // const 

    caseStudyFormDocument.forEach((field) => {
        const key = field?.key as keyof CaseStudyDocumentType;

        // Assign appropriate default values based on the field type
        if (key == "title" || key == "summary" ) {
            initialCaseStudyDoc[key] = '' as CaseStudyDocumentType[typeof key]; // String fields
        } else if (key === 'objectives' || key === 'challenges' || key == "solutions") {
            initialCaseStudyDoc[key] = [] as CaseStudyDocumentType[typeof key]; // Array fields
        } else if (key === 'featuredImg') {
            initialCaseStudyDoc[key] = { portrait: '', landscape: '' } as CaseStudyDocumentType[typeof key]; // Object (Photo)
        } else if (key === 'featuredVideo') {
            initialCaseStudyDoc[key] = { portrait: '', landscape: '' } as CaseStudyDocumentType[typeof key]; // Object (Video)
        } else if (key === 'outcomes') {
            initialCaseStudyDoc[key] = { description:'', valueGenerated:0, technicalImpact:'' } as CaseStudyDocumentType[typeof key];
        } else if (key === 'type') {
            initialCaseStudyDoc[key] = ""
        }
    });

    setCaseStudyDocument(initialCaseStudyDoc);
};

// handle case study form changes
export 
function handleCaseStudyChanges(
    field: FormField<CaseStudyDocumentType>,
    event: any,
    addValue: string|null,
    eFs:Partial<ErrorObject<CaseStudyDocumentType>>,
    setErrorFields: (arg0: any) => void,
    caseStudyDocument: Partial<CaseStudyDocumentType>,
    setCaseStudyDocument: (arg0: any) => void,
    choice:string|null,
) {

    let validationErrors: any;

    if (event) {

        // Destructuring event target
        const { name, value } = event.target;
        validationErrors = validateField(field, value);

        // Handle fields like featuredImg or featuredVideo (with nested portrait/landscape properties)
        if (["featuredImg", "featuredVideo"].includes(field.key)) {
            const mediaType = field.key === "featuredImg" ? "featuredImg" : "featuredVideo";

            // handle error fields
            setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                ...prev,
                [mediaType]: {
                    ...(name.includes("landscape")
                        ? { landscape: validationErrors }
                        : { portrait: validationErrors }),
                },
            }));

            // handle case study document
            setCaseStudyDocument((prevState: CaseStudyDocumentType) => {
                const updatedState = {
                    ...prevState,
                    [mediaType]: {
                        ...prevState[mediaType],
                        ...(name.includes("landscape")
                            ? { landscape: value }
                            : { portrait: value }),
                    },
                };
                return updatedState;
            });

        }

        // Handle fields like featuredImg or featuredVideo (with nested portrait/landscape properties)
        else if (["outcomes"].includes(field.key)) {
            const outcomeType = field.name === "outcomesDescription" ? "outcomesDescription" : field.name == "outcomesTechnicalImpact" ? "outcomesTechnicalImpact" : "outcomesValueGenerated";

            if (["outcomesDescription", 'outcomesTechnicalImpact'].includes(field.name)) {
                console.log(value);
                
                // handle error fields
                setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                    ...prev,
                    ["outcomes"]: {
                        ...prev.outcomes,
                        ...(name.includes("outcomesDescription")
                            ? { description: validationErrors }
                            : { technicalImpact: validationErrors }),
                    },
                }));

                // handle case study document
                setCaseStudyDocument((prevState: CaseStudyDocumentType) => {
                    const updatedState = {
                        ...prevState,
                        [field.key]: {
                            ...prevState['outcomes'],
                            ...(name.includes("outcomesDescription")
                                ? { description: value }
                                : { technicalImpact: value }),
                        },
                    };
                    return updatedState;
                });

            } else if (["outcomesValueGenerated"].includes(field.name)) {
 
                // handle error fields
                setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                    ...prev,
                    [field.key]: {
                        ...prev.outcomes,
                        outcomesGeneratedValue:validationErrors,
                    },
                }));

                // handle case study document
                setCaseStudyDocument((prevState: CaseStudyDocumentType) => {
                    const updatedState = {
                        ...prevState,
                        [field.key]: {
                            ...prevState.outcomes,
                            valueGenerated: value
                        },
                    };
                    return updatedState;
                });

            }


        }

        // handle objectives, challenges, and solutions
        else if (["objectives", "challenges", "solutions"].includes(field.key)) {
            if (addValue && caseStudyDocument) {
                validationErrors = validateField(field, addValue);
                // Handle other fields
                setErrorFields((prevState: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                    ...prevState,
                    [field.key]: validationErrors,
                }));

                const valueIndex = caseStudyDocument[field.key as keyof CaseStudyDocumentType]?.indexOf(addValue);

                // Create a copy of the existing array to modify it
                const updatedArray = [...(caseStudyDocument[field.key as keyof CaseStudyDocumentType] as string[])];

                // If the value is not found, add it to the array
                if (valueIndex === -1) {
                    updatedArray.push(addValue);
                }
                // If the value is found, remove it from the array (toggle functionality)
                else {
                    updatedArray.splice(valueIndex, 1);
                }

                // Update the state with the modified array
                setCaseStudyDocument((prev: CaseStudyDocumentType) => ({
                    ...prev,
                    [field.key]: updatedArray,
                }));
            } else {

            }


        }

        // handle case study type change
        else if (["radio"].includes(field.type)) {

            if (choice) {

                validationErrors = validateField(field, choice);
                // handle error fields
                setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                    ...prev,
                    [field.key]: validationErrors
                }));

                

                // handle case study document
                setCaseStudyDocument((prevState: CaseStudyDocumentType) => {
                    const updatedState = {
                        ...prevState,
                        [field.key]: choice
                    };
                    return updatedState;
                });               
            }


        }

        // handle title text change
        else if (["title"].includes(field.key)) {

            validationErrors = validateField(field, value);
            // handle error fields
            setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                ...prev,
                [field.key]: validationErrors
            }));

            

            // handle case study document
            setCaseStudyDocument((prevState: CaseStudyDocumentType) => {
                const updatedState = {
                    ...prevState,
                    [field.key]: value
                };
                return updatedState;
            });  
        }
    } else {
    }


}