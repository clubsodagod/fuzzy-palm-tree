"use client"
import React from 'react'
import styles from '../../../styles.module.css';
import { EmployeeArea} from '@/app/_hide/_components'
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import { MotionH2 } from '@/app/_hide/_components/framer/MotionH2'
import CaseStudyForm from '../_components/CaseStudyForm'
import MotionSectionWrapper from '@/app/_hide/_components/common/MotionSectionWrapper';
import { handleSubmitClient } from '@/utility/functions/forms';
import { CaseStudyDocumentType } from '@/library/db/models/case-study';
import { ErrorResponseMessage } from '@/library/types/common';
import { MotionSection } from '@/app/_hide/_components/framer/MotionSection';


const CaseStudyCreatePage: React.FC<{}> = ({ }) => {

    async function submitHandler (caseStudyDocument:CaseStudyDocumentType) {
        return await handleSubmitClient("api/user/portfolio/case-study/create", caseStudyDocument) as ErrorResponseMessage;
    };

    return (
        <MotionPageWrapper>
            <MotionSectionWrapper
            >

                {/* case study create page header */}
                <MotionDiv
                className={`${styles.headerCtn}`}
                >
                    <MotionH2
                    className={`${styles.header}`}
                    >
                        Create a New Case Study
                    </MotionH2>
                </MotionDiv>

                {/* case study form */}
                <MotionDiv
                >
                    <CaseStudyForm
                    handleSubmit={submitHandler as unknown as (arg0: CaseStudyDocumentType) => Promise<ErrorResponseMessage>} 
                    />
                </MotionDiv>                
            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}



export default EmployeeArea(CaseStudyCreatePage);