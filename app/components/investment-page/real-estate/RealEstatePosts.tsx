import React from 'react'
import styles from '../investments.module.css'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'
import PageWrapper from '../../common/PageWrapper'

const RealEstatePosts = () => {
    return (
        <OuterSceneWrapper id='real-estate-page'>

            <PageWrapper>
                

                <div
                className={` ${styles.topTextCtn}`}
                >
                    <h2 className={` ${styles.investHeader}`}>
                        The Daily Davis
                    </h2>
                    <h5>
                        Real Estate Edition
                    </h5>
                </div>


                <div
                className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn}`}
                >
                    
                    <p className={`${styles.heroBtnCtnTxt}`} >

                        DYNAMIC TEXT
                    </p>
                </div>
                


            </PageWrapper>
        </OuterSceneWrapper>
    )
}

export default RealEstatePosts