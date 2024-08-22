import React from 'react';
import Footer from './Footer';


const AppContainer:React.FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <div className="app-ctn">
            {children}
            <Footer />
        </div>
    )
}

export default AppContainer