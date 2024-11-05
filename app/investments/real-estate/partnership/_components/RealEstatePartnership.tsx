import { OuterSceneWrapper, PageWrapper } from '@/app/_components';
import React from 'react';
import styles from '../../../investments.module.css';
import PartnershipForm from './partnership-form/PartnershipForm';

const RealEstatePartnership = () => {

    return (
        <OuterSceneWrapper id='real-estate-partnership'>

            <div className="three-scene" id="real-estate-partnership">

            </div>

            <PageWrapper id='real-estate-partnership'>
                    
                <div
                className={` ${styles.topTextCtn}`}
                >
                    <h1 className={` ${styles.investHeader}`}>
                        Partnership
                    </h1>
                    <h6 className={`${styles.investSubheader}`}>
                        Let&apos;s mastermind a plan and take action.
                    </h6>
                </div>

                <PartnershipForm />
            </PageWrapper>
        </OuterSceneWrapper>
    )
}

export default RealEstatePartnership