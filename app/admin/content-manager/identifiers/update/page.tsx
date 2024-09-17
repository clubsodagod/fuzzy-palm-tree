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
    const [categories, setCategories] = useState<ICategory[]|null>(null);
    const [subcategories, setSubcategories] = useState<ISubcategory[]|null>(null);

    // access category and subcategory documents from the database
    const initIdentifiers = async() => {
        // api call to fetch documents
        const categoriesData = await fetch('/api/blog/identifiers/category/get-all', {method:"GET"});
        const subcategoriesData = await fetch('/api/blog/identifiers/subcategory/get-all', {method:"GET"});
        const data = await categoriesData.json()
        const subData = await subcategoriesData.json()
        setCategories(data.categories);
        setSubcategories(subData.subcategories);
        setIdentifiers({
            subcategories:subData.subcategories,
            categories:data.categories,
        })
        
        
        // return object 
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
        // validate identifiers object is null
        if(identifiers === null){

            // evoke function and get identifiers
            handleInitIdentifiers()

        } 
    },[])

    useEffect(()=> {
        {
            categories  &&
            categories
            console.log(categories);
        }
        {
            subcategories  &&
            subcategories
            console.log(subcategories);
        }
        {
            categories == null  &&
            categories
        }
        {
            subcategories == null  &&
            subcategories
        }
        // initIdentifiers()
    },[categories])


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

                    <IdentifierModificationModule subcategories={subcategories} identifiers={categories} refresh={initIdentifiers}/>
                </motion.div>
            </motion.div>
        </PageContainer>
    )
}

export default UpdatePage