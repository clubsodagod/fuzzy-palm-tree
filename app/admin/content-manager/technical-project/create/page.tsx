"use client"
import React from 'react';
import styles from '../../../styles.module.css';
import MotionPageWrapper from '@/app/components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/components/common/MotionSectionWrapper';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionH2 } from '@/app/components/framer/MotionH2';
import TechnicalProjectForm from '../_components/TechnicalProjectForm';
import { EmployeeArea } from '@/app/components';


const CreateTechnicalProjectPage: React.FC<{}> = ({ }) => {

    return (
        <MotionPageWrapper>
            <MotionSectionWrapper>

                {/* case study create page header */}
                <MotionDiv
                className={`${styles.headerCtn}`}
                >
                    <MotionH2>
                        Create a New Technical Project
                    </MotionH2>
                </MotionDiv>

                {/* case study form */}
                <MotionDiv>
                    <TechnicalProjectForm />
                </MotionDiv>                
            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}



export default EmployeeArea(CreateTechnicalProjectPage);