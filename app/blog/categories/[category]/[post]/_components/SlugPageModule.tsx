'use client'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { MotionImg } from '@/app/_components/common/framer/MotionImg'
import Header from '@/app/_components/common/Header'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import React, { useEffect } from 'react'
import styles from '../../../../styles.module.css'
import { IBlogPopulated } from '@/app/_database/models/blog'
import parse from "html-react-parser";
import { Avatar, Button, CardMedia, Chip, Stack, Typography } from '@mui/material'
import { MotionP } from '@/app/_components/common/framer/MotionP'
import author from '@/app/_database/models/author'
import { grey } from '@mui/material/colors'
import { ISubcategory } from '@/app/_database/models/subcategory'
import { useAppContext } from '@/app/_context/AppContext'
import { useBlogPageSectionRefs } from '@/app/blog/_utility/refs'
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher'
import WindowUpdater from '@/app/_utility/window/WindowUpdater'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import Prism from 'prismjs'
import rehypeRaw from "rehype-raw";
import ReactMarkdown from 'react-markdown';

type RehypePlugin = (options?: any) => (tree: any, file: any) => any;

dayjs.extend(relativeTime)
interface SlugPageModuleProps {
    post: IBlogPopulated | null;
}

const SlugPageModule: React.FC<SlugPageModuleProps> = ({
    post
}) => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);
    const {
        screen: { isMobile },
    } = useAppContext();

    const {
        slugPageRef, slugPageRefs: refs, scrollRef
    } = useBlogPageSectionRefs();


    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });

    // Parse the HTML content only if post content exists
    const parsedContent = post?.content ? parse(post?.content) : null;
    return (
        <MotionPageWrapper
            id={`blog-slug-page`}
            ctnRef={slugPageRef}
        >
            <MotionDiv className={`${styles.slugFtImgWrapper}`}>
                <MotionImg className={`object-cover w-full h-full ${styles.slugFtImg}`} src={post?.featuredImg.portrait} />
            </MotionDiv>

            <MotionDiv className='hero-wrapper mt-[38dvh] z-30 gap-3 md:px-[12vw] text-left'>
                <MotionDiv>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', p: '7.5px' }}
                    >

                        {
                            post?.subcategories.map((sc: ISubcategory, i: number) => {

                                if (i % 2 == 0) {
                                    return (
                                        <Chip
                                            avatar={<Avatar alt={`${sc.name}`} src={isMobile ? sc.photo.portrait : sc.photo.landscape} />}
                                            label={sc.name}
                                            key={sc._id}
                                            sx={{ color: "white", fontWeight: "bold", backgroundColor: grey[900], maxWidth: '45%' }}
                                        />
                                    )
                                } else {
                                    return (
                                        <Chip
                                            avatar={<Avatar alt={`${sc.name}`} src={isMobile ? sc.photo.portrait : sc.photo.landscape} />}
                                            label={sc.name}
                                            key={sc._id}
                                            variant="outlined"
                                            sx={{ color: "white", borderWidth: "2px", borderColor: grey[900], fontWeight: "bold", maxWidth: '45%' }}
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
                        <MotionP>{dayjs(post?.createdAt).fromNow()}</MotionP>
                    </MotionDiv>
                </MotionDiv>

                <Typography variant='h3'>
                    {post?.title}
                </Typography>

                {/* Content component */}
                <ReactMarkdown rehypePlugins={[[rehypeRaw as RehypePlugin]]}
                    components={{
                        img: (props) => (
                            <Button sx={{borderRadius:'50px'}} className="w-full p-3">
                                <div className='flex justify-center items-center w-full h-[45vh] blur-wrapper' onClick={() => { }}>
                                    <CardMedia sx={{borderRadius:'50px'}} className='object-cover h-full ' src={props.src} alt={props.alt} component="img" />
                                </div>
                            </Button>







                        ),
                    }}>{post?.content}</ReactMarkdown>
            </MotionDiv>
        </MotionPageWrapper>
    )
}

export default SlugPageModule