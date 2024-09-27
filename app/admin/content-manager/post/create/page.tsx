'use client'
import { AppContainer, PageContainer } from '@/app/components';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RichTextEditor } from '../_components';
import { connectToMongoDB } from '@/library/db/db';
import styles from '../_components/styles.module.css';
import { Button } from '@mui/material';
import { useScreenContext } from '@/app/context/sub-context/ScreenContext';

const CreatePostsPage = () => {

    // access screenContext for current breakpoint
    const { currentBreakpoint } = useScreenContext();

    // initialize state objects for editor and preview mode
    const [editorMode, setEditorMode] = useState<boolean>(true);
    const [submittable, setSubmittable] = useState<boolean>(false);

    const handleSetSubmittable = (value:boolean) => {
        setSubmittable(value);
    }

    useEffect(() => {
        { currentBreakpoint && currentBreakpoint }
    }, [currentBreakpoint])

    useEffect(()=>{
        {
            submittable && console.log(submittable);
        }
    },[submittable])

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
                    currentBreakpoint !== 'xs' ?
                        <motion.div className={`${styles.editPreviewCtn}`}>
                            {
                                editorMode
                                    ? <Button disabled variant='contained' className={`${styles.roundedBtn} roundedBtn`}>Editor</Button>
                                    : (
                                        <Button
                                            variant='contained'
                                            className={`${styles.roundedBtn} roundedBtn`}
                                            onClick={() => { setEditorMode(!editorMode); }}
                                        >Editor
                                        </Button>
                                    )
                            }
                            {
                                !editorMode
                                    ? (
                                        <>
                                            <motion.div>
                                                <Button disabled variant='contained' className={`${styles.roundedBtn} roundedBtn`}>
                                                    Preview
                                                </Button>
                                            </motion.div>

                                            {
                                                submittable ?
                                                <motion.div>
                                                    <Button
                                                        color='success'
                                                        variant='contained'
                                                        className={`${styles.roundedBtn} roundedBtn`}
                                                        onClick={() => { console.log(submittable);
                                                        }}
                                                    >
                                                        Submit
                                                    </Button>
                                                </motion.div>
                                                :
                                                <motion.div>
                                                    <Button
                                                        color='success'
                                                        variant='contained'
                                                        className={`${styles.roundedBtn} roundedBtn`}
                                                        disabled
                                                    >
                                                        Submit
                                                    </Button>
                                                </motion.div>                                       
                                            }

                                        </>


                                    )
                                    : (
                                        <>
                                            <motion.div>
                                                <Button
                                                    variant='contained'
                                                    className={`${styles.roundedBtn} roundedBtn`}
                                                    onClick={() => { setEditorMode(!editorMode); }}
                                                >
                                                    Preview
                                                </Button>
                                            </motion.div>
                                        </>

                                    )
                            }
                        </motion.div>
                        :
                        null
                }

                <RichTextEditor editorMode={editorMode}  setSubmittable={handleSetSubmittable} />

            </motion.div>
        </PageContainer>
    )
}

export default CreatePostsPage