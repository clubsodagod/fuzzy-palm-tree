'use client'
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useAppContext } from '@/app/_context/AppContext';
import MotionPageWrapper from '../common/MotionPageWrapper';
import { MotionDiv } from '../common/framer/MotionDiv';


const EmployeeRoleProtection = (WrappedComponent: React.ElementType) => {


    return function EmployeeProtection (props:any) {

        const {
            session:{isAuthenticated, session, status}
        } = useAppContext();
        
        useEffect(()=>{
            if (status === "loading") {
                return
            } else if (status === "authenticated") {
                if (session?.user?.role === "user") {
                    return redirect('/')
                } else if (session?.user?.role === "admin" || session?.user?.role === "employee") {
                    return
                }
            }
        },[isAuthenticated, session?.user?.role, status]);


        if (status === 'loading') {
            return (
                <MotionPageWrapper>

                    <MotionDiv
                        className={`${styles.loadingCtn}`}
                    >
                        <h5>
                            Authenticating credentials...
                        </h5>
                    </MotionDiv>
                </MotionPageWrapper>
            )
        } else if (status === 'unauthenticated') {
            return redirect('/authentication/login')
        }

        return <WrappedComponent {...props} />


    }
}



export default EmployeeRoleProtection;