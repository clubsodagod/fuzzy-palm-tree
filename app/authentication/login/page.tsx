'use client'
import { AppContainer, LoginProtection, SectionWrapper } from '@/app/_components';
import React, { RefObject, useRef } from 'react';
import styles from '../_components/styles.module.css';
import LoginForm from '../_components/login/LoginForm';

const LoginPage = () => {

    const bodyRef = useRef<HTMLDivElement>(null)
  return (
    <AppContainer
    ctnRef={bodyRef}>
      <SectionWrapper>
            <h3
            className={`header ${styles.header}`}
            >
                Welcome back!
            </h3>
            <h6 
            className={` subheader ${styles.subheader}`}
            >
                Login to explore everything the <span className={`${styles.pearlBoxText} pearlBoxText`}>Pearl Box</span> community has to <span className={`${styles.gradientTextOne} gradientTextOne`}>offer</span> you.
            </h6>
            <LoginForm />
      </SectionWrapper>
    </AppContainer>
  )
}

export default LoginProtection(LoginPage)