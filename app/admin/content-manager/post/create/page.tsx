'use client'
import { AppContainer, PageContainer } from '@/app/components';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RichTextEditor } from '../_components';
import {  connectToMongoDB } from '@/library/db/db';

const CreatePostsPage = () => {


    
    return (
        <PageContainer>
            <motion.div>
                <RichTextEditor />
            </motion.div>
        </PageContainer>
    )
}

export default CreatePostsPage