'use client'
import { PageContainer } from '@/app/components';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import IdentifierModificationModule from '../_components/IdentifierModificationModule';
import { ICategory } from '@/library/db/models/category';
import { ISubcategory } from '@/library/db/models/subcategory';

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
        <PageContainer>
            <motion.div
                className={`${styles.adminSectionWrapper} adminSectionWrapper`}
            >
                <motion.div
                    className={`${styles.headerCtn} headerCtn`}
                >
                    <h4>
                        Update Identifiers
                    </h4>

                    <h5 className={`${styles.subheader} admin-subheader`}>
                        A little change isn&apos;t so bad
                    </h5>

                </motion.div>

                <motion.div className={`${styles.btmCtn}`}>

                    <IdentifierModificationModule />
                </motion.div>
            </motion.div>
        </PageContainer>
    )
}

export default UpdatePage