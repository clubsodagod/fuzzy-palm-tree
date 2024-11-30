import { useSession } from 'next-auth/react';



const SessionContext = () => {

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


    return {
        session,
        status,
        isAuthenticated
    }
};

export default SessionContext