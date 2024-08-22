'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { ScrollContextProps } from '@/library/types/context';

// Create the context with default values
const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

// Create a custom hook for easier access to the context
export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};

// Create a provider component
const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [divScrollTop, setDivScrollTop] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

    const divRef = useRef<HTMLDivElement>(null);

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

    // Update scroll position and height for the specific div
    useEffect(() => {
        const handleDivScroll = () => {
            if (divRef.current) {
                setDivScrollTop(divRef.current.scrollTop);
                setDivHeight(divRef.current.scrollHeight);
            }
        };

        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener('scroll', handleDivScroll);
        }

        // Cleanup on unmount
        return () => {
            if (divElement) {
                divElement.removeEventListener('scroll', handleDivScroll);
            }
        };
    }, [divRef]);

    return (
        <ScrollContext.Provider value={{ scrollX, scrollY, setScrollX, setScrollY, divRef, divScrollTop, divHeight }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
