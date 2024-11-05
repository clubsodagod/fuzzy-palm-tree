import { blogFormDocument } from "@/library/const/forms/blog";
import { CaseStudyDocumentType } from "@/library/db/models/case-study";
import { caseStudyFormDocument } from "@/library/const/forms/case-study";
import { InitFieldsFunction } from "../identifiers/create-card";
import { FormDocumentType, FormDocumentTypeV2, FormField } from "@/library/types/form/identifiers";
import { validateField } from "@/utility/functions/forms";
import { ErrorObject } from "@/library/types/common";
import { PortfolioDocumentType } from "@/library/db/models/portfolio";
import { PropertyDocumentType } from "@/library/db/models/property";
import { TechnicalApplicationDocumentType } from "@/library/db/models/technicalApplication";


// Initialize the category document with default values
export const initCaseStudyDocument: InitFieldsFunction = (setCaseStudyDocument) => {
    const initialCaseStudyDoc: Partial<CaseStudyDocumentType> = {};

    // const 

    caseStudyFormDocument.forEach((field) => {
        const key = field?.key as keyof CaseStudyDocumentType;

        // Assign appropriate default values based on the field type
        if (key == "title" || key == "summary") {
            initialCaseStudyDoc[key] = '' as CaseStudyDocumentType[typeof key]; // String fields
        } else if (key === 'objectives' || key === 'challenges' || key == "solutions") {
            initialCaseStudyDoc[key] = [] as CaseStudyDocumentType[typeof key]; // Array fields
        } else if (key === 'featuredImg') {
            initialCaseStudyDoc[key] = { portrait: '', landscape: '' } as CaseStudyDocumentType[typeof key]; // Object (Photo)
        } else if (key === 'featuredVideo') {
            initialCaseStudyDoc[key] = { portrait: '', landscape: '' } as CaseStudyDocumentType[typeof key]; // Object (Video)
        } else if (key === 'outcomes') {
            initialCaseStudyDoc[key] = { description: '', valueGenerated: 0, technicalImpact: '' } as CaseStudyDocumentType[typeof key];
        } else if (key === 'type') {
            initialCaseStudyDoc[key] = ""
        }
    });

    setCaseStudyDocument(initialCaseStudyDoc);
};
// Define type guards for narrowing down specific document types
export function isCaseStudyDocument(doc: Partial<FormDocumentType>): doc is Partial<CaseStudyDocumentType> {
    return (doc as CaseStudyDocumentType).outcomes !== undefined;
}

export function isPropertyDocument(doc: Partial<FormDocumentType>): doc is Partial<PropertyDocumentType> {
    return (doc as PropertyDocumentType).investmentType !== undefined;
}

export function isPortfolioDocument(doc: Partial<FormDocumentType>): doc is Partial<PortfolioDocumentType> {
    return (doc as PortfolioDocumentType).sections !== undefined;
}

export function isTechnicalApplicationDocument(doc: Partial<FormDocumentType>): doc is Partial<TechnicalApplicationDocumentType> {
    return (doc as TechnicalApplicationDocumentType).technologiesUsed !== undefined;
}



export function handleChanges<T extends FormDocumentTypeV2>(
    field: FormField<T["document"]>,
    event: any,
    addValue: string | null,
    eFs: Partial<ErrorObject<T["document"]>>,
    setErrorFields: (arg0: any) => void,
    formDocument: T,
    setDocument: (arg0: any) => void,
    choice: string | boolean | null,
) {
    const { document, type } = formDocument;

    let validationErrors: any;

    if (event) {
        const { name, value } = event.target;
        validationErrors = validateField(field, value);

        switch (type) {
            case "caseStudy":
                validationErrors = validateField(field, value);
                // Handle case study specific fields
                if (["featuredImg", "featuredVideo"].includes(field.key as string)) {
                    const mediaType = field.key as "featuredImg" | "featuredVideo";

                    setErrorFields((prev: Partial<ErrorObject<T["document"]>>) => ({
                        ...prev,
                        [mediaType]: {
                            ...(name.includes("landscape")
                                ? { landscape: validationErrors }
                                : { portrait: validationErrors }),
                        },
                    }));

                    setDocument((prevState: CaseStudyDocumentType) => ({
                        ...prevState,
                        [mediaType]: {
                            ...prevState[mediaType],
                            ...(name.includes("landscape")
                                ? { landscape: value }
                                : { portrait: value }),
                        },
                    }));
                }

                // Handle outcomes fields object
                else if (["outcomes"].includes(field.key as string)) {
                    const outcomeType = field.name === "outcomesDescription" ? "outcomesDescription" : field.name == "outcomesTechnicalImpact" ? "outcomesTechnicalImpact" : "outcomesValueGenerated";

                    if (["outcomesDescription", 'outcomesTechnicalImpact'].includes(field.name as string)) {

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
                        setDocument((prevState: CaseStudyDocumentType) => {
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

                    }

                    else if (["outcomesValueGenerated"].includes(field.name as string)) {

                        // handle error fields
                        setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                            ...prev,
                            [field.key]: {
                                ...prev.outcomes,
                                outcomesGeneratedValue: validationErrors,
                            },
                        }));

                        // handle case study document
                        setDocument((prevState: CaseStudyDocumentType) => {
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
                else if (["objectives", "challenges", "solutions"].includes(field.key as string)) {
                    if (addValue && document) {
                        validationErrors = validateField(field, addValue);
                        // Handle other fields
                        setErrorFields((prevState: Partial<ErrorObject<T["document"]>>) => ({
                            ...prevState,
                            [field.key]: validationErrors,
                        }));


                        const fieldValue = document[field.key as keyof CaseStudyDocumentType];

                        // validate fieldValue is an array
                        if (Array.isArray(fieldValue)) {

                            // Create a copy of the existing array to modify it
                            const updatedArray = [...fieldValue];

                            // find the index of the value to toggle
                            const valueIndex = updatedArray.indexOf(addValue);

                            // If the value is not found, add it to the array
                            if (valueIndex === -1) {
                                updatedArray.push(addValue);
                            }
                            // If the value is found, remove it from the array (toggle functionality)
                            else {
                                updatedArray.splice(valueIndex, 1);
                            }

                            // Update the state with the modified array
                            setDocument((prev: CaseStudyDocumentType) => ({
                                ...prev,
                                [field.key]: updatedArray,
                            }));
                        }

                    } else {

                    }


                }

                // handle radio change
                else if (["radio"].includes(field.type)) {

                    if (choice) {

                        validationErrors = validateField(field, choice as string);
                        // handle error fields
                        setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                            ...prev,
                            [field.key]: validationErrors
                        }));



                        // handle case study document
                        setDocument((prevState: CaseStudyDocumentType) => {
                            const updatedState = {
                                ...prevState,
                                [field.key]: choice
                            };
                            return updatedState;
                        });
                    }


                }

                // handle title text change
                else if (["title", "summary"].includes(field.key as string)) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                        ...prev,
                        [field.key]: validationErrors
                    }));



                    // handle case study document
                    setDocument((prevState: CaseStudyDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: value
                        };
                        return updatedState;
                    });
                }
                break;

            case "technicalApplication":
                // handle objectives, challenges, and solutions
                if (["photos", "videos", "technologiesUsed"].includes(field.key as string)) {
                    console.log(addValue, document);

                    if (addValue && document) {
                        validationErrors = validateField(field, addValue);
                        // Handle other fields
                        setErrorFields((prevState: Partial<ErrorObject<T["document"]>>) => ({
                            ...prevState,
                            [field.key]: validationErrors,
                        }));

                        const fieldValue = document[field.key as keyof TechnicalApplicationDocumentType];



                        // validate fieldValue is an array
                        if (Array.isArray(fieldValue)) {
                            // Create a copy of the existing array to modify it
                            const updatedArray = [...fieldValue];

                            const valueIndex = updatedArray.indexOf(addValue);


                            // If the value is not found, add it to the array
                            if (valueIndex === -1) {
                                updatedArray.push(addValue);
                            }
                            // If the value is found, remove it from the array (toggle functionality)
                            else {
                                updatedArray.splice(valueIndex, 1);
                            }

                            // Update the state with the modified array
                            setDocument((prev: TechnicalApplicationDocumentType) => ({
                                ...prev,
                                [field.key]: updatedArray,
                            }));
                        }

                    } else {

                    }


                }

                // handle name, description, and link text change
                else if (["description", "link", "name", "githubLink"].includes(field.key as string)) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<TechnicalApplicationDocumentType>>) => ({
                        ...prev,
                        [field.key]: validationErrors
                    }));



                    // handle case study document
                    setDocument((prevState: TechnicalApplicationDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: value
                        };
                        return updatedState;
                    });
                }
                break;

            case "property":
                // handle objectives, challenges, and solutions
                if (["photos", "videos",].includes(field.key as string)) {
                    console.log(addValue, document);

                    if (addValue && document) {
                        validationErrors = validateField(field, addValue);
                        // Handle other fields
                        setErrorFields((prevState: Partial<ErrorObject<T["document"]>>) => ({
                            ...prevState,
                            [field.key]: validationErrors,
                        }));

                        const fieldValue = document[field.key as keyof PropertyDocumentType];



                        // validate fieldValue is an array
                        if (Array.isArray(fieldValue)) {
                            // Create a copy of the existing array to modify it
                            const updatedArray = [...fieldValue];

                            const valueIndex = updatedArray.indexOf(addValue);


                            // If the value is not found, add it to the array
                            if (valueIndex === -1) {
                                updatedArray.push(addValue);
                            }
                            // If the value is found, remove it from the array (toggle functionality)
                            else {
                                updatedArray.splice(valueIndex, 1);
                            }

                            // Update the state with the modified array
                            setDocument((prev: TechnicalApplicationDocumentType) => ({
                                ...prev,
                                [field.key]: updatedArray,
                            }));
                        }

                    } else {

                    }


                }

                // handle name, description, and link text change
                else if (["address", "description",].includes(field.key as string)) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                        ...prev,
                        [field.key]: validationErrors
                    }));



                    // handle case study document
                    setDocument((prevState: PropertyDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: value
                        };
                        return updatedState;
                    });
                }

                // handle radio change
                else if (["select"].includes(field.type)) {

                    if (choice && typeof choice == "string") {

                        validationErrors = validateField(field, choice as string);
                        // handle error fields
                        setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                            ...prev,
                            [field.key]: { message: "", value: false }
                        }));



                        // handle case study document
                        setDocument((prevState: PropertyDocumentType) => {
                            const updatedState = {
                                ...prevState,
                                [field.key]: choice
                            };
                            return updatedState;
                        });
                    } else if (choice != null && typeof choice == "boolean") {

                        // validationErrors = validateField(field, choice as unknown as string);
                        // handle error fields
                        setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                            ...prev,
                            [field.key]: { message: "", value: false }
                        }));



                        // handle case study document
                        setDocument((prevState: PropertyDocumentType) => {
                            const updatedState = {
                                ...prevState,
                                [field.key]: choice
                            };
                            return updatedState;
                        });
                    }
                }

                // handle purchasePrice, rehabCost, and currentValue changes
                else if (['purchasePrice', 'rehabCost', 'currentValue'].includes(field.key as string)) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                        ...prev,
                        [field.key]: validationErrors
                    }));



                    // handle case study document
                    setDocument((prevState: PropertyDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: value
                        };
                        return updatedState;
                    });
                }

                else if (['monthlyFinancialFigures'].includes(field.key as string)) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                        ...prev,
                        [field.key]: {
                            ...prev.monthlyFinancialFigures,
                            validationErrors
                        }
                    }));



                    // handle case study document
                    setDocument((prevState: PropertyDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: {
                                ...prevState.monthlyFinancialFigures,
                                [field.name]: value
                            }
                        };
                        return updatedState;
                    });
                }
                // handle purchasePrice, rehabCost, and currentValue changes
                else if (['acquired',].includes(field.key as string)) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                        ...prev,
                        [field.key]: validationErrors
                    }));


                    console.log(choice);

                    // handle case study document
                    setDocument((prevState: PropertyDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: value
                        };
                        return updatedState;
                    });
                }

                break;

            case "contact":
                if ((['text', 'textarea'].includes(field.type))) {

                    validationErrors = validateField(field, value);
                    // handle error fields
                    setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                        ...prev,
                        [field.key]: validationErrors
                    }));



                    // handle case study document
                    setDocument((prevState: PropertyDocumentType) => {
                        const updatedState = {
                            ...prevState,
                            [field.key]: value
                        };
                        return updatedState;
                    });
                }
                // handle radio change
                else if (["radio"].includes(field.type)) {

                    if (choice) {

                        validationErrors = validateField(field, choice as string);
                        // handle error fields
                        setErrorFields((prev: Partial<ErrorObject<CaseStudyDocumentType>>) => ({
                            ...prev,
                            [field.key]: validationErrors
                        }));



                        // handle case study document
                        setDocument((prevState: CaseStudyDocumentType) => {
                            const updatedState = {
                                ...prevState,
                                [field.key]: choice
                            };
                            return updatedState;
                        });
                    }
                }
                break

            default:
                throw new Error("Unsupported document type");
        }
    }
}
