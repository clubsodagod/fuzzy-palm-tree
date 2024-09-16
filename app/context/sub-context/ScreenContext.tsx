import React, { createContext, useContext, useEffect, useState } from 'react';

type ScreenContextType = {
    isMobile:boolean;
    currentBreakpoint:string;
};

// Define the available breakpoints
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1033,
    xl: 1280,
    '2xl': 1536,
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const useScreenContext = (): ScreenContextType => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error('useScreenContext must be used within a useScreenProvider');
    }
    return context;
};

const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

    return (
        <ScreenContext.Provider value={{ isMobile, currentBreakpoint }}>
            {children}
        </ScreenContext.Provider>
    );
};

export default ScreenProvider