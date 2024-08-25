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

    // State to store scroll data for multiple containers using unique ids
    const [scrollContainers, setScrollContainers] = useState<{
        [key: string]: ScrollContainerData;
    }>({});

    // Dynamic refs for multiple scrollable containers
    const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Function to initialize ref for each container
    const setContainerRef = (ref: HTMLDivElement | null, id: string) => {
        if (ref) {
            containerRefs.current[id] = ref;
        }
    };

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

    // Update scroll position and height for each container
    useEffect(() => {
        const handleScroll = () => {
            const newScrollData: {
                [key: string]: ScrollContainerData;
            } = {};

            Object.entries(containerRefs.current).forEach(([id, ref]) => {
                if (ref) {
                    const scrollTop = ref.scrollTop ?? 0; // Default to 0 if undefined
                    const scrollHeight = ref.scrollHeight ?? 0; // Default to 0 if undefined

                    if (scrollHeight > 0) { // Ensure scrollHeight is valid before calculation
                        const scrollProgress = calculateScrollProgress(scrollTop, scrollHeight);
                        newScrollData[id] = {
                            scrollTop,
                            scrollHeight,
                            scrollProgress,
                        };
                    } else {
                        console.warn(`Invalid scroll height for container ${id}`);
                    }
                } else {
                    console.warn(`Ref for container ${id} is not set`);
                }
            });

            setScrollContainers(newScrollData);
        };

        // Attach scroll listeners to all containers
        Object.values(containerRefs.current).forEach((ref) => {
            if (ref) {
                ref.addEventListener('scroll', handleScroll);
            }
        });

        // Initial handleScroll call to set initial state
        handleScroll();

        // Cleanup on unmount
        return () => {
            Object.values(containerRefs.current).forEach((ref) => {
                if (ref) {
                    ref.removeEventListener('scroll', handleScroll);
                }
            });
        };
    }, []); // Run once on mount


    return (
        <ScrollContext.Provider
            value={{
                scrollX,
                scrollY,
                setScrollX,
                setScrollY,
                scrollContainers,
                setContainerRef, // Provide function to set refs using unique id
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
