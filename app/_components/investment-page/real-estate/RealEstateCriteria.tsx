import React, { RefObject } from 'react'
import styles from '../investments.module.css'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'
import PageWrapper from '../../common/PageWrapper'

const RealEstateCriteria:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
            <PageWrapper
            id='real-estate-criteria'
            ctnRef={ctnRef}
            >
                

                <div
                className={` ${styles.topTextCtn}`}
                >
                    <h1 className={` ${styles.investHeader}`}>
                        The Criteria
                    </h1>
                    <h6>
                        
                    </h6>
                </div>


                <div
                className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn}`}
                >
                    
                    <p className={`${styles.heroBtnCtnTxt}`} >

                        I&apos;m always open to look at an opportunity! As long as it falls with the criteria.
                    </p>
                </div>
                


            </PageWrapper>
    )
}

export default RealEstateCriteria