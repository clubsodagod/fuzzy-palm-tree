"use client"
import React, { useState } from 'react'
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import IdentifierCreateCard from './IdentifierCreateCard';
import { CategoryDocumentType } from '@/app/_database/models/category';


const CreationModule: React.FC<{}> = ({}) => {

    const [categoryForm, setCategoryForm] = useState<Partial<CategoryDocumentType>>();
    const [preview, setPreview] = useState<boolean>(false);

    return (
        <motion.div
            className={`${styles.moduleWrapper}`}
        >
            
            <motion.div className={`${styles.sectionCtn}`} >
                <h4 className={`${styles.subheader}`}>Category</h4>
                <IdentifierCreateCard  
                    preview={preview}
                    setPreview={setPreview}
                    category={true}
                />
            </motion.div>
            <motion.div className={`${styles.sectionCtn}`} >
                <h4 className={`${styles.subheader}`}>Subcategory</h4>
                <IdentifierCreateCard  
                    preview={preview}
                    setPreview={setPreview}
                    category={false}
                />
            </motion.div>

        </motion.div>
    )
}



export default CreationModule;