import React from 'react';
import parse from "html-react-parser";
import { Typography, CardMedia } from '@mui/material';
import { grey } from '@mui/material/colors';

const PostPreview:React.FC<{
  photo?:string;
  title?:string;
  body?:any;
}> = ({
  photo, title, body,
}) => {
  return (
<div className='md:w-3/5 flex flex-col justify-center items-center'>
                            <div className='py-6'>
                                <Typography variant='h3' sx={{color: grey[50]}} className='font-bold'>
                                    Post Preview 
                                </Typography>
                            </div>
                            <div className='w-full' style={{backgroundColor: "#FFF"}}>
                                {photo !== '' &&
                                    <div className='w-full my-3'>
                                        <CardMedia 
                                        className='h-[10vh]'
                                        sx={{objectFit: 'cover'}}
                                        component='img'
                                        src={photo}
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
                                    <article>
                                            {body && parse(body)}
                                    </article>                            
                                </div>

                            </div>

                        </div>
  )
}

export default PostPreview