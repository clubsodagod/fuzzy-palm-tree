'use client'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { FacebookRounded } from '@mui/icons-material';
import Link from 'next/link';


const Footer = () => {
    
    return (
        <div className='footer'>
            <footer className='footer'>
                <Link href={''} className='link'>
                    <YouTubeIcon className='footer-icon' />
                </Link>
                <Link href={''} className='link'>
                    <InstagramIcon className='footer-icon' />
                </Link>
                <Link href={''} className='link'>
                    <FacebookRounded className='footer-icon' />
                </Link>
                <Link href={''} className='link'>
                    <XIcon className='footer-icon' />
                </Link>
            </footer> 
            <p className='text' id='footer'>Developed & Designed w/❤️ by <span className='my-name-text' id='footer'>Maliek Davis</span></p>
            <p className='text' id='footer'>&copy; Maliek Davis 2024</p>
        </div>

    )
}

export default Footer