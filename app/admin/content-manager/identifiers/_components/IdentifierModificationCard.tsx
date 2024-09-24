'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles.module.css';
import { CategoryDocumentType, ICategory } from '@/library/db/models/category';
import { Avatar, Chip, } from '@mui/material';
import { ISubcategory } from '@/library/db/models/subcategory';
import IdentifiersActions from './IdentifiersActions';
import { handleAddSubcategory, handleClick, handlePopulateFields, handleRemoveSubcategory, handleSubmit, isCategory, } from '@/utility/admin/identifiers';
import CardForm from './IdentifierCardForm';
import ClickedIdentifierInformation from './ClickedIdentiferInfo';
import CardTop from './CardTop';
import { ObjectId } from 'mongoose';

export type ManageAddRemoveSubcategoryFunction = (method:"add"|"remove",subcategoryId:string,category:Partial<ICategory>) => void


const IdentifierModificationCard:React.FC<{
    identifier:ICategory|ISubcategory;
    subcategories:ISubcategory[]|undefined; 
    index:number;
    refresh:()=>Promise<{categories:ICategory[],subcategories:ISubcategory[]}>|null;
}> = ({identifier, index, subcategories, refresh}) => {
    


    // init  inclusive and noninclusive subcategories
    const inclusiveInit = () => {
        if (isCategory(identifier)) { 

            // Type assertion to ICategory since we have already type checked
            const categoryIdentifier = identifier as ICategory;

            const data = subcategories?.filter((subcategory) => 
                categoryIdentifier.subcategories.some((subId) => subId.toString() === subcategory._id));

            return data            
        }
}

    const noninclusiveInit = () => {
        if(isCategory(identifier)){ 

            // Type assertion to ICategory since we have already type checked
            const categoryIdentifier = identifier as ICategory;

            const data = subcategories?.filter((subcategory) => 
                !categoryIdentifier.subcategories.some((subId) => subId.toString() === subcategory._id));
            
            return data            
        }
    }

    
    
    // initialize state variables
    const [clicked, setClicked] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [identifierDocument, setIdentifierDocument] = useState<CategoryDocumentType|Partial<CategoryDocumentType|null>>({});
    const [inclusive, setInclusive] = useState<ISubcategory[]|undefined>(inclusiveInit())
    const [noninclusive, setNoninclusive] = useState<ISubcategory[]|undefined>(noninclusiveInit())
    const [update, setUpdate] = useState<boolean>(false);
    
    // useEffect to trigger the fetching of the document on page load
    useEffect(() => {
        handlePopulateFields(setIdentifierDocument,identifier);
    },[]); 

    const manageAddRemoveSubcategory:ManageAddRemoveSubcategoryFunction = async(method,subcategoryId,category) => {
        switch (method) {
            case "add":
                handleAddSubcategory(subcategoryId,category);
                await refresh()?.then(()=>{
                    handlePopulateFields(setIdentifierDocument,identifier);
                    setUpdate(!update);
                });
                break;
                case "remove":
                    handleRemoveSubcategory(subcategoryId,category);
                    await refresh()?.then((data)=>{
                        handlePopulateFields(setIdentifierDocument,identifier);
                    setUpdate(!update);
                    });
                    break;
        
            default:
                break;
        }
    };

    useEffect(()=> {

        if(update){
            console.log(inclusive, noninclusive, identifierDocument);
            setInclusive(inclusiveInit());
            setNoninclusive(noninclusiveInit());
            setUpdate(!update)
        }
    }, [inclusive, noninclusive,]);

    useEffect(()=>{
        {
            identifier && console.log(identifier);
            setInclusive(inclusiveInit());
            setNoninclusive(noninclusiveInit());
        }
    }, [identifier])

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
                                inclusive={inclusive}
                                noninclusive={noninclusive}
                            />
                    }

                    {
                        open &&
                            <CardForm 
                                identifierDocument={identifierDocument}
                                inclusive={inclusive}
                                noninclusive={noninclusive}
                                manageAddRemoveSubcategory={manageAddRemoveSubcategory}
                            />                         
                    }

                    <IdentifiersActions 
                        open={open} 
                        setOpen={setOpen} 
                        handleSubmit={()=>{handleSubmit(identifier,identifierDocument)}}
                        inclusive={inclusive}
                        noninclusive={noninclusive}
                        identifier={identifier as ICategory}
                        refresh={refresh}
                        setInclusive={setInclusive}
                        setNoninclusive={setNoninclusive}
                    />                     
                </>
            }

            {
                !clicked &&

                <motion.div
                    className={`${styles.subcategoriesCtn}`}
                >
                                {
                                    inclusive?.map((sc:ISubcategory|undefined,i)=>{
                                        return(
                                            <Chip 
                                                key={`${i} : subcategory ${sc?.name}`} 
                                                variant="outlined" color="primary" 
                                                label={sc?.name} 
                                                avatar={<Avatar src={sc?.photo?.portrait} />} 
                                            />
                                        )
                                    })
                                }
                </motion.div>
            }


        </motion.div>
    )
}

export default IdentifierModificationCard;