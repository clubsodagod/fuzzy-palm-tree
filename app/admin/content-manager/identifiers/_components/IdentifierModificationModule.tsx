import React, { useEffect } from 'react'
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { ICategory } from '@/library/db/models/category';
import { ISubcategory } from '@/library/db/models/subcategory';
import IdentifierModificationCard from './IdentifierModificationCard';

const IdentifierModificationModule: React.FC<{
    identifiers:ICategory[]|ISubcategory[]|null|undefined;
    subcategories?:ISubcategory[]|null;
    refresh:any;
}> = ({
    identifiers, subcategories, refresh,
}) => {
    
    

    useEffect(()=>{
        {
            identifiers && identifiers;
            
        }
    }, [identifiers])

    return (
        <motion.div
            className={`${styles.identifierModificationModuleWrapper}`}
        >

            {
                identifiers?.map((identifier,i:number)=>{
                    
                    return(
                        <div key={i}>
                            <IdentifierModificationCard refresh={refresh} subcategories={subcategories as ISubcategory[]|undefined} identifier={identifier} index={i} />
                        </div>
                    )
                })
            }
        </motion.div>
    )
}



export default IdentifierModificationModule;