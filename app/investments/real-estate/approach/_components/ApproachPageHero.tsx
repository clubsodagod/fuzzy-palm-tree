

import { PageWrapper } from '@/app/components'
import React, { RefObject } from 'react'
import styles from '../../../investments.module.css'
import { motion } from 'framer-motion'







const ApproachPageHero:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   

    return (
        
            <PageWrapper 
            ctnRef={ctnRef}
            id='approach-main' 
            >
                
            {/* Main View Hero   */}
                <motion.div
                    

                className={` ${styles.topTextCtn}`}
                >
                    <h1 className={` ${styles.investHeader}`} id='approach-page'>
                        The Approach
                    </h1>
                    <h6 className={`${styles.investSubheader}`} id='approach-page'>
                        Fueling Growth with Adaptive and Risk-Managed Investments
                    </h6>
                </motion.div>
            </PageWrapper>

    )
}

export default ApproachPageHero