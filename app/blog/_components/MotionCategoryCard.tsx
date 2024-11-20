"use client"
import React from 'react';
import styles from './components.module.css';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { MotionH6 } from '@/app/_hide/_components/framer/MotionH6';
import { MotionP } from '@/app/_hide/_components/framer/MotionP';
import { goTo } from '@/utility/blog-section/blog-page-functions';
import { useRouter } from 'next/navigation';
import { Avatar, Chip, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ICategoryPopulated } from '@/app/_database/models/category';
import { ISubcategory } from '@/app/_database/models/subcategory';
import { useAppContext } from '@/app/_context/AppContext';


const MotionCategoryCard: React.FC<{
    category: ICategoryPopulated;
}> = ({
    category,
}) => {

        const router = useRouter();

        const {
            screen:{isMobile, currentBreakpoint},
        } = useAppContext();

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
                        <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', p:'7.5px' }}
                        >
                            {
                                subcategories.map((sc: ISubcategory, i: number) => {

                                    if (i>4) {
                                        return null
                                    }
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
                                                sx={{ color: "black", borderWidth: "2px", borderColor: grey[900], fontWeight: "bold", maxWidth:'45%' }}
                                            />
                                        )
                                    }
                                })
                            }
                        </Stack>
                    }
                </MotionDiv>

            </MotionDiv>
        )
    }



export default MotionCategoryCard;