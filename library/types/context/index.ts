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
    windowScrollHeight: number; // Represents a processed value for Y-axis scrolling
    setWindowScrollHeight: (value: number) => void; // Function to update scrollYPro
    halfCtn:number,
    qtrCtn:number,
    threeQtrCtn:number,
    threeEighthsCtn:number,
    eighthCtn:number,
    fiveEightsCtn:number,
    sevenEightsCtn:number
}

