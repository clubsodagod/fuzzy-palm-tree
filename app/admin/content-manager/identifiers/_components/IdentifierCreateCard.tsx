import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { CategoryDocumentType, ICategory } from '@/library/db/models/category';
import { ISubcategory, SubcategoryDocumentType } from '@/library/db/models/subcategory';
import { categoryFormDocument, subcategoryFormDocument } from '@/library/const/forms/identifiers';


const IdentifierCreateCard: React.FC<{
    preview?: boolean;
    setPreview?: (arg0: boolean) => void;
    category?: boolean;
}> = ({
    preview,
    setPreview,
    category,
}) => {

    const [cD, setCategoryDocument] = useState<Partial<CategoryDocumentType>>({});
    const [sD, setSubcategoryDocument] = useState<Partial<SubcategoryDocumentType>>({});
    const [subcategories, setSubcategories] = useState<Partial<ISubcategory[]>>([]);
    const [checkedSubcategory, setCheckedSubcategory] = useState<Partial<string[]>>([]);
    const [submittable, setSubmittable] = useState<boolean>(true);


    // Initialize the category document with default values
    const initCategoryDocument = () => {
        const initialCategoryDoc: Partial<CategoryDocumentType> = {};
    
        categoryFormDocument.forEach((field) => {
            const key = field?.key as keyof CategoryDocumentType;
    
            // Assign appropriate default values based on the field type
            if (key === 'name' || key === 'tagline' || key === 'description') {
                initialCategoryDoc[key] = '' as CategoryDocumentType[typeof key]; // String fields
            } else if (key === 'subcategories') {
                initialCategoryDoc[key] = [] as CategoryDocumentType[typeof key]; // Array fields
            } else if (key === 'photo') {
                initialCategoryDoc[key] = { portrait: '', landscape: '' } as CategoryDocumentType[typeof key]; // Object (Photo)
            } else if (key === 'video') {
                initialCategoryDoc[key] = { portrait: '', landscape: '' } as CategoryDocumentType[typeof key]; // Object (Video)
            }
        });
    
        setCategoryDocument(initialCategoryDoc);
    };

    // Initialize the subcategory document with default values
    const initSubcategoryDocument = () => {
        const initialSubcategoryDoc: Partial<SubcategoryDocumentType> = {};
    
        subcategoryFormDocument.forEach((field) => {
            const key = field?.key as keyof SubcategoryDocumentType;
    
            // Assign appropriate default values based on the field type
            if (key === 'name' || key === 'tagline' || key === 'description') {
                initialSubcategoryDoc[key] = '' as SubcategoryDocumentType[typeof key]; // String fields
            } else if (key === 'photo') {
                initialSubcategoryDoc[key] = { portrait: '', landscape: '' } as SubcategoryDocumentType[typeof key]; // Object (Photo)
            } else if (key === 'video') {
                initialSubcategoryDoc[key] = { portrait: '', landscape: '' } as SubcategoryDocumentType[typeof key]; // Object (Video)
            }
        });
    
        setSubcategoryDocument(initialSubcategoryDoc);
    };

    // initialize subcategories
    const initIdentifiers = async () => {
        const response = await fetch('/api/blog/identifiers/subcategory/get-all',{
            method:"GET",
        });
        const subcategoriesData = await response.json()
        if (subcategoriesData.subcategories) {
            console.log(subcategoriesData);
            setSubcategories(subcategoriesData.subcategories);
        }
        return
    }

    // handle change function
    const handleChange = (
        key: string,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type, id,  } = event.target; // Destructuring event target
        
        // Define the paths for category and subcategory based on ID
        if (category) {
            // If it's a category, check for specific keys like "photo landscape", etc.
            if (["photo", "video",].includes(key)) {
                // Handle photo/video sub-properties

                if(["photo"].includes(key)){
                    setCategoryDocument(prevState => ({
                        ...prevState,
                        photo: {
                            ...prevState.photo,
                            ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                        },
                    }));
                } else {
                    setCategoryDocument(prevState => ({
                        ...prevState,
                        video: {
                            ...prevState.video,
                            ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                        }
                    }));                    
                }

            } else {
                // Handle other fields for CategoryDocumentType
                setCategoryDocument((prevState) => ({
                    ...prevState,
                    [name]: value
                }))
            }
        } else {
            // If it's a subcategory, check for the same keys

            if (["photo", "video",].includes(key)) {
                // Handle photo/video sub-properties

                if(["photo"].includes(key)){
                    setSubcategoryDocument(prevState => ({
                        ...prevState,
                        photo: {
                            ...prevState.photo,
                            ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                        },
                    }));
                } else {
                    setSubcategoryDocument(prevState => ({
                        ...prevState,
                        video: {
                            ...prevState.video,
                            ...(name.includes("landscape") ? { landscape: value } : { portrait: value })
                        }
                    }));                    
                }

            } else {
                // Handle other fields for SubcategoryDocumentType
                setSubcategoryDocument((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
            }
        }
    };
    
    // handle submit
    const handleSubmit = async() => {
        
        let response 
        // check if category or subcategory document
        if(category){

            // validate fields

            // send fetch request to api
            response = await fetch("/api/blog/identifiers/category/create",{
                body:JSON.stringify({category:cD}),
                method:"POST",
            });
            // check response status
            if (response.ok) {
                const data = await response.json()
                initIdentifiers();
                return data.category;
            } else {
                const data = await response.json()
                return data
            }
        } else {

            // validate fields


            // send fetch request to api
            response = await fetch("/api/blog/identifiers/subcategory/create",{
                body:JSON.stringify({subcategory:sD}),
                method:"POST"
            });
            // check response status
            if (response.ok) {
                const data = await response.json()
                initIdentifiers();
                return data.subcategory;
            } else {
                const data = await response.json()
                return data
            }
        }

                
    }

    // handle subcategory toggle
    const handleSubcategoryToggle = (t:any) => () => {
        const clickedSubcategory = cD?.subcategories?.indexOf(t)
        if (cD.subcategories) {
        const all = [...cD.subcategories]

        if(clickedSubcategory === -1) {
            all.push(t)
        } else {
            all.splice(clickedSubcategory!, 1)
        }
        console.log(all);
        setCategoryDocument((pF:any)=>({
            ...pF,
            subcategories:all
        }))
    }
    };

    useEffect(()=> {
        initCategoryDocument();
        initSubcategoryDocument();
        initIdentifiers();
    },[]);

    useEffect(()=>{
        {
            subcategories && console.log(subcategories);
        }
    },[subcategories])

    useEffect(()=>{
        {
            cD && console.log(cD);
        }
    },[cD])

    useEffect(()=>{
        {
            sD && console.log(sD);
        }
    },[sD])

    return (
        <motion.div className={`${styles.createIdentifierCardWrapper}`}>

                {   
                    category &&
                    <motion.form className={`${styles.identifierForm}`}>
                        {categoryFormDocument.map((cf, i) => {
                            
                            if (cf && cf.type === "text" && cf.key in cD!) { // Type narrowing to ensure cf is not undefined

                                if (["photo", "video",].some(k => cf.key.includes(k))) {
                                    return (
                                        <TextField
                                            fullWidth
                                            label={cf.label}
                                            name={cf.name as string}  // `name` is narrowed down to string
                                            className={styles.catFormField}
                                            value={cf.key.includes("photo")
                                                ? cD.photo && cD.photo[cf.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                                : cD.video && cD.video[cf.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                            key={`${cf.key} ${cf.name} category`}
                                            id='category'
                                            onChange={(e)=>{handleChange(cf.key,e)}}
                                        />
                                    );
                                } else {
                                    // Handle all other text fields
                                    return (
                                        <TextField
                                            fullWidth
                                            label={cf.label}
                                            name={cf.name as string}  // `name` is narrowed down to string
                                            className={styles.catFormField}
                                            value={cD[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                            key={`${cf.key} ${cf.name} category`}
                                            id='category'
                                            onChange={(e)=>{handleChange(cf.key,e)}}
                                        />
                                    );
                                }
                            } else if (cf && cf.type === "textarea" && cf.key in cD!) {
                                return (
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label={cf.label}
                                        name={cf.name as string}  // `name` is narrowed down to string
                                        className={styles.catFormField}
                                        value={cD && cD[cf.name as keyof CategoryDocumentType]}  // Ensure correct value type
                                        key={`${cf.key} ${i}`}
                                        id='category'
                                        onChange={(e)=>{handleChange(cf.key,e)}}
                                    />
                                );
                            } else if (cf && cf.type === "checkbox" && cf.key in cD! && cf.name === "subcategories") {
                                
                                if(subcategories.length > 0) {
                                    return (
                                        <motion.div 
                                            key={`${cf.key} ${i}`}
                                            className={`${styles.catFormCheckboxWrapper}`}
                                        >
                                            <h5>Subcategories</h5>
                                            <motion.div
                                                className={`${styles.catFormCheckbox}`}
                                            >
                                                {
                                                    subcategories.map((s,i:number)=>{

                                                        // define key name and assert its definition
                                                        const keyName = s?._id!;

                                                        return (
                                                            <FormControlLabel
                                                                id='category'  
                                                                onChange={handleSubcategoryToggle(s?._id)} 
                                                                key={`${keyName}`} 
                                                                control={
                                                                    <Checkbox 
                                                                        size='small'
                                                                        id='category'  
                                                                        checked={cD?.subcategories?.includes(s?._id as unknown as string)} 
                                                                    />
                                                                } 
                                                                label={s?.name} 
                                                            />
                                                        )
                                                    })
                                                }
                                            </motion.div>

                                        </motion.div>  
                                    )                              
                                }
                            } 
                            return null;
                        })}
                    </motion.form>
                }

                {
                    !category &&
                        <motion.form className={`${styles.identifierForm}`}>
                                {subcategoryFormDocument.map((sf, i) => {
                                    
                                    if (sf && sf.type === "text" && sf.key in sD!) { // Type narrowing to ensure cf is not undefined
                                        return (
                                            <TextField
                                                fullWidth
                                                label={sf.label}
                                                name={sf.name as string}  // `name` is narrowed down to string
                                                className={styles.formField}
                                                value={sD && sD[sf.name as keyof SubcategoryDocumentType]}  // Ensure correct value type
                                                key={`${sf.key} ${sf.name} subcategory`}
                                                id='subcategory'
                                                    onChange={(e)=>{handleChange(sf.key,e)}}
                                            />
                                        );
                                    } else if (sf && sf.type === "textarea" && sf.key in sD!) {
                                        return (
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label={sf.label}
                                                name={sf.name as string}  // `name` is narrowed down to string
                                                className={styles.formField}
                                                value={sD && sD[sf.name as keyof SubcategoryDocumentType]}  // Ensure correct value type
                                                key={`${sf.key} ${i}`}
                                                id='subcategory'
                                                onChange={(e)=>{handleChange(sf.key,e)}}
                                            />
                                        );
                                    }
                                    return null;
                                })}      
                        </motion.form>
                }       

                <Button
                    variant="contained"
                    className={`${styles.submitBtn}`}
                    onClick={handleSubmit}
                >
                    Create
                </Button>
        </motion.div>
    )
}



export default IdentifierCreateCard;