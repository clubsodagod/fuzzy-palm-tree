import React from 'react'
import styles from '../../styles.module.css'
import { SolidHeroProps } from './SolidHero';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';


const DynamicSolidHero: React.FC<SolidHeroProps> = ({
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