'use client'
import React from 'react'
import styles from './components.module.css'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Avatar } from '@mui/material'
import { IBlog, IBlogPopulated } from '@/library/db/models/blog'
import parse from "html-react-parser";
import { useRouter } from 'next/navigation'
import { MotionDiv } from '@/app/_components/framer/MotionDiv'


const BlogCard2D: React.FC<{
    blog: IBlogPopulated
}> = ({
    blog: {
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
            router.push(`/blog/categories/${category.slug}/${slug}`)
        }
        const cardX = useMotionValue(0);
        const cardY = useMotionValue(0);
        const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
        const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
        const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
        const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

        const handleMouseMove = (event: React.MouseEvent) => {
            const offsetX = event.clientX - window.innerWidth / 2;
            const offsetY = event.clientY - window.innerHeight / 2;

            cardX.set(-offsetX);
            cardY.set(-offsetY);
        };

        const handleMouseLeave = () => {
            cardX.set(0);
            cardY.set(0);
        };


        return (

            <motion.div
                whileHover={{
                    scale:1.05
                }}
                className={`${styles.blogCardWrapper}`}
                style={{
                    perspective: 800,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                {/* this div can be used as the 'dotted grid' */}
                <motion.div
                    style={{
                        margin: "auto",
                        width: "100%",
                        height: "100%",
                        transformStyle: "preserve-3d",
                        perspective: 800,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        rotateX,
                        rotateY
                    }}
                    transition={{ velocity: 0 }}
                    initial={{
                        opacity:"0%",
                    }}
                    whileInView={{
                        opacity:"100%",
                        transition:{
                            duration:1.5,
                        }
                    }}
                >
                    <MotionDiv
                        className={`${styles.blogCard}`}
                    >

                        <motion.div
                            className={`${styles.blogCardFtImgWrapper}`}
                        >
                            <motion.img
                                className={`${styles.blogCardFtImg}`}
                                src={featuredImg.portrait}
                            />
                        </motion.div>

                        <motion.div
                            className={`${styles.blogCardInfoCtn}`}
                        >

                            <motion.div
                                className={`${styles.authorFlexCtn}`}
                            >
                                <motion.div
                                    className={`${styles.authorImgWrapper}`}
                                >
                                    <Avatar
                                        className={`${styles.authorImg}`}
                                        label={author._id} />
                                </motion.div>
                                <motion.div
                                    className={`${styles.author}`}
                                >
                                    <motion.p
                                        className={`${styles.authorTxt}`}
                                    >{date}</motion.p>
                                    <motion.p
                                        className={`${styles.authorTxt} font-bold`}
                                    >{author.firstName} {author.lastName}</motion.p>
                                </motion.div>
                            </motion.div>

                            <motion.p
                                className={`${styles.titleTxt} font-bold`}
                                onClick={(e) => { blogSlugRouter(e); }}
                            >
                                {title}
                            </motion.p>
                            <div>
                                <MotionDiv
                                    className={`${styles.excerpt}`}
                                >
                                    {parsedContent}
                                </MotionDiv>
                            </div>


                        </motion.div>
                    </MotionDiv>
                </motion.div>

            </motion.div>
        )
    }



export default BlogCard2D;