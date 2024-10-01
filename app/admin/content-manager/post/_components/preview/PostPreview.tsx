import React, { useEffect, useState } from 'react';
import parse from "html-react-parser";
import { Typography, CardMedia, Chip } from '@mui/material';
import { grey } from '@mui/material/colors';
import { motion } from 'framer-motion';
import { BlogDocumentType } from '@/library/db/models/blog';
import { useScreenContext } from '@/app/context/sub-context/ScreenContext';
import { ISubcategory } from '@/library/db/models/subcategory';
import { ICategory } from '@/library/db/models/category';

type ChipsType = {
    subcategories:Partial<ISubcategory[]>,
    category:Partial<ICategory>,
}

const PostPreview: React.FC<{
    blogDocument: Partial<BlogDocumentType>,
    subcategories: Partial<ISubcategory[]>,
    categories: Partial<ICategory[]|null>,
}> = ({
    blogDocument:{featuredImg, title, featuredVideo, content, category, subcategories, tags},
    subcategories:sc,
    categories,
}) => {

    const [chips, setChips] = useState<Partial<ChipsType>>();

    const handleChips = () => {
        if(subcategories) {
            const data = sc.filter((s,i)=> subcategories.includes(s?._id as string) )
            console.log(data);
            setChips((prevForm:Partial<ChipsType>|undefined)=>({
                ...prevForm,
                subcategories:data,
            }))
        } if (category) {
            const data = categories!.filter((c,i)=> category === c?._id as unknown as string )
            console.log(data);
            setChips((prevForm:Partial<ChipsType>|undefined)=>({
                ...prevForm,
                category:data[0],
            }))
        }
    };

    useEffect(()=> {
        handleChips();
    },[])

    
    const { isMobile } = useScreenContext();
        return (
            <div className='md:w-3/5 flex flex-col justify-center items-center'>
                <div className='py-6'>
                    <Typography variant='h3' sx={{ color: grey[50] }} className='font-bold'>
                        Post Preview
                    </Typography>
                </div>
                <div className='w-full' style={{ backgroundColor: "#FFF" }}>
                    {featuredImg &&
                        <div className='w-full my-3'>
                            <CardMedia
                                className='h-[10vh]'
                                sx={{ objectFit: 'cover' }}
                                component='img'
                                src={isMobile ? featuredImg.portrait : featuredImg.landscape}
                                alt="Image"
                            />
                        </div>
                    }


                    <div className='p-6'>
                        <div>
                            <Typography variant='h3' sx={{}} className='text-center'>
                                {title}
                            </Typography>
                        </div>
                        <motion.div>
                            {
                                chips?.category && 
                                <Chip sx={{color:grey[800], bgcolor:'white', border:"1px solid black", fontWeight:"bold"}} label={chips.category.name} />
                            }
                            {
                                chips?.subcategories && chips.subcategories.length > 0 &&
                                chips.subcategories.map((s,i:number)=> {
                                    return(
                                        <Chip key={`${s}`} label={s?.name} sx={{bgcolor:grey[800], color:'white', fontWeight:"bold"}} />
                                    )
                                })
                            }
                        </motion.div>
                        <article>
                            {content && parse(content)}
                        </article>
                    </div>

                </div>

            </div>
        )
    }

export default PostPreview