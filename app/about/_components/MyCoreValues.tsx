'use client'


import React, { useEffect, useRef, useState } from 'react'
import { HeroProps } from './BioHero'
import { Header, HeroButtonCtn, PageWrapper } from '@/app/_components'
import ButtonPro from '@/app/_components/common/buttons/ButtonPro'
import { MotionDiv } from '@/app/_components/framer/MotionDiv'
import { CoreValue, coreValues, missionStatement } from '@/library/const'
import { duration, Typography } from '@mui/material'
import styles from './styles.module.css'
import CoreValueView from './CoreValueView'
import { VoidOneParameterFunction } from '@/app/im-a-programmer/_components/DigitalSolutionsHeroMain'
import { MotionValue, Variant, Variants } from 'framer-motion'

interface HeroPropsExtended extends HeroProps {
    value: number;
    carouselHandler: VoidOneParameterFunction;
    scrollY: MotionValue,
    scrollYProgress: MotionValue,
}

interface VariantsType {
    enter: {
        opacity: number;
        scale: number[];
        transition: {
            duration: number;
        };
    };
    exit: {
        opacity: number;
        scale: number[];
        transition: {
            duration: number;
        };
    };
}

export type MotionVariants = {
    [key: string]: Variant | undefined;
};
const MyCoreValues: React.FC<HeroPropsExtended> = ({
    ctnRef, id, scrollTo, value, carouselHandler, scrollY, scrollYProgress
}) => {

    const [previousValue, setPreviousValue] = useState(0);
    const [variant, setVariant] = useState('enter');

    const scrollCtnRef = useRef(null);

    // core value animation object
    const variants: Variants = {
        enter: {
            opacity: 1,
            scale: [0, 1],
            transition: {
                duration: 0.25,
            }
        },
        exit: {
            opacity: 0,
            scale: [1, 0],
            transition: {
                duration: 0.25,
            }
        }
    }

    useEffect(() => {

        // check if previous core value index equals current value
        if (value && value != previousValue) {
            {
                variant && variant
            }
            const variantHandler = () => {
                setVariant('exit');
                setPreviousValue(value);
                setTimeout(() => {
                    setVariant('enter');
                }, 500);
            };

            variantHandler();
        }
    }, [value, previousValue, variant]);


    const prime = scrollY.get();
    const pastPrime = scrollY.getPrevious();
    const scalingFactor = () => Math.min(Math.max(window?.innerWidth / 1920, window?.innerWidth > 700 && window?.innerWidth < window?.innerHeight ? 0.8 : 0.6), 3);

    useEffect(() => {

        const functionHandler = () => {
            if (prime !== pastPrime) {

                console.log(scalingFactor());
            }
        };

        functionHandler();

    }, [pastPrime, prime, scalingFactor])

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >
            <MotionDiv className={` h-full`}>

                <Header
                    headerLabel="Core Values"
                    tagLine='The Core of Being'
                    size='md'
                />

                <MotionDiv className={`${styles.coreValuesCtn} w-full min-h-full flex-1 flex flex-col gap-1`}>

                    <MotionDiv
                        animate={variant == 'enter' ? 'enter' : 'exit'}
                        variants={variants}
                        className={`${styles.textBoxWrapper} flex flex-col gap-6 text-center pt-[20vh]`}
                    >
                        <MotionDiv
                            className={`${styles.coreValueTextBoxWrapper}`}
                        >
                            <Typography className={`${styles.coreValueText} text-white`} variant='h5'>
                                {coreValues[value].title}
                            </Typography>
                            <Typography className={`${styles.coreValueText} text-white`} variant='p'>
                                {coreValues[value].description}
                            </Typography>
                        </MotionDiv>

                    </MotionDiv>

                    <MotionDiv className={`${styles.carouselWrapper} `} >
                        <CoreValueView
                            elementRef={scrollCtnRef}
                            carouselHandler={carouselHandler}
                        >

                            <></>

                        </CoreValueView>
                    </MotionDiv>

                </MotionDiv>

            </MotionDiv>
            <HeroButtonCtn >
                <ButtonPro
                    label={`Mission Statement`}
                    size='small'
                    variant='contained'
                    color='primary'
                    className={`learn-more-btn z-100 relative`}
                    onClick={() => { scrollTo && scrollTo('about-mission-statement') }}
                />
                <ButtonPro
                    color='secondary'
                    label={`Bio`}
                    variant='contained'
                    className={`partnership-btn  z-100 relative`}
                    onClick={() => { scrollTo && scrollTo('top') }}
                />
            </HeroButtonCtn>
        </PageWrapper>)
}

export default MyCoreValues