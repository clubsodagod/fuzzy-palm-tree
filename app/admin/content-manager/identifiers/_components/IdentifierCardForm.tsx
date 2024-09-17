import React, { useEffect } from 'react'
import styles from '../../../styles.module.css'
import { ISubcategory } from '@/library/db/models/subcategory'
import { handleRemoveSubcategory, handleAddSubcategory, CategorySubcategoriesType, handleInclusiveSubcategories } from '@/utility/admin/identifiers'
import { TextField, Chip, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { ICategory } from '@/library/db/models/category'


const CardForm: React.FC<{
    identifierDocument:any;
    setIdentifierDocument:(arg0:any)=>void;
    newSubcategories:CategorySubcategoriesType|Partial<CategorySubcategoriesType>;
    setSubcategories:(arg0:any)=>void;
    identifier:ICategory;
    refresh:any;
    setUpdate:(arg0:boolean)=>void;
    update:boolean;
}> = ({
    identifierDocument,
    newSubcategories,
    setIdentifierDocument,
    identifier,
    setSubcategories,
    refresh,
    setUpdate,
    update,
}) => {

    const handleRefresh = async() => {
        await refresh();
    }

    {
        useEffect(()=>{
            {
                identifier && identifier
            }
        },[identifier])
    }

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
                newSubcategories.inclusive && newSubcategories.inclusive.length > 0 &&
                    newSubcategories.inclusive.map((sc:ISubcategory,i)=>{
                            return(
                                <Chip key={`${i} removable chip`} 
                                    variant="outlined" 
                                    onClick={()=>{handleRemoveSubcategory(sc._id as string,setIdentifierDocument,identifierDocument);setUpdate(!update)}} 
                                    color="error" label={sc.name} 
                                    avatar={<Avatar src={`${sc.photo.landscape}`} />} 
                                />
                            )
                        })

            }
            {
                newSubcategories.noninclusive && newSubcategories.noninclusive.length > 0 &&
                    newSubcategories.noninclusive.map((sc:ISubcategory,i)=>{
                            return(
                                <Chip 
                                    key={`${i} addable chip`} 
                                    variant="outlined" 
                                    onClick={()=>{handleAddSubcategory(sc._id as string, setIdentifierDocument, identifierDocument);handleRefresh();setUpdate(!update)}} 
                                    color="success" label={sc.name} 
                                    avatar={<Avatar src={`${sc.photo.landscape}`} />} 
                                />
                            )
                        })

            }
        </motion.div>

    </motion.div>    
    )
}



export default CardForm;