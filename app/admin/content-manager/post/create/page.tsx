'use client'
import { AppContainer, PageContainer } from '@/app/components';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RichTextEditor } from '../_components';
import {  connectToMongoDB } from '@/library/db/db';
import styles from '../_components/styles.module.css';
import { Button } from '@mui/material';
import { useScreenContext } from '@/app/context/sub-context/ScreenContext';

const CreatePostsPage = () => {

    // access screenContext for current breakpoint
    const {currentBreakpoint} = useScreenContext();

    // initialize state objects for editor and preview mode
    const [editorMode, setEditorMode] = useState<boolean>(true);
    
    useEffect(()=> {
        {currentBreakpoint && currentBreakpoint}
    }, [currentBreakpoint])
    
    return (
        <PageContainer>
            <motion.div
                className={`${styles.adminSectionWrapper} adminSectionWrapper`}
            >
                {
                    editorMode
                    ? (
                        <motion.div
                            className={`${styles.headerCtn} headerCtn`}
                        >
                            <h4>
                                Publish an Article
                            </h4>

                            <h5 className={`${styles.subheader} admin-subheader`}>
                                Allow life, knowledge and experience to guide your key strokes.
                            </h5>

                        </motion.div>                        
                    )
                    : null
                }


                {/* mobile* button group : editor mode | preview mode */}
                {
                    currentBreakpoint !== 'xs'  ?
                    <motion.div className={`${styles.editPreviewCtn}`}>
                        {
                            editorMode
                            ? <Button disabled variant='contained' className={`${styles.roundedBtn} roundedBtn` }>Editor</Button>
                            :(
                                <Button 
                                    variant='contained' 
                                    className={`${styles.roundedBtn} roundedBtn`} 
                                    onClick={()=>{setEditorMode(!editorMode);}}
                                >Editor
                                </Button>
                            )
                        }
                        {
                            !editorMode
                            ? <Button disabled variant='contained' className={`${styles.roundedBtn} roundedBtn`}>Preview</Button>
                            :(
                                <Button 
                                variant='contained' 
                                className={`${styles.roundedBtn} roundedBtn`} 
                                onClick={()=>{setEditorMode(!editorMode);}}
                                >
                                    Preview
                                </Button>
                            )
                        }
                    </motion.div>    
                    :
                    null                
                }

                <RichTextEditor editorMode={editorMode} />
                
            </motion.div>
        </PageContainer>
    )
}

export default CreatePostsPage