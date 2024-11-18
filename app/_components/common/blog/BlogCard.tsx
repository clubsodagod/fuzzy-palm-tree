'use client'
import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { Avatar, Chip } from '@mui/material'
import parse from "html-react-parser";
import { useRouter } from 'next/navigation'
import { IBlogPopulated } from '@/app/_database/models/blog'
import { MotionDiv } from '../framer/MotionDiv'
import { MotionP } from '../framer/MotionP'
import CardWrapper from '../CardWrapper'
import ButtonPro from '../ButtonPro'


const BlogCard: React.FC<{
    post: IBlogPopulated;
    id?: string;
}> = ({
    post: {
        title,
        content,
        featuredImg,
        author,
        createdAt,
        category,
        slug,
        subcategories
    },
    id
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
                    className={id && id == 'blog-page-featured' ? styles.blogCardFeatured : styles.blogCard}
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



export default BlogCard;