import React from 'react'
import styles from '../../styles.module.css'
import { SolidHeroProps } from './SolidHero';
import { PageWrapper } from '@/app/_hide/_components';


const DynamicSolidHero: React.FC<SolidHeroProps> = ({
    ctnRef,
    ...props
}) => {

    return (
        <PageWrapper
            ctnRef={ctnRef}
        >

            
            {''}
        </PageWrapper>
    )
}



export default DynamicSolidHero;