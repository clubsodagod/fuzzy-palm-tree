import React from 'react'
import { MotionA } from './framer/MotionA'
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AppBar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { MotionDiv } from './framer/MotionDiv';

const Footer = () => {

    const router = useRouter();

    return (
        <AppBar
            className='flex flex-col gap-1 w-full justify-center py-1 pt-2 z-50 relative'
        >
            <MotionDiv
                className='flex gap-3 justify-center '
            >
                <MotionA
                target='_blank'
                href={`https://www.youtube.com/@PearlBoxCode`}
                className='cursor-pointer '
                >
                    <YouTubeIcon />
                </MotionA>

                <MotionA
                target='_blank'
                href={`https://www.linkedin.com/in/maliek-davis`}
                className='cursor-pointer'
                >
                    <LinkedInIcon />
                </MotionA>

                <MotionA
                target='_blank'
                href={`https://github.com/clubsodagod?tab=repositories`}
                className='cursor-pointer'
                >
                    <GitHubIcon />
                </MotionA>

                {/* <MotionA
                target='_blank'
                href={``}
                className='cursor-pointer'
                >
                    <WhatsAppIcon />
                </MotionA> */}

            </MotionDiv>
            <Typography variant='caption' className="text-center">
                DESIGNED & DEVELOPED BY MALIEK DAVIS &#x1F3A8;
            </Typography>
        </AppBar>
    )
}

export default Footer