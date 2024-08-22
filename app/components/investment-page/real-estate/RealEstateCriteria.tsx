import React from 'react'
import styles from '../investments.module.css'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'
import PageWrapper from '../../common/PageWrapper'

const RealEstateCriteria = () => {
    return (
        <OuterSceneWrapper id='real-estate-page'>

            <PageWrapper>
                

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
        </OuterSceneWrapper>
    )
}

export default RealEstateCriteria