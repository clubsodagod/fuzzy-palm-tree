'use client'
import React from 'react'
import styles from './components.module.css'
import { motion } from 'framer-motion'
import { Avatar } from '@mui/material'
import { IBlog, IBlogPopulated } from '@/library/db/models/blog'
import parse from "html-react-parser";
import { useRouter } from 'next/navigation'


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

        const blogSlugRouter = (e:React.MouseEvent) => {
            router.push(`/blog/categories/${category.slug}/${slug}`)
        }

        return (

            <motion.div
                className={`${styles.blogCardWrapper}`}
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
                        onClick={(e)=>{blogSlugRouter(e);}}
                    >
                        {title}
                    </motion.p>
                    <div>
                        <motion.p
                            className={`${styles.excerpt}`}
                        >
                            {parsedContent}
                        </motion.p>
                    </div>


                </motion.div>

            </motion.div>
        )
    }



export default BlogCard2D;