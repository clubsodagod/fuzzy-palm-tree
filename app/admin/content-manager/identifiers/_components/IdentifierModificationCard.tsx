'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles.module.css';
import { CategoryDocumentType, ICategory } from '@/library/db/models/category';
import { Avatar, Chip, TextField } from '@mui/material';
import { ISubcategory } from '@/library/db/models/subcategory';
import IdentifiersActions from './IdentifiersActions';
import { CategorySubcategoriesType, handleAddSubcategory, handleClick, handleInclusiveSubcategories, handlePopulateFields, handleRemoveSubcategory, handleSubmit, isCategory } from '@/utility/admin/identifiers';
import CardForm from './IdentifierCardForm';
import ClickedIdentifierInformation from './ClickedIdentiferInfo';
import CardTop from './CardTop';



const IdentifierModificationCard:React.FC<{
    identifier:ICategory|ISubcategory;
    subcategories:ISubcategory[]|undefined; 
    index:number;
    refresh:any;
}> = ({identifier, index, subcategories, refresh}) => {

    // initialize state variables
    const [clicked, setClicked] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [newSubcategories, setSubcategories] = useState<CategorySubcategoriesType|Partial<CategorySubcategoriesType>>({all:subcategories});
    const [identifierDocument, setIdentifierDocument] = useState<CategoryDocumentType|Partial<CategoryDocumentType|null>>({});
    const [update, setUpdate] = useState<boolean>(false);
    const [ident, setIdent] = useState<Partial<ICategory|ISubcategory>>(identifier)
    
    // useEffect to trigger the fetching of the document on page load
    useEffect(() => {
        handlePopulateFields(setIdentifierDocument,identifier);
        if(isCategory(identifier)) {
            handleInclusiveSubcategories(newSubcategories,identifier as ICategory,setSubcategories);
        }
    },[]); 

    useEffect(()=> {
        if (update){
            handleInclusiveSubcategories(newSubcategories,identifier as ICategory,setSubcategories);
            setTimeout(()=> {
                console.log(newSubcategories.inclusive);
                
                console.log(newSubcategories.noninclusive);                
            },500)
            setUpdate(!update)
        }
    },[update, newSubcategories.inclusive, newSubcategories.noninclusive])


    return (
        <motion.div
            className={`${styles.identifierCardModWrapper}`}
            id={`${identifier._id}`}
            onClick={()=>{if(clicked){return}; handleClick(identifier,setClicked,clicked);}}
        >

            <CardTop 
                identifier={identifier}
                identifierDocument={identifierDocument}
                setClicked={setClicked}
                clicked={clicked}
            />


            {
                clicked && 
                <>
                    {
                        !open &&
                            <ClickedIdentifierInformation 
                                identifierDocument={identifierDocument}
                                newSubcategories={newSubcategories}
                            />
                    }

                    {
                        open &&
                            <CardForm 
                                identifierDocument={identifierDocument}
                                setIdentifierDocument={setIdentifierDocument}
                                newSubcategories={newSubcategories}
                                setSubcategories={setSubcategories}
                                identifier={identifier as ICategory}
                                refresh={refresh}
                                update={update}
                                setUpdate={setUpdate}
                            />                         
                    }

                    <IdentifiersActions 
                        open={open} 
                        setOpen={setOpen} 
                        handleSubmit={()=>{handleSubmit(identifier,identifierDocument)}}
                        newSubcategories={newSubcategories}
                        setSubcategories={setSubcategories}
                        identifier={identifier as ICategory}
                        refresh={refresh}
                    />                     
                </>
            }

            {
                !clicked &&

                <motion.div
                    className={`${styles.subcategoriesCtn}`}
                >
                    {
                        newSubcategories.inclusive && newSubcategories.inclusive.length > 0 &&
                            <>
                                {
                                    newSubcategories.inclusive.map((sc:ISubcategory,i)=>{
                                        return(
                                            <Chip 
                                                key={`${i} : subcategory ${sc.name}`} 
                                                variant="outlined" color="primary" 
                                                label={sc.name} 
                                                avatar={<Avatar src={sc.photo.portrait} />} 
                                            />
                                        )
                                    })
                                }
                            </>
                    }
                </motion.div>
            }


        </motion.div>
    )
}

export default IdentifierModificationCard;