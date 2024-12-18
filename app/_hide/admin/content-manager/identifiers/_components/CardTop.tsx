import React from 'react'
import styles from '../../../styles.module.css'
import { CategorySubcategoriesType, handleClick } from '@/utility/admin/identifiers';
import { motion } from 'framer-motion';
import { ISubcategory } from '@/app/_database/models/subcategory';
import { ICategory } from '@/app/_database/models/category';



const CardTop: React.FC<{
    identifierDocument:any;
    identifier:ICategory|ISubcategory;
    setClicked:(arg0:boolean)=>void;
    clicked:boolean;
}> = ({
    identifierDocument,
    identifier,
    setClicked,
    clicked
}) => {

    return (
        <>
            <motion.div
            className={`${styles.imgWrapper}`}
            >
                <motion.img
                    alt={`Image for category representing ${identifier.description}`}
                    src={identifier.photo.portrait}
                    className={`${styles.identifierModCardImg}`}
                    onClick={()=>{handleClick(identifier,setClicked,clicked)}}
                />
            </motion.div>

            <motion.div
            className={`${styles.nameWrapper}`}
            >
                <motion.p className={`${styles.identifierCardNameText}  `}>{identifierDocument?.name ? identifierDocument.name : identifier.name}</motion.p>
            </motion.div>
        </>
    )
}



export default CardTop;