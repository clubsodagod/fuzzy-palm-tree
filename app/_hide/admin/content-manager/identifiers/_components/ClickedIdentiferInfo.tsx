import React from 'react'
import styles from '../../../styles.module.css';
import { Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { CategorySubcategoriesType } from '@/utility/admin/identifiers';
import { ISubcategory } from '@/app/_database/models/subcategory';



const ClickedIdentifierInformation: React.FC<{
    identifierDocument:any;
    inclusive:ISubcategory[]|undefined;
    noninclusive:ISubcategory[]|undefined;
}> = ({
    identifierDocument,
    inclusive,
    noninclusive,
}) => {

    return (
        <motion.div>
            <motion.h6>
                {identifierDocument?.tagline}
            </motion.h6>
            <motion.p>
                {identifierDocument?.description}
            </motion.p>
            <motion.div
                className={`${styles.subcategoriesCtn}`}
            >
                {
                    inclusive?.map((sc:ISubcategory|undefined,i)=>{
                        return(
                            <Chip 
                                key={`${i} : subcategory ${sc?.name}`} 
                                variant="outlined" color="primary" 
                                label={sc?.name} 
                                avatar={<Avatar src={sc?.photo.portrait} />} 
                            />
                        )
                    })
                }
            </motion.div>
        </motion.div>   
    )
}



export default ClickedIdentifierInformation;