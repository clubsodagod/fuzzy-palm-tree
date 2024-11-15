import React from 'react'
import styles from '../../styles.module.css'
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { DesignPattern } from '@/library/const';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { Divider, Typography } from '@mui/material';
import { MotionUL } from '@/app/_hide/_components/framer/MotionUL';
import { MotionLI } from '@/app/_hide/_components/framer/MotionLI';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';

export interface DesignPatternCardProps extends MotionDivProps {
    pattern: DesignPattern
}


const DesignPatternCard: React.FC<DesignPatternCardProps> = ({
    pattern: {
        label, overview, photo, video, useCases, commonPitfalls
    },
    ...props
}) => {

    const {
        currentBreakpoint
    } = useScreenContext()

    return (
        <>



            {
                (['md', 'lg', 'xl', '2xl']).includes(currentBreakpoint) &&
                <MotionDiv
                    className={`${styles.designPatternsRightColumn}`}
                >

                    <MotionDiv
                        {...props}
                        className={`${styles.designPatternUseCaseCardWrapper}`}
                    >
                        <MotionDiv>
                            <Typography
                                variant='subtitle2'
                            >
                                Use Cases
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                useCases.map((item, i: number) => (
                                    <MotionLI
                                        key={`${item}: ${i}`}
                                    >
                                        {item}
                                    </MotionLI>
                                ))
                            }
                        </MotionUL>
                    </MotionDiv>
                    <MotionDiv
                        {...props}
                        className={`${styles.designPatternCommonMisuseCardWrapper}`}
                    >
                        <MotionDiv>
                            <Typography
                                variant='subtitle2'
                            >
                                Common Pitfalls
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                commonPitfalls.map((item, i: number) => (
                                    <MotionLI
                                        key={`${item}: ${i}`}
                                    >
                                        {item}
                                    </MotionLI>
                                ))
                            }
                        </MotionUL>
                    </MotionDiv>
                </MotionDiv>
            }

            <MotionDiv
                className={`${styles.designPatternsLeftColumn}`}
            >
                <MotionDiv
                    {...props}
                    className={`${styles.designPatternCardWrapper}`}
                >


                    <MotionDiv
                        className={`${styles.designPatternImgWrapper}`}
                    >
                        <MotionImg
                            src={photo}
                            className={`${styles.designPatternImg}`}
                        />
                    </MotionDiv>

                    <MotionDiv>
                        <Typography
                            variant='subtitle1'
                            className={`${styles.designPatternCardLabelText}`}
                        >
                            {label.toUpperCase()}
                        </Typography>
                    </MotionDiv>

                    <Divider
                        variant='middle'
                        className={`${styles.solidDivider}`}
                    />

                    <MotionDiv>
                        <Typography
                            variant='body1'
                            className={`${styles.designPatternCardBodyText}`}
                        >
                            {overview}
                        </Typography>
                    </MotionDiv>

                </MotionDiv>
            </MotionDiv>

        </>

    )
}



export default DesignPatternCard;