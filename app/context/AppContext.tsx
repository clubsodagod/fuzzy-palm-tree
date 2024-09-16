'use client'
import React, { ReactNode } from 'react'
import { MDSessionContext, ScreenContext, ScrollContext } from './sub-context'

const AppContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <MDSessionContext>
            <ScreenContext>
                <ScrollContext>
                    {children}
                </ScrollContext>
            </ScreenContext>            
        </MDSessionContext>
    )
}

export default AppContext