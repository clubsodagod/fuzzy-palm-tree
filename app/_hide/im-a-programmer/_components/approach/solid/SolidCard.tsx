import React from 'react'
import styles from '../../styles.module.css'
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { DynamicComponentData } from '@/library/const';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { Chip, Divider, Typography } from '@mui/material';
import { MotionLI } from '@/app/_hide/_components/framer/MotionLI';
import { MotionUL } from '@/app/_hide/_components/framer/MotionUL';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';



export interface SolidCardProps extends MotionDivProps {
    principle: DynamicComponentData
}

const SolidCard: React.FC<SolidCardProps> = ({
    principle: { label, point, photo, video,useCases,commonViolations, practicalTips },
    ...props
}) => {

    const {
        isMobile, currentBreakpoint
    } = useScreenContext()
    return (
        <>
            <MotionDiv
                className={`${styles.leftSolidColumn}`}
            >
                <MotionDiv
                    {...props}
                    className={`${styles.solidCardWrapper}`}
                >

                    <MotionDiv
                        className={`${styles.solidImgWrapper}`}
                    >
                        <MotionImg
                            src={photo}
                            className={`${styles.solidImg}`}
                        />
                    </MotionDiv>

                    <MotionDiv>
                        <Typography
                            variant='subtitle1'
                            className={`${styles.solidCardLabelText}`}
                        >
                            {label.toUpperCase()}
                        </Typography>
                    </MotionDiv>
                    <Divider
                        variant='middle'
                        className={`${styles.solidDivider}`}
                    />

                    <MotionDiv
                        className={`${styles.card}`}
                    >

                        <MotionDiv>
                            <Typography variant="h6" className={`${styles.solidCardBigLetter}`}>
                                {label[0].toUpperCase()}
                            </Typography>
                        </MotionDiv>


                        <MotionDiv>
                            <MotionDiv>
                                <Typography variant='body1'>
                                    {point}
                                </Typography>
                            </MotionDiv>
                        </MotionDiv>


                    </MotionDiv>

                </MotionDiv>
            </MotionDiv>
            
            {
                (['md', 'lg', 'xl', '2xl']).includes(currentBreakpoint)  &&
                <MotionDiv
                    className={`${styles.rightSolidColumn}`}
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
                                useCases && useCases.map((item, i: number) => (
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
                                Practical Tips
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                practicalTips && practicalTips.map((item, i: number) => (
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
        </>

    )
}



export default SolidCard;