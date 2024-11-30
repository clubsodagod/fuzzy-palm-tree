'use client'
import { PageContainer } from '@/app/_hide/_components';
import React from 'react';
import styles from '../../../styles.module.css';
import { motion } from 'framer-motion';
import CreationModule from '../_components/IdentifiersCreationModule';

const page = () => {
    return (
        <PageContainer>
            <motion.div
                className={`${styles.adminSectionWrapper} adminSectionWrapper`}
            >
                <motion.div
                    className={`${styles.headerCtn} headerCtn`}
                >
                    <h3>
                        Create Identifiers
                    </h3>

                    <h5 className={`${styles.subheader} admin-subheader`}>
                        Get as specific as you like!
                    </h5>
                </motion.div>

                <CreationModule />
            </motion.div>
        </PageContainer>
    )
}

export default page