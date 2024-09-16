import { useMDSession } from '@/app/context/sub-context/SessionContext';
import { redirect } from 'next/navigation';
import React, { ReactElement, useEffect } from 'react'


const loginProtection = (WrappedComponent: React.ElementType) => {


    return function LoginProtection (props:any) {

        const {
            isAuthenticated,
        } = useMDSession();
        
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