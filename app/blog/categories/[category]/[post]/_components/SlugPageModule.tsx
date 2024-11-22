'use client'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { MotionImg } from '@/app/_components/common/framer/MotionImg'
import Header from '@/app/_components/common/Header'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import React from 'react'
import styles from '../../../../styles.module.css'
import { IBlogPopulated } from '@/app/_database/models/blog'
import parse from "html-react-parser";
import { Avatar, Chip, Stack, Typography } from '@mui/material'
import { MotionP } from '@/app/_components/common/framer/MotionP'
import author from '@/app/_database/models/author'
import { grey } from '@mui/material/colors'
import { ISubcategory } from '@/app/_database/models/subcategory'
import { useAppContext } from '@/app/_context/AppContext'

interface SlugPageModuleProps {
    post: IBlogPopulated | null;
}

const SlugPageModule: React.FC<SlugPageModuleProps> = ({
    post
}) => {

    const {
        screen:{isMobile},
    } = useAppContext();
    
    // Parse the HTML content only if post content exists
    const parsedContent = post?.content ? parse(post?.content) : null;
    return (
        <MotionPageWrapper>
            <MotionDiv className={`${styles.slugFtImgWrapper}`}>
                <MotionImg className={`object-cover w-full h-full ${styles.slugFtImg}`} src={post?.featuredImg.portrait} />
            </MotionDiv>

            <MotionDiv className='hero-wrapper mt-[38dvh] z-30 gap-3 md:px-[12vw] text-left'>
                <MotionDiv>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', p:'7.5px' }}
                        >
                            
                            {
                                post?.subcategories.map((sc: ISubcategory, i: number) => {

                                    if (i % 2 == 0) {
                                        return (
                                            <Chip
                                                avatar={<Avatar alt={`${sc.name}`} src={isMobile ? sc.photo.portrait : sc.photo.landscape} />}
                                                label={sc.name}
                                                key={sc._id}
                                                sx={{ color: "white", fontWeight: "bold", backgroundColor: grey[900], maxWidth:'45%' }}
                                            />
                                        )
                                    } else {
                                        return (
                                            <Chip
                                                avatar={<Avatar alt={`${sc.name}`} src={isMobile ? sc.photo.portrait : sc.photo.landscape} />}
                                                label={sc.name}
                                                key={sc._id}
                                                variant="outlined"
                                                sx={{ color: "white", borderWidth: "2px", borderColor: grey[900], fontWeight: "bold", maxWidth:'45%' }}
                                            />
                                        )
                                    }
                                })
                            }
                    </Stack>
                </MotionDiv>
                <MotionDiv className={`flex flex-row gap-[2vw] justify-center items-center text-center`}>
                    <MotionDiv>
                        <Avatar label={`${post?.author.firstName[0]}`} />
                    </MotionDiv>
                    <MotionDiv>
                        <MotionP>{post?.author.firstName} {post?.author.lastName}</MotionP>
                        <MotionP>{new Date(post?.createdAt!).toLocaleString()}</MotionP>
                    </MotionDiv>
                </MotionDiv>

                <Typography variant='h3'>
                    {post?.title}
                </Typography>

                {/* Content component */}
                <MotionDiv>{parsedContent}</MotionDiv>
            </MotionDiv>
        </MotionPageWrapper>
    )
}

export default SlugPageModule