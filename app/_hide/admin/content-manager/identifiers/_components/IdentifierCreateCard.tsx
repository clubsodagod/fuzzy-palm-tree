import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { Alert, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { CategoryDocumentType, ICategory } from '@/library/db/models/category';
import { ISubcategory, SubcategoryDocumentType } from '@/library/db/models/subcategory';
import { categoryFormDocument, subcategoryFormDocument } from '@/library/const/forms/identifiers';
import { FormField, FormFieldsFor, StatusObject } from '@/library/types/form/identifiers';
import { Landscape } from '@mui/icons-material';
import { handleCreateCardChange, handleCreateCardSubmit, handleSubcategoryToggle, initCategoryDocument, initErrorFields, initIdentifiers, initSubcategoryDocument, StatusResponseObject, validateIdentifierField } from '@/utility/admin/identifiers/create-card';
import CreateIdentifiersForm from './CreateIdentifiersForm';




const IdentifierCreateCard: React.FC<{
    preview?: boolean;
    setPreview?: (arg0: boolean) => void;
    category?: boolean;
}> = ({
    preview,
    setPreview,
    category,
}) => {

        const [cD, setCategoryDocument] = useState<Partial<CategoryDocumentType>>({});
        const [sD, setSubcategoryDocument] = useState<Partial<SubcategoryDocumentType>>({});
        const [subcategories, setSubcategories] = useState<Partial<ISubcategory[]>>([]);
        const [checkedSubcategory, setCheckedSubcategory] = useState<Partial<string[]>>([]);
        const [submittable, setSubmittable] = useState<boolean>(true);
        const [eRM, setErrorResponseMessage] = useState<Partial<StatusResponseObject>>({});
        const [eFs, setErrorFields] = useState<Partial<{
            category: StatusObject<Partial<CategoryDocumentType>>,
            subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
        }>>({});



        // handleChange function
        const handleChange = (
            field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
            handleCreateCardChange(
                category, field, event,
                setErrorFields, setCategoryDocument,setSubcategoryDocument,
            )
        };

        // handle submit
        const handleSubmit = () => {
            handleCreateCardSubmit(
                category,
                cD,
                sD,
                setErrorResponseMessage,
                setCategoryDocument,
                setSubcategoryDocument,
                setSubcategories,
                initIdentifiers
            )
        }

        // initialize data for the page
        useEffect(() => {
            if(category) {
                initIdentifiers(setSubcategories);
            }
            
            initCategoryDocument(setCategoryDocument);
            initSubcategoryDocument(setSubcategoryDocument);
            initErrorFields(setErrorFields);
        }, []);


        // use-effect update functions
        useEffect(() => {
            {
                subcategories && console.log("");
                ;
            }
        }, [subcategories])

        useEffect(() => {
            {
                cD && console.log("");
            }
        }, [cD])

        useEffect(() => {
            {
                eFs && console.log("");
            }
        }, [eFs])

        useEffect(() => {
            {
                sD && console.log("");
            }
        }, [sD])

        return (
            <motion.div className={`${styles.createIdentifierCardWrapper}`}>

                <CreateIdentifiersForm 
                    category={category}
                    eRM={eRM}
                    eFs={eFs}
                    cD={cD}
                    sD={sD}
                    setCategoryDocument={setCategoryDocument}
                    setSubcategoryDocument={setSubcategoryDocument}
                    subcategories={subcategories}
                    handleSubcategoryToggle={handleSubcategoryToggle}
                    handleChange={handleChange}
                />

                <Button
                    variant="contained"
                    className={`${styles.submitBtn}`}
                    onClick={handleSubmit}
                >
                    Create
                </Button>
            </motion.div>
        )
    }



export default IdentifierCreateCard;