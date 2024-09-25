import React, { useEffect, useState } from 'react'
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { ICategory } from '@/library/db/models/category';
import { ISubcategory } from '@/library/db/models/subcategory';
import IdentifierModificationCard from './IdentifierModificationCard';
import { IdentifiersType } from '../update/page';

const IdentifierModificationModule: React.FC<{
}> = ({
}) => {


    const [identifiers,setIdentifiers] = useState<IdentifiersType|Partial<IdentifiersType>>({});
    const [categories, setCategories] = useState<Partial<ICategory[]>>([]);
    const [subcategories, setSubcategories] = useState<Partial<ISubcategory[]>>([]);
    const [init, setInit] = useState<boolean>(false);

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
        setCategories(data.categories);
        setSubcategories(subData.subcategories);
        setInit(!init);
        return  {
            subcategories:subData.subcategories,
            categories:data.categories,
        }
    } 

    // initialize identifiers on page loads
    useEffect(()=>{
        // handle initialize function
        const handleInitIdentifiers = async() =>{
            const data = await initIdentifiers();
            console.log(data);
        }
        // evoke function and get identifiers
        handleInitIdentifiers();
        setInit(!init);
    },[])

    useEffect(()=>{
        if(init) {
            console.log(categories, subcategories);
            // handle initialize function
            const handleInitIdentifiers = async() =>{
                const data = await initIdentifiers();
                console.log(data);
                
                if (!data) {
                    console.log('First error');
                } else {
                    setIdentifiers(data);
                    setCategories(data.categories);
                    setSubcategories(data.subcategories);
                }
                
            }
            // evoke function and get identifiers
            handleInitIdentifiers();  
            {
                categories && console.log(categories);
                
            }
        }

    },[categories, subcategories])
    
    useEffect(()=>{
        {
            categories && console.log(categories);
            
        }
    },[categories])

    return (
        <motion.div
            className={`${styles.identifierModificationModuleWrapper}`}
        >

                <motion.div className={`${styles.sectionCtn}`}>
                    <motion.h5
                        className={`${styles.subheader}`}
                    >
                        Categories
                    </motion.h5>


                    <motion.div className={`${styles.cardCtn}`}>
                        {
                            categories?.map((identifier,i:number)=>{
                                
                                return(
                                    <div key={i}>
                                        <IdentifierModificationCard refresh={initIdentifiers} subcategories={subcategories as ISubcategory[]|undefined} identifier={identifier!} index={i} />
                                    </div>
                                )
                            })
                        }  
                    </motion.div>
                </motion.div>

                <motion.div className={`${styles.sectionCtn}`}>

                    <motion.h5
                        className={`${styles.subheader}`}
                    >
                        Subcategories
                    </motion.h5>

                    <motion.div className={`${styles.cardCtn}`}>
                    {
                        subcategories?.map((identifier,i:number)=>{
                            
                            return(
                                <div key={i}>
                                    <IdentifierModificationCard refresh={initIdentifiers} subcategories={subcategories as ISubcategory[]|undefined} identifier={identifier!} index={i} />
                                </div>
                            )
                        })
                    }
                    </motion.div>
                </motion.div>
        </motion.div>
    )
}



export default IdentifierModificationModule;