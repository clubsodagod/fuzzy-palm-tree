"use client"
import React from 'react'
import styles from '../../../styles.module.css';
import CaseStudyForm from '../_components/CaseStudyForm'
import { handleSubmitClient } from '@/utility/functions/forms';
import { ErrorResponseMessage } from '@/library/types/common';
import { CaseStudyDocumentType } from '@/app/_database/models/case-study';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionH2 } from '@/app/_components/common/framer/MotionH2';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/_components/common/SectionWrapper';
import EmployeeRoleProtection from '@/app/_components/route-protection/EmployeeRole';


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



export default EmployeeRoleProtection(CaseStudyCreatePage);