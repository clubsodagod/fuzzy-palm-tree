import { SessionContextType } from '@/library/types/context';
import { useSession } from 'next-auth/react';
import React, { createContext, useContext, } from 'react';


const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useMDSession = (): SessionContextType => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useMDSession must be used within a MDSessionProvider.');
    }
    return context;
};

const MDSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // access next auth session
    const {data:session, status} = useSession();

    // create boolean for page protection logic
    const getIsAuthenticated = () => {
        if(status==="unauthenticated"){
            return false
        } else if (status==="authenticated") {
            return true
        }
        return null
    };

    const isAuthenticated = getIsAuthenticated();


    return (
        <SessionContext.Provider value={{session, status, isAuthenticated}}>
            {children}
        </SessionContext.Provider>
    );
};

export default MDSessionProvider