'use client'
import { AppContainer, LoginProtection, SectionWrapper } from '@/app/components'
import React, { useRef } from 'react'
import RegisterForm from '../_components/register/RegisterForm';
import styles from '../_components/styles.module.css'


const RegisterPage = () => {

    const bodyRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer
        ctnRef={bodyRef}>
            
            <SectionWrapper>
                <h3
                className={`${styles.header} header`}
                >
                    Join Today!
                </h3>
                <h6 
                className={`${styles.subheader} subheader`}
                >
                    Explore the many benefits of the <span className={`${styles.mastermind} mastermind`}>Mastermind</span> principle with the <span className={`${styles.pearlBoxText} pearlBoxText`}>Pearl Box</span> community.
                </h6>
                <RegisterForm />
            </SectionWrapper>
        </AppContainer>
    )
}

export default LoginProtection(RegisterPage)