import React, { useEffect, useState } from 'react'
import styles from '../../../styles.module.css'
import { ISubcategory } from '@/library/db/models/subcategory'
import { handleRemoveSubcategory, handleAddSubcategory, CategorySubcategoriesType, handleInclusiveSubcategories, handlePopulateFields, isCategory } from '@/utility/admin/identifiers'
import { TextField, Chip, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { ICategory } from '@/library/db/models/category'
import { ManageAddRemoveSubcategoryFunction } from './IdentifierModificationCard'


const CardForm: React.FC<{
    identifierDocument:any;
    inclusive:ISubcategory[]|undefined;
    noninclusive:ISubcategory[]|undefined;
    manageAddRemoveSubcategory: ManageAddRemoveSubcategoryFunction;
}> = ({
    identifierDocument,
    inclusive,
    noninclusive,
    manageAddRemoveSubcategory,
}) => {
    
    


    return (
        <motion.div className={`${styles.clickedCtnWrapper}`}>

        <motion.form
        className={`${styles.clickedIdentifierForm}`}
        >

            <TextField 
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

            </motion.div>
        </motion.form>
        <motion.div
            className={`${styles.subcategoriesCtn}`}
        >
            {
                    inclusive?.map((sc:ISubcategory|undefined,i:number)=>{
                            return(
                                <Chip key={`${i} removable chip`} 
                                    variant="outlined" 
                                    onClick={()=>{manageAddRemoveSubcategory("remove",sc?._id as string,identifierDocument)}} 
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
                                    onClick={()=>{manageAddRemoveSubcategory("add",sc?._id as string,identifierDocument)}} 
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