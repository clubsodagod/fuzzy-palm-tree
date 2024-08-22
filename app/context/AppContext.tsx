'use client'
import React, { ReactNode } from 'react'
import { ScreenContext, ScrollContext } from './sub-context'

const AppContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ScreenContext>
            <ScrollContext>
                {children}
            </ScrollContext>
        </ScreenContext>
    )
}

export default AppContext