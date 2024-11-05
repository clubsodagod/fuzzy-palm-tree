'use client'
import { OuterSceneWrapper, PageWrapper, ScrollableItemCtn } from '@/app/_components';
import React, { ReactHTMLElement, RefObject, useRef } from 'react';
import styles from '../../../../investments.module.css';



const CurrentListings = () => {

    const listingCtnRef = useRef(null);

    return (
    
        <>
                <div className="three-scene" id="current-listings-page">
                    <ScrollableItemCtn elementRef={listingCtnRef}>
                        {'.'}
                    </ScrollableItemCtn>
                </div>

                <PageWrapper
                id='current-listings-page'
                >


                    <div
                    className={` ${styles.topTextCtn}`}
                    >
                        <h1 className={` ${styles.investHeader}`}>
                            Current Listings
                        </h1>
                        <h6 className={`${styles.investSubheader}`}>
                            It&apos;s  more than money. Its&apos;s Life.
                        </h6>
                    </div>

                    
                </PageWrapper>    
        </>

    )
}

export default CurrentListings