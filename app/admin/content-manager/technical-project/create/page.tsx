"use client"
import React from 'react';
import styles from '../../../styles.module.css';
import MotionPageWrapper from '@/app/components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/components/common/MotionSectionWrapper';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionH2 } from '@/app/components/framer/MotionH2';
import { EmployeeArea } from '@/app/components';
import TechnicalApplicationForm from '../_components/TechnicalApplicationForm';
import { TechnicalApplicationDocumentType } from '@/library/db/models/technicalApplication';
import { handleSubmitClient } from '@/utility/functions/forms';
import { ErrorResponseMessage } from '@/library/types/common';


const CreateTechnicalApplicationPage: React.FC<{}> = ({ }) => {

    async function submitHandler (technicalProjectDocument:TechnicalApplicationDocumentType) {
        return await handleSubmitClient("api/user/portfolio/technical-application/create", technicalProjectDocument) as ErrorResponseMessage;
    };

    return (
        <MotionPageWrapper>
            <MotionSectionWrapper>

                {/* case study create page header */}
                <MotionDiv
                className={`${styles.headerCtn}`}
                >
                    <MotionH2
                    className={`${styles.header}`}
                    >
                        Create a New Technical Application
                    </MotionH2>
                </MotionDiv>

                {/* case study form */}
                <MotionDiv>
                    <TechnicalApplicationForm handleSubmit={submitHandler as unknown as (arg0: TechnicalApplicationDocumentType) => Promise<ErrorResponseMessage>}/>
                </MotionDiv>                
            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}



export default EmployeeArea(CreateTechnicalApplicationPage);