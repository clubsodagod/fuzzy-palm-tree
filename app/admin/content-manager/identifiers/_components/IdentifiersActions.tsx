'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { CategorySubcategoriesType, handleInclusiveSubcategories } from '@/utility/admin/identifiers';
import { ICategory } from '@/library/db/models/category';


const IdentifiersActions: React.FC<{
    open:boolean;
    setOpen: (arg0:boolean)=>void;
    handleSubmit:()=>void;
    newSubcategories:CategorySubcategoriesType|Partial<CategorySubcategoriesType>;
    setSubcategories:(arg0:any)=>void;
    identifier:ICategory;
    refresh:any
}> = ({
    open, 
    setOpen, 
    handleSubmit,
    setSubcategories,
    identifier,
    newSubcategories, 
    refresh
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
                    <Button onClick={()=>{handleSubmit();handleInclusiveSubcategories(newSubcategories,identifier,setSubcategories);handleRefresh()}} variant='contained' color='warning' className={`${styles.actionsBtn}`}>Update</Button>
                    <Button onClick={()=>{setOpen(!open)}} variant='contained' color='error' className={`${styles.actionsBtn}`}>Delete</Button> 
                    <Button onClick={()=>{setOpen(!open)}} variant='outlined' color='secondary' className={`${styles.actionsBtn}`}>Cancel</Button>                
                </>
            }


        </motion.div>
    )
}



export default IdentifiersActions;