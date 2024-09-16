'use client'
import { PageContainer } from '@/app/components';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import IdentifierModificationModule from '../_components/IdentifierModificationModule';
import { ICategory } from '@/library/db/models/category';
import { ISubcategory } from '@/library/db/models/subcategory';

type IdentifiersType = {
    categories:ICategory[]|null;
    subcategories:ISubcategory[]|null;
}

const UpdatePage = () => {

    // create state variables
    const [identifiers,setIdentifiers] = useState<IdentifiersType|null>(null);

    // access category and subcategory documents from the database
    const initIdentifiers = async() => {
        // api call to fetch documents
        const categoriesData = await fetch('/api/blog/identifiers/category/get-all', {method:"GET"});
        const subcategoriesData = await fetch('/api/blog/identifiers/subcategory/get-all', {method:"GET"});
        const categories = await categoriesData.json()
        const subcategories = await subcategoriesData.json()

        console.log(categories);
        
        
        // return object 
        return {categories:categories.categories,subcategories:subcategories.subcategories}
    } 




    // initialize identifiers on page loads
    useEffect(()=>{

        // validate identifiers object is null
        if(identifiers === null){
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

        }
    },)


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

                    <motion.h6
                    className={`${styles.subheader}`}
                    >
                        Categories
                    </motion.h6>

                    <IdentifierModificationModule subcategories={identifiers?.subcategories} identifiers={identifiers?.categories} />
                </motion.div>
            </motion.div>
        </PageContainer>
    )
}

export default UpdatePage