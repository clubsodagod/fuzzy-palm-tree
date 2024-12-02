'use client'
import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { Avatar, Chip, Typography } from '@mui/material'
import parse from "html-react-parser";
import { useRouter } from 'next/navigation'
import { IBlogPopulated } from '@/app/_database/models/blog'
import { MotionDiv } from '../framer/MotionDiv'
import { MotionP } from '../framer/MotionP'
import CardWrapper from '../CardWrapper'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import { MotionImg } from '../framer/MotionImg'

dayjs.extend(relativeTime)


const PostComingSoonCard: React.FC = ({

}) => {

    const router = useRouter();

    const blogSlugRouter = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push(`/blog`)
    }


    return (

        <CardWrapper>

            <MotionDiv
                className={`${styles.blogCard} flex flex-col justify-center items-center h-full gap-6 `}
            >





                <div
                className='px-20'
                >
                    <Typography variant='h5' className=''>
                        COMING SOON
                    </Typography>
                    <MotionP
                        className={`${styles.titleTxt} font-bold cursor-pointer`}
                        onClick={(e) => { blogSlugRouter(e); }}
                    >
                        Articles are on the way! I apologize for the inconvenience.
                    </MotionP>
                </div>



            </MotionDiv>

            {/* <MotionDiv
                    className={id && id == 'blog-page-featured' ? styles.blogCardFeatured : styles.blogCard}
                >
                    <MotionDiv
                        className='flex gap-2'
                    >
                        <ButtonPro label={category.name} variant='contained' color='primary' />
                    </MotionDiv>
                    {
                        subcategories.map((s,i)=>{

                            if (i%2==0) {
                                return <ButtonPro key={`subcategory ${s._id}: ${s._id} ${i}`}  label={s.name} variant='outlined' color='secondary' />
                            } else {
                                return <ButtonPro key={`subcategory ${s._id}: ${s._id} ${i}`}  label={s.name} variant='outlined' color='primary' />
                            }
                        })
                    }
                </MotionDiv> */}
        </CardWrapper>


    )
}



export default PostComingSoonCard;