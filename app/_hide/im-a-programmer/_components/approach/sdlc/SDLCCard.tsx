import React from 'react'
import styles from '../../styles.module.css'
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { SDLCPhase } from '@/library/const';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { Typography, Divider } from '@mui/material';
import { MotionLI } from '@/app/_hide/_components/framer/MotionLI';
import { MotionUL } from '@/app/_hide/_components/framer/MotionUL';
import { useAppContext } from '@/app/_context/AppContext';


interface SDLCCardProps extends MotionDivProps {
    phase: SDLCPhase;
    index:number
}

const SDLCCard: React.FC<SDLCCardProps> = ({
    phase: {
        phaseName, overview, photo, video,
        challenges, bestPractices, practicalApplications, examples
    },
    index,
    ...props
}) => {

    const {
        screen:{isMobile, currentBreakpoint}
    } = useAppContext();

    const step = index + 1;

    return (
        <>

            <MotionDiv
                className={`${styles.leftSDLCColumn}`}
            >
                <MotionDiv
                    {...props}
                    className={`${styles.sdlcCardWrapper}`}
                >

                    <MotionDiv
                        className={`${styles.sdlcImgWrapper}`}
                    >
                        <MotionImg
                            src={photo}
                            className={`${styles.sdlcImg}`}
                        />
                    </MotionDiv>

                    <MotionDiv>
                        <Typography
                            variant='subtitle1'
                            className={`${styles.solidCardLabelText}`}
                        >
                            {phaseName.toUpperCase()}
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
                                {step}
                            </Typography>
                        </MotionDiv>


                        <MotionDiv>
                            <MotionDiv>
                                <Typography variant='body1'>
                                    {overview}
                                </Typography>
                            </MotionDiv>
                        </MotionDiv>


                    </MotionDiv>

                </MotionDiv>

                
            {
                ([ 'md', 'sm']).includes(currentBreakpoint)  &&
                    <MotionDiv
                        {...props}
                        className={`${styles.designPatternCommonMisuseCardWrapper}`}
                    >
                        <MotionDiv>
                            <Typography
                                variant='subtitle2'
                            >
                                Best Practices
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                practicalApplications && practicalApplications.map((item, i: number) => (
                                    <MotionLI
                                        key={`${item}: ${i}`}
                                    >
                                        {item}
                                    </MotionLI>
                                ))
                            }
                        </MotionUL>
                    </MotionDiv>
            }
            </MotionDiv>

            {
                (['md', 'lg', 'xl', '2xl']).includes(currentBreakpoint)  &&
                <MotionDiv
                    className={`${styles.middleSDLCColumn}`}
                >

                    <MotionDiv
                        {...props}
                        className={`${styles.designPatternUseCaseCardWrapper}`}
                    >
                        <MotionDiv>
                            <Typography
                                variant='subtitle2'
                            >
                                Challenges
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                challenges && challenges.map((item, i: number) => (
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
                                Practical Applications
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                practicalApplications && practicalApplications.map((item, i: number) => (
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
            {
                ([ 'xl', '2xl']).includes(currentBreakpoint)  &&
                <MotionDiv
                    className={`${styles.rightSDLCColumn}`}
                >

                    <MotionDiv
                        {...props}
                        className={`${styles.designPatternCommonMisuseCardWrapper}`}
                    >
                        <MotionDiv>
                            <Typography
                                variant='subtitle2'
                            >
                                Best Practices
                            </Typography>
                        </MotionDiv>
                        <MotionUL
                            className='list-inside'
                        >
                            {
                                practicalApplications && practicalApplications.map((item, i: number) => (
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



export default SDLCCard;