"use client"
import React from 'react';
import styles from './components.module.css';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import { MotionImg } from '@/app/_components/framer/MotionImg';
import { MotionH6 } from '@/app/_components/framer/MotionH6';
import { MotionP } from '@/app/_components/framer/MotionP';
import { ICategory, ICategoryPopulated } from '@/library/db/models/category';
import { useScreenContext } from '@/app/_context/sub-context/ScreenContext';
import { goTo } from '@/utility/blog-section/blog-page-functions';
import { useRouter } from 'next/navigation';
import { ISubcategory } from '@/library/db/models/subcategory';
import { Avatar, Chip } from '@mui/material';
import { grey } from '@mui/material/colors';


const MotionCategoryCard: React.FC<{
    category: ICategoryPopulated;
}> = ({
    category,
}) => {

        const router = useRouter();

        const {
            isMobile,
        } = useScreenContext();

        const {
            name, photo, slug, description, subcategories
        } = category;


        // handle url string function
        function url(slug: string) {
            return `/blog/categories/${slug}`
        }

        return (
            <MotionDiv
                className={`${styles.categoryCardWrapper}`}
                onClick={(e) => {e.preventDefault(); goTo(router, url(slug)) }}
            >

                {/* inner card wrapper */}
                <MotionDiv
                    className={`${styles.innerCategoryCardWrapper}`}
                >

                    {/* image component */}
                    <MotionDiv
                        className={`${styles.categoryCardImgWrapper}`}
                    >

                        <MotionImg
                            className={`${styles.categoryCardImg}`}
                            src={isMobile ? photo.portrait : photo.landscape}
                        />
                    </MotionDiv>

                    {/* category information component */}
                    <MotionDiv
                        className={`${styles.categoryInfoCtn}`}
                    >
                        <MotionH6
                            className={`${styles.categoryNameTxt}`}
                        >
                            {name}
                        </MotionH6>
                        <MotionP
                            className={`${styles.categoryDescriptionTxt}`}
                        >
                            {description}
                        </MotionP>
                    </MotionDiv>

                    {/* identifiers chip  component */}
                    {
                        subcategories.length > 0 &&
                        <MotionDiv
                            className={`${styles.categoryCardChipCtn}`}
                        >
                            {
                                subcategories.map((sc: ISubcategory, i: number) => {
                                    if (i % 2 == 0) {
                                        return (
                                            <Chip
                                                avatar={<Avatar alt={`${sc.name}`} src={isMobile ? sc.photo.portrait : sc.photo.landscape} />}
                                                label={sc.name}
                                                key={sc._id}
                                                sx={{ color: "white", fontWeight: "bold", backgroundColor: grey[900] }}
                                            />
                                        )
                                    } else {
                                        return (
                                            <Chip
                                                avatar={<Avatar alt={`${sc.name}`} src={isMobile ? sc.photo.portrait : sc.photo.landscape} />}
                                                label={sc.name}
                                                key={sc._id}
                                                variant="outlined"
                                                sx={{ color: "black", borderWidth: "2px", borderColor: grey[900], fontWeight: "bold" }}
                                            />
                                        )
                                    }
                                })
                            }
                        </MotionDiv>
                    }
                </MotionDiv>

            </MotionDiv>
        )
    }



export default MotionCategoryCard;