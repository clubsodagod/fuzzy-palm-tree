"use client"
import React from 'react';
import styles from '../../../styles.module.css';

import TechnicalApplicationForm from '../_components/TechnicalApplicationForm';
import { handleSubmitClient } from '@/utility/functions/forms';
import { TechnicalApplicationDocumentType } from '@/app/_database/models/technicalApplication';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/_components/common/SectionWrapper';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { ErrorResponseMessage } from '@/library/types/common';
import { MotionH2 } from '@/app/_components/common/framer/MotionH2';
import EmployeeRoleProtection from '@/app/_components/route-protection/EmployeeRole';


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



export default EmployeeRoleProtection(CreateTechnicalApplicationPage);