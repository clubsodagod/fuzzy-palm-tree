'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';


const IdentifiersActions: React.FC<{
    open:boolean;
    setOpen: (arg0:boolean)=>void;
    handleSubmit:()=>void;
}> = ({open, setOpen, handleSubmit}) => {


    useEffect(()=>{
        {open&&open}
    },[open])

    return (
        <motion.div className={`${styles.actionsCtn}`}>
            {
                !open&&
                <Button onClick={()=>{setOpen(!open)}} variant='contained' color='warning' className={`${styles.actionsBtn}`}>Edit</Button>
            }

            {
                open&&
                <>
                    <Button onClick={()=>{handleSubmit()}} variant='contained' color='warning' className={`${styles.actionsBtn}`}>Update</Button>
                    <Button onClick={()=>{setOpen(!open)}} variant='contained' color='error' className={`${styles.actionsBtn}`}>Delete</Button> 
                    <Button onClick={()=>{setOpen(!open)}} variant='outlined' color='secondary' className={`${styles.actionsBtn}`}>Cancel</Button>                
                </>
            }


        </motion.div>
    )
}



export default IdentifiersActions;