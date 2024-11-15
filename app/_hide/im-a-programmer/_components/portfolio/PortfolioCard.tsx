'use client'
import React from 'react';
import styles from '../styles.module.css';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { Badge, Chip, Divider, Typography } from '@mui/material';
import { ITechnicalApplication } from '@/library/db/models/technicalApplication';
import { color } from 'framer-motion';
import { green } from '@mui/material/colors';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { MotionP } from '@/app/_hide/_components/framer/MotionP';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';


interface PortfolioCardProps {
    project: ITechnicalApplication;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    project: {
        photos,
        videos,
        technologiesUsed,
        live,
        createdAt,
        name,
        slug,
        description,
        link,
        githubLink
    }
}) => {

    const {
        isMobile, currentBreakpoint
    } = useScreenContext();

    return (
        <>
            <MotionDiv
                className={`${styles.portfolioCardWrapper} `}
            >

                <MotionDiv className={`${styles.portfolioCard} `}>

                    <MotionDiv
                        className='flex flex-col gap-2'

                    >

                        <MotionDiv
                            className={` flex min-h-3 flex-row gap-3`}
                        >
                            <Typography variant='subtitle1' >
                                {name}
                            </Typography>

                            <div className='min-h-6 '>
                                <Divider className='h-full w-full' orientation='vertical' flexItem />
                            </div>

                            <MotionDiv
                                className={`${styles.chipWrapper}`}
                            >
                                <Chip
                                    variant='contained'
                                    label={live ? 'ACTIVE' : 'NOT ACTIVE'}
                                    color={live ? 'success' : 'error'}
                                />
                            </MotionDiv>


                        </MotionDiv>
                        <MotionDiv

                            className='flex flex-col md:flex-row gap-1 md:text-left'
                        >
                            <MotionDiv
                                className=' text-left'
                            >
                                <a href={link}>
                                    <MotionP>
                                        {link}
                                    </MotionP>
                                </a>
                                <a href={githubLink}>
                                    <MotionP>
                                        {githubLink}
                                    </MotionP>
                                </a>

                                <Typography variant='subtitle2'>
                                    {description}
                                </Typography>
                            </MotionDiv>


                            {
                                (['xs', 'sm', 'md']).includes(currentBreakpoint) &&
                                <div
                                    className='lg:hidden flex flex-col md:flex-row gap-2'
                                >
                                    <div>
                                        <Divider orientation={(['xs', 'sm', 'md']).includes(currentBreakpoint) ? 'vertical' : 'horizontal'} />

                                    </div>
                                    <MotionDiv className={`${styles.portfolioCardImgWrapper} w-full h-[25vh]`} >
                                        <MotionImg className={`${styles.portfolioCardImg} object-cover w-full h-full `} src={photos[0]} />
                                    </MotionDiv>
                                </div>
                            }

                        </MotionDiv>
                    </MotionDiv>
                </MotionDiv>
            </MotionDiv>

            {
                (['lg', 'xl', '2xl']).includes(currentBreakpoint) &&

                <>
                    <MotionDiv className='w-[33%]'>
                        <Divider orientation={(['xs', 'sm', 'md']).includes(currentBreakpoint) ? 'vertical' : 'horizontal'} />

                    </MotionDiv>
                    <MotionDiv
                        className={`${styles.portfolioCardWrapper} `}
                    >
                        <MotionDiv
                            className=' flex flex-col  gap-2'
                        >

                            <MotionDiv className={`${styles.portfolioCardImgWrapper} w-full h-[25vh]`} >
                                <MotionImg className={`${styles.portfolioCardImg} object-cover w-full h-full `} src={photos[0]} />
                            </MotionDiv>
                        </MotionDiv>
                    </MotionDiv>
                </>
            }
        </>

    )
}



export default PortfolioCard;