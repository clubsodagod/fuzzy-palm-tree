import React, { RefObject } from 'react'
import styles from '../investments.module.css'
import PageWrapper from '../../common/PageWrapper'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'

const RealEstateCTA:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
            <PageWrapper
            id='real-estate-cta'
            ctnRef={ctnRef}
            >
                

                <div
                className={` ${styles.topTextCtn}`}
                >
                    <h1 className={` ${styles.investHeader}`}>
                        Want to partner?
                    </h1>
                    <h6>
                        The more the merrier. Let&apos;s mastermind and experience exponential growth!
                    </h6>
                </div>


                <div
                className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn}`}
                >
                    
                    <p className={`${styles.heroBtnCtnTxt}`} >

                        DYNAMIC TEXT
                    </p>
                </div>
                


            </PageWrapper>
    )
}

export default RealEstateCTA