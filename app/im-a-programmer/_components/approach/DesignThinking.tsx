'use client'
import React from 'react'
import { PageWrapper } from '@/app/components'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'

const DesignThinking:React.FC<{}> = () => {
  return (
      <PageWrapper id='design-thinking'>

          <motion.div 
          className={`${styles.topHeroCtn} top-hero-ctn`}
          >

              <motion.h1 className={`${styles.header} header`} >
                  Design Thinking
              </motion.h1>
              <motion.h2 className={`${styles.subheader} subheader`} >
                  Empathy-Driven Design for User-Centric Solutions
              </motion.h2>
          </motion.div>
          
      </PageWrapper>
  )
}

export default DesignThinking