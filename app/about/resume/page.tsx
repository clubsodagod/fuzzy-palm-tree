'use client'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import Header from '@/app/_components/common/Header'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import React from 'react'
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Document, Page } from 'react-pdf';

const ResumePage = () => {

    const docs = [
        { uri: "https://rose-tessie-62.tiiny.site" }, // Local File
    ];

    return (
        <MotionPageWrapper>
            <MotionDiv
                className='hero-wrapper'
            >
                <Header
                    headerLabel='Resume'
                    tagLine='Summary of My Skills & Core Competencies'
                />

                <MotionDiv>
                    <DocViewer
                        pluginRenderers={DocViewerRenderers}
                        documents={docs}
                    />
                </MotionDiv>
            </MotionDiv>
        </MotionPageWrapper>
    )
}

export default ResumePage