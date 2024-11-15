'use client'
import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { Avatar } from '@mui/material'
import parse from "html-react-parser";
import { useRouter } from 'next/navigation'
import { IBlogPopulated } from '@/app/_database/models/blog'
import { MotionDiv } from '../framer/MotionDiv'
import { MotionP } from '../framer/MotionP'
import CardWrapper from '../CardWrapper'


const BlogCard: React.FC<{
    post: IBlogPopulated
}> = ({
    post: {
        title,
        content,
        featuredImg,
        author,
        createdAt,
        category,
        slug,
    }
}) => {

        const router = useRouter();
        const date = createdAt.toLocaleString();
        const parsedContent = parse(content);

        const blogSlugRouter = (e: React.MouseEvent) => {
            e.preventDefault();
            router.push(`/blog/categories/${category.slug}/${slug}`)
        }


        return (

            <CardWrapper>

                <MotionDiv
                    className={`${styles.blogCard}`}
                >

                    <MotionDiv
                        className={`${styles.blogCardFtImgWrapper}`}
                    >
                        <motion.img
                            className={`${styles.blogCardFtImg}`}
                            src={featuredImg.portrait}
                        />
                    </MotionDiv>

                    <MotionDiv
                        className={`${styles.blogCardInfoCtn}`}
                    >

                        <MotionDiv
                            className={`${styles.authorFlexCtn}`}
                        >
                            <MotionDiv
                                className={`${styles.authorImgWrapper}`}
                            >
                                <Avatar
                                    className={`${styles.authorImg}`}
                                    label={author._id} />
                            </MotionDiv>
                            <MotionDiv
                                className={`${styles.author}`}
                            >
                                <motion.p
                                    className={`${styles.authorTxt}`}
                                >{date}</motion.p>
                                <motion.p
                                    className={`${styles.authorTxt} font-bold`}
                                >{author.firstName} {author.lastName}</motion.p>
                            </MotionDiv>
                        </MotionDiv>

                        <MotionP
                            className={`${styles.titleTxt} font-bold`}
                            onClick={(e) => { blogSlugRouter(e); }}
                        >
                            {title}
                        </MotionP>
                        <div>
                            <MotionDiv
                                className={`${styles.excerpt}`}
                            >
                                {parsedContent}
                            </MotionDiv>
                        </div>


                    </MotionDiv>
                </MotionDiv>
            </CardWrapper>


        )
    }



export default BlogCard;