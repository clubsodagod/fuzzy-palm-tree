'use client'
import { useAppContext } from '@/app/_context/AppContext';
import { redirect } from 'next/navigation';
import React, { ReactElement, useEffect } from 'react'


const loginProtection = (WrappedComponent: React.ElementType) => {


    return function LoginProtection (props:any) {

        const {
            session:{isAuthenticated},
        } = useAppContext();
        
        useEffect(()=>{
            if(isAuthenticated){
                return redirect("/")
            }
            if (isAuthenticated===null) {
                return
            }
        },[isAuthenticated]);



        return <WrappedComponent {...props} />


    }
}



export default loginProtection;