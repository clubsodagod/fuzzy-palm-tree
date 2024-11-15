'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { CategorySubcategoriesType, handleInclusiveSubcategories } from '@/utility/admin/identifiers';
import { ICategory } from '@/app/_database/models/category';
import { ISubcategory } from '@/app/_database/models/subcategory';



const IdentifiersActions: React.FC<{
    open:boolean;
    setOpen: (arg0:boolean)=>void;
    handleSubmit:()=>void;
    identifier:ICategory;
    refresh:any;
    inclusive:ISubcategory[]|undefined;
    noninclusive:ISubcategory[]|undefined;
    setInclusive:(arg0:any)=>void;
    setNoninclusive:(arg0:any)=>void;
}> = ({
    open, 
    setOpen, 
    handleSubmit,
    identifier,
    refresh,
}) => {


    useEffect(()=>{
        {open&&open}
        {identifier && identifier}
    },)

    const handleRefresh = async() => {
        await refresh();
    }

    return (
        <motion.div className={`${styles.actionsCtn}`}>
            {
                !open&&
                <Button onClick={()=>{setOpen(!open)}} variant='contained' color='warning' className={`${styles.actionsBtn}`}>Edit</Button>
            }

            {
                open&&
                <>
                    <Button onClick={()=>{handleSubmit();}} variant='contained' color='warning' className={`${styles.actionsBtn}`}>Update</Button>
                    <Button onClick={()=>{setOpen(!open)}} variant='contained' color='error' className={`${styles.actionsBtn}`}>Delete</Button> 
                    <Button onClick={()=>{setOpen(!open)}} variant='outlined' color='secondary' className={`${styles.actionsBtn}`}>Cancel</Button>                
                </>
            }


        </motion.div>
    )
}



export default IdentifiersActions;