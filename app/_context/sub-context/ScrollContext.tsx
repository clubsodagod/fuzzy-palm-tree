'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef, RefObject } from 'react';
import { ScrollContextProps, ScrollContainerData } from '@/library/types/context';
import { useScroll as useScrollFramer } from 'framer-motion';

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



// ScrollProvider component
const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const bodyRef = useRef<RefObject<HTMLDivElement>>(null)
	const { scrollYProgress, scrollY, } = useScrollFramer({  offset: ['start end', 'end start'] })
    const [windowScrollHeight, setWindowScrollHeight] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    const dynamicIncrement = (iteration:number) => windowHeight * iteration ;

    const qtrCtn = windowScrollHeight / 4;
    const halfCtn = windowScrollHeight / 2;
    const threeQtrCtn = qtrCtn * 3;
    const eighthCtn = windowScrollHeight / 8;
    const threeEighthsCtn = eighthCtn * 3;
    const fiveEightsCtn = eighthCtn * 5;
    const sevenEightsCtn = eighthCtn * 7;
    const halfThirdCtn = (0.33 * windowScrollHeight) * 0.5;
    const twoThirdsCtn = (windowScrollHeight / 3) * 2;
    const oneThirdCtn = (windowScrollHeight / 3);
    const eightyFiveHundredthsCtn = twoThirdsCtn + halfThirdCtn;




    useEffect(()=>{
        {windowScrollHeight && windowScrollHeight}
        console.log(windowScrollHeight);
        
    }, [windowScrollHeight])

    return (
        <ScrollContext.Provider
            value={{
                windowScrollHeight,
                windowHeight,
                setWindowHeight,
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
                dynamicIncrement, scrollY
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
