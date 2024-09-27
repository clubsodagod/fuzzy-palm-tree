import React, { useEffect, useState } from 'react'
import styles from '../../../styles.module.css'
import { ISubcategory, SubcategoryDocumentType } from '@/library/db/models/subcategory'
import { handleRemoveSubcategory, handleAddSubcategory, CategorySubcategoriesType, handleInclusiveSubcategories, handlePopulateFields, isCategory } from '@/utility/admin/identifiers'
import { TextField, Chip, Avatar, Checkbox, FormControlLabel, Alert } from '@mui/material'
import { motion } from 'framer-motion'
import { CategoryDocumentType, ICategory } from '@/library/db/models/category'
import { ManageAddRemoveSubcategoryFunction } from './IdentifierModificationCard'
import { categoryFormDocument, subcategoryFormDocument } from '@/library/const/forms/identifiers'
import { FormField, StatusObject } from '@/library/types/form/identifiers'
import { StatusResponseObject } from '@/utility/admin/identifiers/create-card'


const CardForm: React.FC<{
    identifierDocument: Partial<CategoryDocumentType>;
    inclusive: ISubcategory[] | undefined;
    noninclusive: ISubcategory[] | undefined;
    manageAddRemoveSubcategory: ManageAddRemoveSubcategoryFunction;
    handleChange: (
        field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    eFs: Partial<{
        category: StatusObject<Partial<CategoryDocumentType>>,
        subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
    }>;
    eRM: Partial<StatusResponseObject>;
    category: boolean;
}> = ({
    identifierDocument,
    inclusive,
    noninclusive,
    manageAddRemoveSubcategory,
    handleChange,
    eFs, eRM,
    category,
}) => {




        return (
            <motion.div className={`${styles.clickedCtnWrapper}`}>

                <motion.form
                    className={`${styles.clickedIdentifierForm}`}
                >
                    {
                        category &&
                        <>

                            <motion.div
                                className={`${styles.alertCtn}`}
                            >
                                {
                                    eRM.category?.error != null &&
                                    <Alert severity={!eRM.category?.error ? "success" : "error"} >
                                        {
                                            eRM.category?.message
                                        }
                                    </Alert>
                                }
                            </motion.div>
                            {
                                categoryFormDocument.map((cf, i) => {

                                    if (cf && cf.type === "text" && cf.key in identifierDocument!) { // Type narrowing to ensure cf is not undefined

                                        if (["photo", "video",].some(k => cf.key.includes(k))) {
                                            const key = cf.key as 'photo' | 'video';  // Explicitly type the key as 'photo' or 'video'

                                            // Narrow down the correct error field, making sure to cast correctly
                                            const errorField = eFs.category && (eFs.category[key] as StatusObject<CategoryDocumentType['photo']> | StatusObject<CategoryDocumentType['video']>);

                                            return (
                                                <TextField
                                                    error={errorField && cf.name.includes("landscape") ? errorField.landscape?.error : errorField?.portrait?.error}
                                                    fullWidth
                                                    label={cf.label}
                                                    name={cf.name as string}  // `name` is narrowed down to string
                                                    className={styles.catFormField}
                                                    value={cf.key.includes("photo")
                                                        ? identifierDocument.photo && identifierDocument.photo[cf.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                                        : identifierDocument.video && identifierDocument.video[cf.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                                    key={`${cf.key} ${cf.name} category`}
                                                    id='category'
                                                    onChange={(e) => { handleChange(cf as FormField<CategoryDocumentType>, e) }}
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
                                                    value={identifierDocument[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                                    key={`${cf.key} ${cf.name} category`}
                                                    id='category'
                                                    onChange={(e) => { handleChange(cf as FormField<CategoryDocumentType>, e) }}
                                                />
                                            );
                                        }
                                    } else if (cf && cf.type === "textarea" && cf.key in identifierDocument!) {
                                        return (
                                            <TextField
                                                error={eFs.category && eFs?.category[cf.key as keyof CategoryDocumentType]?.error}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label={cf.label}
                                                name={cf.name as string}  // `name` is narrowed down to string
                                                className={styles.catFormField}
                                                value={identifierDocument && identifierDocument[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                                key={`${cf.key} ${i}`}
                                                id='category'
                                                onChange={(e) => { handleChange(cf as FormField<CategoryDocumentType>, e) }}
                                            />
                                        );
                                    } else if (cf && cf.type === "checkbox" && cf.key in identifierDocument! && cf.name === "subcategories") {

                                        if (inclusive && inclusive.length > 0) {
                                            return null
                                        }
                                    }
                                    return null;
                                })
                            }
                            <motion.div
                                className={`${styles.subcategoriesCtn}`}
                            >
                                {
                                    inclusive?.map((sc: ISubcategory | undefined, i: number) => {
                                        return (
                                            <Chip key={`${i} removable chip`}
                                                variant="outlined"
                                                onClick={() => { manageAddRemoveSubcategory("remove", sc?._id as string, identifierDocument as Partial<ICategory>) }}
                                                color="error" label={sc?.name}
                                                avatar={<Avatar src={`${sc?.photo.landscape}`} />}
                                            />
                                        )
                                    })

                                }
                                {
                                    noninclusive?.map((sc: ISubcategory | undefined, i: number) => {
                                        // console.log(sc);

                                        return (
                                            <Chip
                                                key={`${i} addable chip`}
                                                variant="outlined"
                                                onClick={() => { manageAddRemoveSubcategory("add", sc?._id as string, identifierDocument as Partial<ICategory>) }}
                                                color="success" label={sc?.name}
                                                avatar={<Avatar src={`${sc?.photo.landscape}`} />}
                                            />
                                        )
                                    })
                                }
                            </motion.div>
                        </>
                    }
                    {
                        !category &&
                        <>

                            <motion.div
                                className={`${styles.alertCtn}`}
                            >
                                {
                                    eRM.subcategory?.error != null &&
                                    <Alert severity={!eRM.subcategory?.error ? "success" : "error"} >
                                        {
                                            eRM.subcategory?.message
                                        }
                                    </Alert>
                                }
                            </motion.div>
                            {
                                subcategoryFormDocument.map((sf, i) => {

                                    if (sf && sf.type === "text" && sf.key in identifierDocument!) { // Type narrowing to ensure sf is not undefined

                                        if (["photo", "video",].some(k => sf.key.includes(k))) {
                                            const key = sf.key as 'photo' | 'video';  // Explicitly type the key as 'photo' or 'video'

                                            // Narrow down the correct error field, making sure to cast correctly
                                            const errorField = eFs.subcategory && (eFs.subcategory[key] as StatusObject<SubcategoryDocumentType['photo']> | StatusObject<SubcategoryDocumentType['video']>);

                                            return (
                                                <TextField
                                                    error={errorField && sf.name.includes("landscape") ? errorField.landscape?.error : errorField?.portrait?.error}
                                                    fullWidth
                                                    label={sf.label}
                                                    name={sf.name as string}  // `name` is narrowed down to string
                                                    className={styles.catFormField}
                                                    value={sf.key.includes("photo")
                                                        ? identifierDocument.photo && identifierDocument.photo[sf.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                                        : identifierDocument.video && identifierDocument.video[sf.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                                    key={`${sf.key} ${sf.name} subcategory`}
                                                    id='subcategory'
                                                    onChange={(e) => { handleChange(sf as FormField<SubcategoryDocumentType>, e) }}
                                                />
                                            );
                                        } else {
                                            // Handle all other text fields
                                            return (
                                                <TextField
                                                    error={eFs.subcategory && eFs?.subcategory[sf.key as keyof SubcategoryDocumentType]?.error}
                                                    fullWidth
                                                    label={sf.label}
                                                    name={sf.name as string}  // `name` is narrowed down to string
                                                    className={styles.catFormField}
                                                    value={identifierDocument[sf.name as keyof SubcategoryDocumentType]}  // Ensure correct value type
                                                    key={`${sf.key} ${sf.name} subcategory`}
                                                    id='subcategory'
                                                    onChange={(e) => { handleChange(sf as FormField<SubcategoryDocumentType>, e) }}
                                                />
                                            );
                                        }
                                    } else if (sf && sf.type === "textarea" && sf.key in identifierDocument!) {
                                        return (
                                            <TextField
                                                error={eFs.subcategory && eFs?.subcategory[sf.key as keyof SubcategoryDocumentType]?.error}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label={sf.label}
                                                name={sf.name as string}  // `name` is narrowed down to string
                                                className={styles.catFormField}
                                                value={identifierDocument && identifierDocument[sf.name as keyof SubcategoryDocumentType]}  // Ensure correct value type
                                                key={`${sf.key} ${i}`}
                                                id='subcategory'
                                                onChange={(e) => { handleChange(sf as FormField<SubcategoryDocumentType>, e) }}
                                            />
                                        );
                                    } else if (sf && sf.type === "checkbox" && sf.key in identifierDocument! && sf.name === "subcategories") {

                                        if (inclusive && inclusive.length > 0) {
                                            return null
                                        }
                                    }
                                    return null;
                                })
                            }
                        </>
                    }
                </motion.form>

            </motion.div>
        )
    }



export default CardForm;