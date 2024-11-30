import React from 'react'
import { MotionDiv } from './framer/MotionDiv'
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AppBar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar
            className='flex flex-col gap-1 w-full justify-center py-1 pt-2 z-50 relative'
        >
            <MotionDiv
                className='flex gap-3 justify-center '
            >
                <MotionDiv
                className='cursor-pointer'
                >
                    <YouTubeIcon />
                </MotionDiv>

                <MotionDiv
                className='cursor-pointer'
                >
                    <LinkedInIcon />
                </MotionDiv>

                <MotionDiv
                className='cursor-pointer'
                >
                    <GitHubIcon />
                </MotionDiv>

                <MotionDiv
                className='cursor-pointer'
                >
                    <WhatsAppIcon />
                </MotionDiv>

            </MotionDiv>
            <Typography variant='caption' className="text-center">
                DESIGNED & DEVELOPED BY MALIEK DAVIS &#x1F3A8;
            </Typography>
        </AppBar>
    )
}

export default Footer