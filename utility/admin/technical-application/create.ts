import { TechnicalApplicationDocumentType } from "@/app/_database/models/technicalApplication";
import { technicalApplicationFormDocument } from "@/library/const/forms/technicalProject";
import React from "react";


export function initTechnicalApplicationDocument (
    setTechnicalApplicationDocument:React.Dispatch<TechnicalApplicationDocumentType|undefined>,
) {
        const initialTechnicalProjectDoc: TechnicalApplicationDocumentType | undefined = {
            name:"",
            description:"",
            photos:[],
            videos:[],
            technologiesUsed:[],
            githubLink:"",
            link:"",
            live:true,
        };
    
        // const 
    
        technicalApplicationFormDocument.forEach((field) => {
            const key = field?.key as keyof TechnicalApplicationDocumentType;

            // validate initialTechnicalProjectDoc
            if (initialTechnicalProjectDoc) {
                // Assign appropriate default values based on the field type
                if (key == "name" || key == "description" || key == "link" || key == "githubLink" ) {
                    initialTechnicalProjectDoc[key] = '' as TechnicalApplicationDocumentType[typeof key]; // String fields
                } else if (key === 'technologiesUsed' || key === 'photos' || key == 'videos' ) {
                    initialTechnicalProjectDoc[key] = [] as TechnicalApplicationDocumentType[typeof key]; // Array fields
                }                 
            }
    

        });
    
        setTechnicalApplicationDocument(initialTechnicalProjectDoc!);
}