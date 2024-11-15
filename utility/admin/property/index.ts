import { PropertyDocumentType } from "@/app/_database/models/property";
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