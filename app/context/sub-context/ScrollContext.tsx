'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { ScrollContextProps, ScrollContainerData } from '@/library/types/context';

// Create the context with default values
const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

// Custom hook for accessing the scroll context
export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};

// Function to calculate scroll progress
const calculateScrollProgress = (scrollTop: number, containerHeight: number): number => {
    if (containerHeight <= 0) {
        console.warn(`Invalid container height: ${containerHeight}`);
        return 0; // Prevent division by zero or negative height
    }   
    console.log(window.innerHeight);
    
    const scrollProgress = scrollTop / (containerHeight - window.innerHeight);
    console.log(`${scrollProgress} context`);
    
    console.log(`scrollTop: ${scrollTop}, containerHeight: ${containerHeight}, scrollProgress: ${scrollProgress}`);
    return Math.min(Math.max(scrollProgress, 0), 1); // Ensure the result is between 0 and 1
};

// ScrollProvider component
const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [windowScrollHeight, setWindowScrollHeight] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [scrollYPro, setScrollYPro] = useState<number>(windowScrollHeight);

    const dynamicIncrement = (iteration:number) => windowHeight * iteration ;

    const qtrCtn = scrollYPro / 4;
    const halfCtn = scrollYPro / 2;
    const threeQtrCtn = qtrCtn * 3;
    const eighthCtn = scrollYPro / 8;
    const threeEighthsCtn = eighthCtn * 3;
    const fiveEightsCtn = eighthCtn * 5;
    const sevenEightsCtn = eighthCtn * 7;
    const halfThirdCtn = (0.33 * scrollYPro) * 0.5;
    const twoThirdsCtn = (scrollYPro / 3) * 2;
    const oneThirdCtn = (scrollYPro / 3);
    const eightyFiveHundredthsCtn = twoThirdsCtn + halfThirdCtn;


    // Update scroll positions on window scroll
    useEffect(() => {
        const handleWindowScroll = () => {
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, []);

    useEffect(()=>{
        {windowScrollHeight && windowScrollHeight}
        console.log(windowScrollHeight);
        
    }, [windowScrollHeight])

    return (
        <ScrollContext.Provider
            value={{
                scrollX,
                scrollY, 
                scrollYPro,
                setScrollYPro,
                windowHeight,
                setWindowHeight,
                windowScrollHeight,
                setWindowScrollHeight,
                eighthCtn,
                halfThirdCtn,
                twoThirdsCtn,
                oneThirdCtn,
                eightyFiveHundredthsCtn,
                halfCtn,
                qtrCtn,
                threeQtrCtn,
                threeEighthsCtn,
                fiveEightsCtn,
                sevenEightsCtn,
                dynamicIncrement
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
