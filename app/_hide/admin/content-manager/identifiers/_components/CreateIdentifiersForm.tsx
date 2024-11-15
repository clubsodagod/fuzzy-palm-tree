import React from 'react'
import styles from '../../../styles.module.css';
import { categoryFormDocument, subcategoryFormDocument } from '@/library/const/forms/identifiers';
import { StatusObject } from '@/library/types/form/identifiers';
import { FormField } from '@/library/types/form/identifiers';
import { Alert, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { motion } from 'framer-motion';
import { StatusResponseObject } from '@/utility/admin/identifiers/create-card';
import { CategoryDocumentType } from '@/app/_database/models/category';
import { SubcategoryDocumentType, ISubcategory } from '@/app/_database/models/subcategory';


const CreateIdentifiersForm: React.FC<{
    category:boolean|undefined;
    eRM:Partial<StatusResponseObject>;
    cD:Partial<CategoryDocumentType>;
    sD:Partial<SubcategoryDocumentType>;
    setCategoryDocument: (arg0:any)=>void;
    setSubcategoryDocument: (arg0:any)=>void;
    eFs:Partial<{
        category: StatusObject<Partial<CategoryDocumentType>>,
        subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
    }>;
    handleChange:(
        field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    )=>void;
    subcategories:Partial<ISubcategory[]>;
    handleSubcategoryToggle:any;
}> = ({
    category,
    eRM,
    cD,
    sD,
    setCategoryDocument,
    setSubcategoryDocument,
    eFs,
    handleChange,
    subcategories,
    handleSubcategoryToggle,
}) => {

    return (
        <>

                {
                    category &&
                    <motion.form className={`${styles.identifierForm}`}>

                        <motion.div
                            className={`${styles.alertCtn}`}
                        >
                            {
                                eRM.category?.error != null  &&
                                    <Alert severity={!eRM.category?.error ?"success":"error"} >
                                        {
                                            eRM.category?.message 
                                        }
                                    </Alert>                         
                            }
                        </motion.div>   

                        {categoryFormDocument.map((cf, i) => {

                            if (cf && cf.type === "text" && cf.key in cD!) { // Type narrowing to ensure cf is not undefined
                                if (["photo", "video"].some(k => cf.key.includes(k))) {
                                    const key = cf.key as 'photo' | 'video';  // Explicitly type the key as 'photo' or 'video'

                                    // Narrow down the correct error field, making sure to cast correctly
                                    const errorField = eFs.category && (eFs.category[key] as StatusObject<CategoryDocumentType['photo']>|StatusObject<CategoryDocumentType['video']>);

                                    console.log(errorField); // Check the structure of errorField in the console

                                    return (
                                        <TextField
                                            error={errorField && cf.name.includes("landscape") ? errorField.landscape?.error : errorField?.portrait?.error}
                                            fullWidth
                                            label={cf.label}
                                            name={cf.name as string}  // `name` is narrowed down to string
                                            className={styles.catFormField}
                                            value={cf.key.includes("photo")
                                                ? cD.photo && cD.photo[cf.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                                : cD.video && cD.video[cf.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                            key={`${cf.key} ${cf.name} category`}
                                            id='category'
                                            onChange={(e) => { handleChange( cf as FormField<CategoryDocumentType>, e) }}
                                        />
                                    );
                                } else {
                                    // Handle all other text fields
                                    return (
                                        <TextField
                                            error={eFs.category && eFs?.category[cf.key as keyof CategoryDocumentType]?.error}
                                            fullWidth
                                            label={cf.label}
                                            name={cf.name as string}  // `name` is narrowed down to string
                                            className={styles.catFormField}
                                            value={cD[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                            key={`${cf.key} ${cf.name} category`}
                                            id='category'
                                            onChange={(e) => { handleChange( cf as unknown as FormField<CategoryDocumentType>, e) }}
                                        />
                                    );
                                }
                            } else if (cf && cf.type === "textarea" && cf.key in cD!) {
                                return (
                                    <TextField
                                        error={eFs.category && eFs?.category[cf.key as keyof CategoryDocumentType]?.error}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label={cf.label}
                                        name={cf.name as string}  // `name` is narrowed down to string
                                        className={styles.catFormField}
                                        value={cD && cD[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                        key={`${cf.key} ${i}`}
                                        id='category'
                                        onChange={(e) => { handleChange( cf as unknown as FormField<CategoryDocumentType>, e) }}
                                    />
                                );
                            } else if (cf && cf.type === "checkbox" && cf.key in cD! && cf.name === "subcategories") {

                                if (subcategories.length > 0) {
                                    return (
                                        <motion.div
                                            key={`${cf.key} ${i}`}
                                            className={`${styles.catFormCheckboxWrapper}`}
                                        >
                                            <h5>Subcategories</h5>
                                            <motion.div
                                                className={`${styles.catFormCheckbox}`}
                                            >
                                                {
                                                    subcategories.map((s, i: number) => {

                                                        // define key name and assert its definition
                                                        const keyName = s?._id!;

                                                        return (
                                                            <FormControlLabel
                                                                id='category'
                                                                onChange={()=>handleSubcategoryToggle(s?._id as string, setCategoryDocument,cD)}
                                                                key={`${keyName}`}
                                                                control={
                                                                    <Checkbox
                                                                        size='small'
                                                                        id='category'
                                                                        checked={cD?.subcategories?.includes(s?._id as unknown as string)}
                                                                    />
                                                                }
                                                                label={s?.name}
                                                            />
                                                        )
                                                    })
                                                }
                                            </motion.div>

                                        </motion.div>
                                    )
                                }
                            }
                            return null;
                        })}
                    </motion.form>
                }

                {
                    !category &&
                    <motion.form className={`${styles.identifierForm}`}>

                        <motion.div
                            className={`${styles.alertCtn}`}
                        >
                        {
                            eRM.subcategory?.error != null  &&
                                <Alert severity={!eRM.subcategory?.error ?"success":"error"} >
                                    {
                                        eRM.subcategory?.message 
                                    }
                                </Alert>                         
                        }
                        </motion.div>   

                        {subcategoryFormDocument.map((sf, i) => {

                            if (sf && sf.type === "text" && sf.key in sD!) { // Type narrowing to ensure sf is not undefined
                                if (["photo", "video"].some(k => sf.key.includes(k))) {
                                    const key = sf.key as 'photo' | 'video';  // Explicitly type the key as 'photo' or 'video'

                                    // Narrow down the correct error field, making sure to cast correctly
                                    const errorField = eFs.subcategory && (eFs.subcategory[key] as StatusObject<SubcategoryDocumentType['photo']>|StatusObject<SubcategoryDocumentType['video']>);

                                    console.log(errorField); // Check the structure of errorField in the console

                                    
                                    return (
                                        <TextField
                                            error={errorField && sf.name.includes("landscape") ? errorField.landscape?.error : errorField?.portrait?.error}
                                            fullWidth
                                            label={sf.label}
                                            name={sf.name as string}  // `name` is narrowed down to string
                                            className={styles.formField}
                                            value={sf.key.includes("photo")
                                                ? sD.photo && sD.photo[sf.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                                : sD.video && sD.video[sf.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                            key={`${sf.key} ${sf.name} subcategory`}
                                            id='subcategory'
                                            onChange={(e) => { handleChange( sf as unknown as FormField<SubcategoryDocumentType>, e) }}
                                        />
                                    );                                    
                                } else {

                                    
                                    return (
                                        <TextField
                                            error={eFs.subcategory && eFs?.subcategory[sf.key as keyof SubcategoryDocumentType]?.error}
                                            fullWidth
                                            label={sf.label}
                                            name={sf.name as string}  // `name` is narrowed down to string
                                            className={styles.formField}
                                            value={sD && sD[sf.name as keyof SubcategoryDocumentType]}  // Ensure correct value type
                                            key={`${sf.key} ${sf.name} subcategory`}
                                            id='subcategory'
                                            onChange={(e) => { handleChange( sf as unknown as FormField<SubcategoryDocumentType>, e) }}
                                        />
                                    );  
                                }

                            } else if (sf && sf.type === "textarea" && sf.key in sD!) {
                                return (
                                    <TextField
                                        error={eFs.subcategory && eFs?.subcategory[sf.key as keyof SubcategoryDocumentType]?.error}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label={sf.label}
                                        name={sf.name as string}  // `name` is narrowed down to string
                                        className={styles.formField}
                                        value={sD && sD[sf.name as keyof SubcategoryDocumentType]}  // Ensure correct value type
                                        key={`${sf.key} ${i}`}
                                        id='subcategory'
                                        onChange={(e) => { handleChange( sf as unknown as FormField<SubcategoryDocumentType>, e) }}
                                    />
                                );
                            }
                            return null;
                        })}
                    </motion.form>
                }
        </>
    )
}



export default CreateIdentifiersForm;