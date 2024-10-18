import { Session } from "next-auth";

export interface ScrollContainerData {
    scrollTop: number;
    scrollHeight: number;
    scrollProgress: number;
}

export interface ScrollContextProps {
    scrollX: number; // Represents the X-axis scroll position
    scrollY: number; // Represents the Y-axis scroll position
    scrollYPro: number; // Represents a processed value for Y-axis scrolling
    setScrollYPro: (value: number) => void; // Function to update scrollYPro
    windowHeight: number; // Represents a processed value for Y-axis scrolling
    setWindowHeight: (value: number) => void; // Function to update scrollYPro
    windowScrollHeight: number; // Represents a processed value for Y-axis scrolling
    setWindowScrollHeight: (value: number) => void; // Function to update scrollYPro
    dynamicIncrement: (value: number) => number; // Function to update scrollYPro
    halfCtn:number,
    qtrCtn:number,
    halfThirdCtn:number,
    twoThirdsCtn:number,
    eightyFiveHundredthsCtn:number,
    oneThirdCtn:number;
    threeQtrCtn:number,
    threeEighthsCtn:number,
    eighthCtn:number,
    fiveEightsCtn:number,
    sevenEightsCtn:number
}

export type SessionStatusType = "authenticated" | "loading" | "unauthenticated";

export type SessionContextType = {
    session: Session | null;
    status: SessionStatusType;
    isAuthenticated:boolean|null;
};

export type RouterContextType = {

};