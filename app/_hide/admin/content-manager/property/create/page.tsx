'use client'

import React from 'react';
import styles from '../../../styles.module.css';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/_hide/_components/common/MotionSectionWrapper';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionH2 } from '@/app/_hide/_components/framer/MotionH2';
import TechnicalProjectForm from '../../technical-project/_components/TechnicalApplicationForm';
import PropertyForm from '../_components/PropertyForm';
import { handleSubmitClient } from '@/utility/functions/forms';
import { ErrorResponseMessage } from '@/library/types/common';
import { PropertyDocumentType } from '@/app/_database/models/property';


const CreatePropertyPage: React.FC<{}> = ({ }) => {

    async function submitHandler (propertyDocument:PropertyDocumentType) {
        return await handleSubmitClient("api/user/portfolio/property/create", propertyDocument) as ErrorResponseMessage;
    };

    return (
        <MotionPageWrapper>
            <MotionSectionWrapper>

                {/* property create page header */}
                <MotionDiv
                className={`${styles.headerCtn}`}
                >
                    <MotionH2
                    className={`${styles.header}`}
                    >
                        Create a New Property
                    </MotionH2>
                </MotionDiv>

                {/* property form */}
                <MotionDiv>
                    <PropertyForm handleSubmit={submitHandler} />
                </MotionDiv>                
            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}



export default CreatePropertyPage;