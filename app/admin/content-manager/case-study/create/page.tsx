"use client"
import React from 'react'
import styles from '../../../styles.module.css';
import { EmployeeArea} from '@/app/components'
import MotionPageWrapper from '@/app/components/common/MotionPageWrapper'
import { MotionDiv } from '@/app/components/framer/MotionDiv'
import { MotionH2 } from '@/app/components/framer/MotionH2'
import CaseStudyForm from '../_components/CaseStudyForm'
import MotionSectionWrapper from '@/app/components/common/MotionSectionWrapper';


const CaseStudyCreatePage: React.FC<{}> = ({ }) => {

    return (
        <MotionPageWrapper>
            <MotionSectionWrapper>

                {/* case study create page header */}
                <MotionDiv
                className={`${styles.headerCtn}`}
                >
                    <MotionH2>
                        Create a New Case Study
                    </MotionH2>
                </MotionDiv>

                {/* case study form */}
                <MotionDiv>
                    <CaseStudyForm 
                    />
                </MotionDiv>                
            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}



export default EmployeeArea(CaseStudyCreatePage);