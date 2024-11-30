'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RichTextEditor } from '../_components';
import styles from '../_components/styles.module.css';
import { Button } from '@mui/material';
import { useAppContext } from '@/app/_context/AppContext';
import { BlogDocumentType } from '@/app/_database/models/blog';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import EmployeeRoleProtection from '@/app/_components/route-protection/EmployeeRole';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';

const CreatePostsPage = () => {

    // access screenContext for current breakpoint
    const { screen:{currentBreakpoint} } = useAppContext();

    // initialize state objects for editor and preview mode
    const [editorMode, setEditorMode] = useState<boolean>(true);
    const [submittable, setSubmittable] = useState<boolean>(false);
    const [sending, setSending] = useState<boolean>(false);
    const [progressDocument, setProgressDocument] = useState<Partial<BlogDocumentType>>({});
    const [update,setUpdate] = useState(false);
    const [eRM, setErrorResponseMessage] = useState<{error:boolean, message:string}|undefined>();

    const handleSetSubmittable = (value: boolean) => {
        setSubmittable(value);
    }

    // progress document setter
    const handleSave = (blogDocument: Partial<BlogDocumentType>) => {
        setProgressDocument(blogDocument);
    };

    // save to local storage
    const handleLocalSave = () => {
        let doc = JSON.stringify(progressDocument)
        localStorage.setItem("blogDocument", doc);
    };


    // implement function to submit blog article for creation
    const handleSubmitBlog = async (blogDocument: Partial<BlogDocumentType>) => {
        // fetch function to create route
        const response = await fetch('/api/blog/create', {
            method: "POST",
            body: JSON.stringify({ blog: blogDocument })
        });

        const data = await response.json()
        
        if (response.ok) {
            setErrorResponseMessage({error:false, message:data.message});
            setUpdate(!update);
            setTimeout(()=>{
                setErrorResponseMessage(undefined);
                setEditorMode(true);
            },3500);
        } else {
            setErrorResponseMessage({error:true, message:data.message});
            setUpdate(!update);
            setTimeout(()=>{
                setErrorResponseMessage(undefined);
                setEditorMode(true);
            },3500);                
        }
    };



    useEffect(() => {
        {
            submittable && console.log(submittable);
        }
    }, [submittable]);

    useEffect(()=> {
        {
            eRM && console.log(eRM);
        }
    },[eRM])

    return (
        <MotionPageWrapper>
            <MotionDiv
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
                                    ? <Button disabled variant='outlined' className={`${styles.roundedBtn} roundedBtn`}>Editor</Button>
                                    : (
                                        <Button
                                            variant='outlined'
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
                                                    <>
                                                        <motion.div className={`gap-[3.5vw] flex`}>
                                                            <Button
                                                                color='warning'
                                                                variant='contained'
                                                                className={`${styles.roundedBtn} roundedBtn`}
                                                                onClick={() => { handleLocalSave() }}
                                                            >
                                                                Save
                                                            </Button>

                                                            <Button
                                                                color='success'
                                                                variant='contained'
                                                                className={`${styles.roundedBtn} roundedBtn`}
                                                                onClick={() => {setUpdate(!update)}}
                                                            >
                                                                Submit
                                                            </Button></motion.div>
                                                    </>
                                                    :
                                                    <>
                                                        <motion.div className={`gap-[3.5vw] flex`}>
                                                            <Button
                                                                color='warning'
                                                                variant='contained'
                                                                className={`${styles.roundedBtn} roundedBtn`}
                                                                onClick={() => { handleLocalSave() }}
                                                            >
                                                                Save
                                                            </Button>
                                                            <Button
                                                                color='success'
                                                                variant='contained'
                                                                className={`${styles.roundedBtn} roundedBtn`}
                                                                onClick={() => {setUpdate(!update)}}
                                                                disabled
                                                            >
                                                                Submit
                                                            </Button>
                                                        </motion.div>
                                                    </>
                                            }

                                        </>


                                    )
                                    : (
                                        <>
                                            <motion.div className={`gap-[3.5vw] flex`}>
                                                <Button
                                                    variant='contained'
                                                    className={`${styles.roundedBtn} roundedBtn`}
                                                    onClick={() => { setEditorMode(!editorMode); }}
                                                >
                                                    Preview
                                                </Button>
                                                <Button
                                                    color='warning'
                                                    variant='contained'
                                                    className={`${styles.roundedBtn} roundedBtn`}
                                                    onClick={() => { handleLocalSave() }}
                                                >
                                                    Save
                                                </Button>
                                            </motion.div>
                                        </>

                                    )
                            }
                        </motion.div>
                        :
                        null
                }

                <RichTextEditor status={eRM} editorMode={editorMode} setSubmittable={handleSetSubmittable} handleSave={handleSave} update={update} handleSubmitBlog={handleSubmitBlog}/>

            </MotionDiv>
        </MotionPageWrapper>
    )
}

export default EmployeeRoleProtection(CreatePostsPage)