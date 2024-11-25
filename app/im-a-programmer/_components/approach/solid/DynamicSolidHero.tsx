import React from 'react'
import styles from '../../styles.module.css'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import { HeroProps } from '@/app/_library/types/common';


const DynamicSolidHero: React.FC<HeroProps> = ({
    ctnRef,
    ...props
}) => {

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
        >

            
            {''}
        </MotionPageWrapper>
    )
}



export default DynamicSolidHero;