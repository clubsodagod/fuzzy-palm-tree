'use client'

import  { useEffect, useState } from 'react'

// Define the available breakpoints
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1033,
    xl: 1280,
    '2xl': 1536,
};

const ScreenContext = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < window.innerHeight);
    };

    // Function to determine the current breakpoint based on window width
    const getBreakpoint = () => {
        const width = window.innerWidth;
        if (width >= breakpoints['2xl']) return '2xl';
        if (width >= breakpoints['xl']) return 'xl';
        if (width >= breakpoints['lg']) return 'lg';
        if (width >= breakpoints['md']) return 'md';
        if (width >= breakpoints['sm']) return 'sm';
        return 'xs'; // smaller than 'sm'
    };

    const updateScreenInfo = () => {
        checkIsMobile();  // Check if the screen is mobile
        setCurrentBreakpoint(getBreakpoint());  // Set the current breakpoint
    };

    useEffect(() => {
        updateScreenInfo(); // Initial check
        window.addEventListener('resize', updateScreenInfo);

        return () => {
            window.removeEventListener('resize', updateScreenInfo);
        };
    }, []);
    return {
        isMobile, currentBreakpoint
    }
}

export default ScreenContext