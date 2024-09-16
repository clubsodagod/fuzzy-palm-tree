'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles.module.css';
import { CategoryDocumentType, ICategory } from '@/library/db/models/category';
import { Avatar, Chip, TextField } from '@mui/material';
import { ISubcategory } from '@/library/db/models/subcategory';
import mongoose, { ObjectId } from 'mongoose';
import IdentifiersActions from './IdentifiersActions';

const IdentifierModificationCard:React.FC<{
    identifier:ICategory|ISubcategory;
    subcategories?:ISubcategory[]|null; 
    index:number;
}> = ({identifier, index, subcategories}) => {

    // initialize state variables
    const [clicked, setClicked] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [newSubcategories, setSubcategories] = useState<ISubcategory[]|undefined>(undefined);
    const [identifierDocument, setIdentifierDocument] = useState<CategoryDocumentType|Partial<CategoryDocumentType|null>>(null);
    const [subcategory, setSubcategory] = useState<CategoryDocumentType|Partial<CategoryDocumentType|null>>({});
    const [update, setUpdate] = useState<boolean>(false);
    const [inclusiveSubcategories, setInclusiveSubcategories] = useState<ISubcategory[]|[]|null>([]);
    const [noninclusiveSubcategories, setNoninclusiveSubcategories] = useState<ISubcategory[]|[]|null>([]);


    // Function to filter and set the inclusive subcategories
    const handleInclusiveSubcategories = (subcategories: ISubcategory[], category: ICategory) => {
        if (!category.subcategories || subcategories.length === 0) return;
    
        // Filter subcategories that are included in category.subcategories
        const inclusive = subcategories.filter((subcategory) =>
            category.subcategories.some((subId) => subId.toString() === subcategory._id) // Match ObjectIds
        );
    
        // Filter subcategories that are NOT included in category.subcategories
        const noninclusive = subcategories.filter((subcategory) =>
            !category.subcategories.some((subId) => subId.toString() === subcategory._id) // Match ObjectIds
        );
    
        // Set the filtered inclusive and noninclusive subcategories to state
        setInclusiveSubcategories(inclusive);
        setNoninclusiveSubcategories(noninclusive);
    };

    // Type guard function to check if identifier is ICategory
    const isCategory = (identifier: ICategory | ISubcategory): identifier is ICategory => {
        return 'subcategories' in identifier;
    }

    // get all subcategories
    const initSubcategories = async () => {
        try {
            const data = await fetch('/api/blog/identifiers/subcategory/get-all', {
                method:"GET",
            })

            const scs = await data.json();

            setSubcategory(scs.subcategories)
            
        } catch (error) {
            console.log(error);
        }
    }

    // open 
    const handleClick = (identifier:ICategory|ISubcategory) => {
        if (isCategory(identifier)) {
            // Logic for ICategory
            console.log('Handling category:', identifier);
            const sc = identifier.subcategories;
            console.log(sc);
            
            setSubcategories(sc as unknown as ISubcategory[]|undefined)
            setTimeout(()=>{
                setClicked(!clicked);
            },200)
        } else {
            // Logic for ISubcategory
            console.log('Handling subcategory:', identifier);
        }
    }

    // Function to map and populate fields in state
    const handlePopulateFields = async () => {
        try {
            console.log(identifier);
            
            // Map through properties of the document and update the state
            setIdentifierDocument((prevState) => ({
                ...prevState,
                _id: identifier._id,
                name: identifier.name,
                slug: identifier.slug,
                tagline: identifier.tagline,
                description: identifier.description,
                photo: identifier.photo,
                video: identifier.video,
            }));

        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };

    // Add a new subcategory ObjectId to the array
    const handleAddSubcategory = (newSubcategoryId: string) => {
        setIdentifierDocument((prevState) => ({
            ...prevState,
            subcategories: [...(prevState?.subcategories || []), newSubcategoryId], // Add new ObjectId to the array
        }));
    };

    // Remove a subcategory ObjectId from the array
    const handleRemoveSubcategory = (subcategoryIdToRemove: string) => {
        setIdentifierDocument((prevState) => ({
            ...prevState,
            subcategories: (prevState?.subcategories || []).filter(
                (id) => id.toString() !== subcategoryIdToRemove.toString() // Filter out the ObjectId to be removed
            ),
        }));
    };

    // Function to map ObjectIds to Subcategory documents (optional)
    const populateSubcategories = async () => {
        try {
            const populatedCategory = await mongoose.model('Category').findById(identifierDocument?.id)
                .populate('subcategories')
                .exec();

            setSubcategories(populatedCategory.subcategories as ISubcategory[]);
        } catch (error) {
            console.error('Error populating subcategories:', error);
        }
    };

    // handle submission of identifier update document
    const handleSubmit = async() => {
        try {
            // Check if the identifierDocument is valid before submission (optional)
            if (!identifierDocument) {
                console.error('No identifier document to update.');
                return;
            }
    
            // If the identifier is a category, proceed with the API call
            if (isCategory(identifier)) {
                const response = await fetch(`/api/blog/identifiers/category/update/${identifier.slug}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ category: identifierDocument }) // Stringify the identifierDocument
                });
    
                // Check if the response is successful
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error updating category:', errorData.message);
                    return;
                }
    
                // Handle successful update
                const data = await response.json();
                console.log('Category updated successfully:', data);
            } else if (!isCategory(identifier)) {
                const response = await fetch(`/api/blog/identifiers/subcategory/update/${identifier.slug}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ subcategory: identifierDocument }) // Stringify the identifierDocument
                });
    
                // Check if the response is successful
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error updating subcategory:', errorData.message);
                    return;
                }
    
                // Handle successful update
                const data = await response.json();
                console.log('Subcategory updated successfully:', data);
            } else {
                console.error('Identifier is not a category or subcategory.');
            }
            
        } catch (error) {
            // Catch and log any errors that occur during submission
            console.error('Error during submission:', error);
        }
    };

    // useEffect to trigger the fetching of the document on page load
    useEffect(() => {
        handlePopulateFields();
        initSubcategories();
        populateSubcategories();
    }, []); // Empty dependency array means this runs only on component mount

    useEffect(()=>{
        {identifierDocument && console.log(identifierDocument);
        }
        {
            subcategories && console.log(subcategories);
            
        }
    }, [identifierDocument]);

    useEffect(()=>{
        {
            if (subcategories && identifier) {
                if(noninclusiveSubcategories?.length === 0 ) {
                    handleInclusiveSubcategories(subcategories, identifier as ICategory);
                    console.log(noninclusiveSubcategories);
                }
            }    
        }
        {noninclusiveSubcategories&&noninclusiveSubcategories}
    },[noninclusiveSubcategories]);

    return (
        <motion.div
            className={`${styles.identifierCardModWrapper}`}
            id={`${identifier._id}`}
            onClick={()=>{if(clicked){return}; handleClick(identifier); console.log(subcategories);
            }}
        >

            <motion.div
            className={`${styles.imgWrapper}`}
            >
                <motion.img
                    alt={`Image for category representing ${identifier.description}`}
                    src={identifier.photo.portrait}
                    className={`${styles.identifierModCardImg}`}
                    onClick={()=>{handleClick(identifier)}}
                />
            </motion.div>

            <motion.div>
                <motion.p className={`${styles.identifierCardNameText}  `}>{identifierDocument?.name ? identifierDocument.name : identifier.name}</motion.p>
            </motion.div>


            {
                clicked && 
                <>

                {
                    !open &&
                    <motion.div>
                        <motion.h6>
                            {identifierDocument?.tagline}
                        </motion.h6>
                        <motion.p>
                            {identifierDocument?.description}
                        </motion.p>
                        <motion.div
                            className={`${styles.subcategoriesCtn}`}
                        >
                            {
                                subcategories&&subcategories.length===0&&
                                <>
                                
                                <Chip variant="outlined" color="primary" label={'subcategory'} avatar={<Avatar src="/static/images/avatar/1.jpg" />} />


                                    {
                                        subcategories.map((sc:ISubcategory,i)=>{
                                            return(
                                                <Chip variant="outlined" color="primary" label={sc.name} avatar={<Avatar src="/static/images/avatar/1.jpg" />} />
                                            )
                                        })
                                    }
                                </>

                            }
                        </motion.div>
                    </motion.div>                    
                }

                {
                    open &&
                    <motion.div className={`${styles.clickedCtnWrapper}`}>

                        <motion.form
                        className={`${styles.clickedIdentifierForm}`}
                        >

                            <TextField 
                                className={`${styles.inputField}`} 
                                label={`Name`} 
                                name={`name`}
                                value={identifierDocument?.name}
                                onChange={()=>{}}
                            />
                            <TextField 
                                className={`${styles.inputField}`} 
                                label={`Tagline`} 
                                name={`tagline`}
                                multiline
                                rows={2}
                                value={identifierDocument?.tagline}
                            />
                            <TextField 
                                className={`${styles.inputField}`} 
                                label={`Description`} 
                                multiline
                                rows={4}
                                name={`description`}
                                value={identifierDocument?.description}
                            />

                            <motion.div className={`${styles.photoInputCtn}`}>

                                <motion.h6>Photo</motion.h6>
                                <motion.div
                                className={`${styles.photoInputElementWrapper}`}
                                >
                                    <TextField 
                                        className={`${styles.inputField}`} 
                                        label={`Portrait photo`} 
                                        name={`portrait`}
                                        value={identifierDocument?.photo?.portrait}
                                    />

                                    <TextField 
                                        className={`${styles.inputField}`} 
                                        label={`Landscape photo`} 
                                        name={`landscape`}
                                        value={identifierDocument?.photo?.landscape}
                                    />                                
                                </motion.div>

                            </motion.div>

                            <motion.div className={`${styles.photoInputCtn}`}>

                                <motion.h6>Video</motion.h6>
                                <motion.div
                                className={`${styles.photoInputElementWrapper}`}
                                >
                                    <TextField 
                                        className={`${styles.inputField}`} 
                                        label={`Portrait Video`} 
                                        name={`portrait`}
                                        value={identifierDocument?.video?.portrait}
                                    />

                                    <TextField 
                                        className={`${styles.inputField}`} 
                                        label={`Landscape Video`} 
                                        name={`landscape`}
                                        value={identifierDocument?.video?.landscape}
                                    />                                
                                </motion.div>

                            </motion.div>
                        </motion.form>
                        <motion.div
                            className={`${styles.subcategoriesCtn}`}
                        >
                            {
                                inclusiveSubcategories && inclusiveSubcategories.length > 0 &&
                                        inclusiveSubcategories.map((sc:ISubcategory,i)=>{
                                            return(
                                                <Chip key={`${i} removable chip`} variant="outlined" onClick={()=>{handleRemoveSubcategory(sc._id as string)}} color="error" label={sc.name} avatar={<Avatar src={`${sc.photo.landscape}`} />} />
                                            )
                                        })

                            }
                            {
                                noninclusiveSubcategories && noninclusiveSubcategories.length > 0 &&
                                        noninclusiveSubcategories.map((sc:ISubcategory,i)=>{
                                            return(
                                                <Chip key={`${i} addable chip`} variant="outlined" onClick={()=>{handleAddSubcategory(sc._id as string)}} color="success" label={sc.name} avatar={<Avatar src={`${sc.photo.landscape}`} />} />
                                            )
                                        })

                            }
                        </motion.div>

                    </motion.div>                          
                }

                <IdentifiersActions 
                    open={open} 
                    setOpen={setOpen} 
                    handleSubmit={handleSubmit}
                />                     
                </>

            }


        </motion.div>
    )
}

export default IdentifierModificationCard;