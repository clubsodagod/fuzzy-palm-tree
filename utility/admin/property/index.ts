import { propertyFormDocument } from "@/library/const/forms/property";
import { PropertyDocumentType } from "@/library/db/models/property";
import React from "react";


export function initPropertyDocument (
    setPropertyDocument:React.Dispatch<PropertyDocumentType|undefined>,
) {
        const initialPropertyDoc: PropertyDocumentType | undefined = {
            address:"",
            description:"",
            photos:[],
            videos:[],
            investmentType:"",
            acquired:false,
            live:false,
            purchasePrice:0,
            currentValue:0,
            rehabCost: 0,
            monthlyFinancialFigures:{
                propertyMonthlyDebtServiceExpense: 0,
                propertyMonthlyExpenses: 0,
                propertyMonthlyIncome: 0,
            }
        };
    
        // const 
    

    
        setPropertyDocument(initialPropertyDoc!);
}