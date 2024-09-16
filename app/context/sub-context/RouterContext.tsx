import { RouterContextType, SessionContextType, SessionStatusType } from '@/library/types/context';
import { useSession } from 'next-auth/react';
import React, { createContext, ReactElement, useContext, } from 'react';
import { useMDSession } from './SessionContext';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';


const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useMDRouter = (): RouterContextType => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useMDRouter must be used within a MDRouterProvider.');
    }
    return context;
};

    
const MDRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {





    return (
        <RouterContext.Provider value={{}}>
            {children}
        </RouterContext.Provider>
    );
};

export default MDRouterProvider;