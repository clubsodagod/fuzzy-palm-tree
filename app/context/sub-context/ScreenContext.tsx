import React, { createContext, useContext, useEffect, useState } from 'react';

type ScreenContextType = {
    isMobile: boolean;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const useIsMobile = (): ScreenContextType => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error('useIsMobile must be used within a IsMobileProvider');
    }
    return context;
};

const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < window.innerHeight);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <ScreenContext.Provider value={{ isMobile }}>
            {children}
        </ScreenContext.Provider>
    );
};

export default ScreenProvider