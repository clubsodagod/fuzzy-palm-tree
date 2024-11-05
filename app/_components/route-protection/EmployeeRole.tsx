'use client'
import { useMDSession } from '@/app/_context/sub-context/SessionContext';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import PageContainer from '../common/PageContainer';
import { motion } from 'framer-motion';
import styles from './styles.module.css'


const EmployeeRoleProtection = (WrappedComponent: React.ElementType) => {


    return function EmployeeProtection (props:any) {

        const {
            isAuthenticated, session, status
        } = useMDSession();
        
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
        },[isAuthenticated]);


        if (status === 'loading') {
            return (
                <PageContainer>

                    <motion.div
                        className={`${styles.loadingCtn}`}
                    >
                        <h5>
                            Authenticating credentials...
                        </h5>
                    </motion.div>
                </PageContainer>
            )
        } else if (status === 'unauthenticated') {
            return redirect('/authentication/login')
        }

        return <WrappedComponent {...props} />


    }
}



export default EmployeeRoleProtection;