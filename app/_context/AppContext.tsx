'use client'

import { createContext, useContext,} from "react";
import { AppContainerContextType, ScreenContextType, ScrollContextType } from "../_library/types/context";
import ScreenContext from "./building-blocks/ScreenContext";
import ScrollContext from "./building-blocks/ScrollContext";
import AppContainerContext from "./building-blocks/AppContainerContext";

type AppContextType = {
    screen:ScreenContextType,
    scroll:ScrollContextType,
    appContainer:AppContainerContextType,
}

const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a useAppProvider');
    }
    return context;
};


const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
    const screen = ScreenContext();

    const scroll = ScrollContext();

    const appContainer = AppContainerContext();

    return (
        <AppContext.Provider value={{ screen, scroll, appContainer }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider