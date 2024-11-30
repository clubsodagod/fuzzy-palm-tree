'use client'
import { PageContainer } from '@/app/_hide/_components';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import IdentifierModificationModule from '../_components/IdentifierModificationModule';
import { ICategory } from '@/app/_database/models/category';
import { ISubcategory } from '@/app/_database/models/subcategory';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';


export type IdentifiersType = {
    categories:ICategory[]|null;
    subcategories:ISubcategory[]|null;
}

const UpdatePage = () => {

    // create state variables
    const [identifiers,setIdentifiers] = useState<IdentifiersType|Partial<IdentifiersType>>({});
    const [categories, setCategories] = useState();
    const [subcategories, setSubcategories] = useState();
    
    // access category and subcategory documents from the database
    const initIdentifiers = async() => {
        // api call to fetch documents
        const categoriesData = await fetch('/api/blog/identifiers/category/get-all', {method:"GET"});
        const subcategoriesData = await fetch('/api/blog/identifiers/subcategory/get-all', {method:"GET"});
        const data = await categoriesData.json()
        const subData = await subcategoriesData.json();
        setIdentifiers({
            subcategories:subData.subcategories,
            categories:data.categories,
        })
        setCategories(data.categories)
        setSubcategories(subData.subcategories)
        return {categories:data.categories,subcategories:subData.subcategories}
    } 

    // initialize identifiers on page loads
    useEffect(()=>{
            // handle initialize function
            const handleInitIdentifiers = async() =>{
                const data = await initIdentifiers();
                console.log(data);
                
                if (!data) {
                    console.log('First error');
                } else {
                    setIdentifiers(data);
                }
                
            }
            // evoke function and get identifiers
            handleInitIdentifiers()
    },[])



    return (
        <MotionPageWrapper>
            <motion.div
                className={`${styles.adminSectionWrapper} adminSectionWrapper`}
            >
                <motion.div
                    className={`${styles.headerCtn} headerCtn`}
                >
                    <h3>
                        Update Identifiers
                    </h3>

                    <h5 className={`${styles.subheader} admin-subheader`}>
                        A little change isn&apos;t so bad
                    </h5>

                </motion.div>

                <motion.div className={`${styles.identifierModuleCtn}`}>

                    <IdentifierModificationModule />
                </motion.div>
            </motion.div>
        </MotionPageWrapper>
    )
}

export default UpdatePage