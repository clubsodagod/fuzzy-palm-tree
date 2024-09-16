import React from 'react'
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { ICategory } from '@/library/db/models/category';
import { ISubcategory } from '@/library/db/models/subcategory';
import IdentifierModificationCard from './IdentifierModificationCard';

const IdentifierModificationModule: React.FC<{
    identifiers:ICategory[]|ISubcategory[]|null|undefined;
    subcategories?:ISubcategory[]|null;
}> = ({
    identifiers, subcategories
}) => {
    console.log(identifiers);
    

    // i

    return (
        <motion.div
            className={`${styles.identifierModificationModuleWrapper}`}
        >

            {
                identifiers?.map((identifier,i:number)=>{
                    
                    return(
                        <div key={i}>
                            <IdentifierModificationCard subcategories={subcategories} identifier={identifier} index={i} />
                        </div>
                    )
                })
            }
        </motion.div>
    )
}



export default IdentifierModificationModule;