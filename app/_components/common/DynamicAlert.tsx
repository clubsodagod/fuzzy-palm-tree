'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { Alert } from '@mui/material';


const DynamicAlert: React.FC<{status:number, message:string}> = ({status, message}) => {

    const handleAlert = (status:number, message:string) => {
        console.log(status);
        
        switch (status) {
            case 200:
                
                return (
                    <Alert  severity="success">
                        {message}
                    </Alert>  
                )
        
            case 500:
                
                return (
                    <Alert  severity="error">
                        {message}
                    </Alert>  
                )

            default:
                
                return (
                    <div className='h-full w-full'/>
                )
        }
    }

    useEffect(()=>{
        {status && status}
        {message && message}
    }, [status, message])

  return (
    <>
    {handleAlert(status, message)}
    </>
  )
}



export default DynamicAlert;