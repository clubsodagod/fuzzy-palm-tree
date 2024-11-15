import { RouterContextType, SessionContextType, SessionStatusType } from '@/library/types/context';
import { useSession } from 'next-auth/react';
import React, { createContext, ReactElement, useContext, } from 'react';
import { useMDSession } from './SessionContext';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';


const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useMDRouter = (): RouterContextType => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useMDRouter must be used within a MDRouterProvider.');
    }
    return context;
};

    
const MDRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const router = useRouter();




    return (
        <RouterContext.Provider value={{router}}>
            {children}
        </RouterContext.Provider>
    );
};

export default MDRouterProvider;