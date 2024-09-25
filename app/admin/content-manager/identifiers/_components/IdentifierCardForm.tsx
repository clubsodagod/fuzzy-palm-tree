import React, { useEffect, useState } from 'react'
import styles from '../../../styles.module.css'
import { ISubcategory } from '@/library/db/models/subcategory'
import { handleRemoveSubcategory, handleAddSubcategory, CategorySubcategoriesType, handleInclusiveSubcategories, handlePopulateFields, isCategory } from '@/utility/admin/identifiers'
import { TextField, Chip, Avatar, Checkbox, FormControlLabel } from '@mui/material'
import { motion } from 'framer-motion'
import { CategoryDocumentType, ICategory } from '@/library/db/models/category'
import { ManageAddRemoveSubcategoryFunction } from './IdentifierModificationCard'
import { categoryFormDocument } from '@/library/const/forms/identifiers'


const CardForm: React.FC<{
    identifierDocument:Partial<CategoryDocumentType>;
    inclusive:ISubcategory[]|undefined;
    noninclusive:ISubcategory[]|undefined;
    manageAddRemoveSubcategory: ManageAddRemoveSubcategoryFunction;
    handleChange:(
        key: string,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}> = ({
    identifierDocument,
    inclusive,
    noninclusive,
    manageAddRemoveSubcategory,
    handleChange
}) => {
    
    


    return (
    <motion.div className={`${styles.clickedCtnWrapper}`}>

        <motion.form
        className={`${styles.clickedIdentifierForm}`}
        >
            
            {categoryFormDocument.map((cf, i) => {
                            
                            if (cf && cf.type === "text" && cf.key in identifierDocument!) { // Type narrowing to ensure cf is not undefined

                                if (["photo", "video",].some(k => cf.key.includes(k))) {
                                    return (
                                        <TextField
                                            fullWidth
                                            label={cf.label}
                                            name={cf.name as string}  // `name` is narrowed down to string
                                            className={styles.catFormField}
                                            value={cf.key.includes("photo")
                                                ? identifierDocument.photo && identifierDocument.photo[cf.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                                : identifierDocument.video && identifierDocument.video[cf.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                            key={`${cf.key} ${cf.name} category`}
                                            id='category'
                                            onChange={(e)=>{handleChange(cf.key,e)}}
                                        />
                                    );
                                } else {
                                    // Handle all other text fields
                                    return (
                                        <TextField
                                            fullWidth
                                            label={cf.label}
                                            name={cf.name as string}  // `name` is narrowed down to string
                                            className={styles.catFormField}
                                            value={identifierDocument[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                            key={`${cf.key} ${cf.name} category`}
                                            id='category'
                                            onChange={(e)=>{handleChange(cf.key,e)}}
                                        />
                                    );
                                }
                            } else if (cf && cf.type === "textarea" && cf.key in identifierDocument!) {
                                return (
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label={cf.label}
                                        name={cf.name as string}  // `name` is narrowed down to string
                                        className={styles.catFormField}
                                        value={identifierDocument && identifierDocument[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                        key={`${cf.key} ${i}`}
                                        id='category'
                                        onChange={(e)=>{handleChange(cf.key,e)}}
                                    />
                                );
                            } else if (cf && cf.type === "checkbox" && cf.key in identifierDocument! && cf.name === "subcategories") {
                                
                                if(inclusive && inclusive.length > 0) {
                                    return null                          
                                }
                            } 
                            return null;
                        })}

            {/* <TextField 
                className={`${styles.inputField}`} 
                label={`Name`} 
                name={`name`}
                value={identifierDocument?.name}
            />
            <TextField 
                className={`${styles.inputField}`} 
                label={`Tagline`} 
                name={`tagline`}
                multiline
                rows={2}
                value={identifierDocument?.tagline}
            />
            <TextField 
                className={`${styles.inputField}`} 
                label={`Description`} 
                multiline
                rows={4}
                name={`description`}
                value={identifierDocument?.description}
            />

            <motion.div className={`${styles.photoInputCtn}`}>

                <motion.h6>Photo</motion.h6>
                <motion.div
                className={`${styles.photoInputElementWrapper}`}
                >
                    <TextField 
                        className={`${styles.inputField}`} 
                        label={`Portrait photo`} 
                        name={`portrait`}
                        value={identifierDocument?.photo?.portrait}
                    />

                    <TextField 
                        className={`${styles.inputField}`} 
                        label={`Landscape photo`} 
                        name={`landscape`}
                        value={identifierDocument?.photo?.landscape}
                    />                                
                </motion.div>

            </motion.div>

            <motion.div className={`${styles.photoInputCtn}`}>

                <motion.h6>Video</motion.h6>
                <motion.div
                className={`${styles.photoInputElementWrapper}`}
                >
                    <TextField 
                        className={`${styles.inputField}`} 
                        label={`Portrait Video`} 
                        name={`portrait`}
                        value={identifierDocument?.video?.portrait}
                    />

                    <TextField 
                        className={`${styles.inputField}`} 
                        label={`Landscape Video`} 
                        name={`landscape`}
                        value={identifierDocument?.video?.landscape}
                    />                                
                </motion.div>

            </motion.div> */}
        </motion.form>
        <motion.div
            className={`${styles.subcategoriesCtn}`}
        >
            {
                    inclusive?.map((sc:ISubcategory|undefined,i:number)=>{
                            return(
                                <Chip key={`${i} removable chip`} 
                                    variant="outlined" 
                                    onClick={()=>{manageAddRemoveSubcategory("remove",sc?._id as string,identifierDocument as Partial<ICategory>)}} 
                                    color="error" label={sc?.name} 
                                    avatar={<Avatar src={`${sc?.photo.landscape}`} />} 
                                />
                            )
                        })

            }
            {
                    noninclusive?.map((sc:ISubcategory|undefined,i:number)=>{
                        console.log(sc);
                        
                            return(
                                <Chip 
                                    key={`${i} addable chip`} 
                                    variant="outlined" 
                                    onClick={()=>{manageAddRemoveSubcategory("add",sc?._id as string,identifierDocument as Partial<ICategory>)}} 
                                    color="success" label={sc?.name} 
                                    avatar={<Avatar src={`${sc?.photo.landscape}`} />} 
                                />
                            )
                        })

            }
        </motion.div>

    </motion.div>    
    )
}



export default CardForm;