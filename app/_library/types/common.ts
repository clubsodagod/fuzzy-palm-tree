import { Chapter, ExtendedPointUseCase, Point } from "@/library/const";
import type { HTMLMotionProps } from "framer-motion";
import { RefObject } from "react";

export type Photo = {
    portrait?:string;
    landscape?:string;
};

export type Video = {
    portrait?:string;
    landscape?:string;
}


export type PhotoV2 = string

export type VideoV2 = string



export type MotionDivProps = HTMLMotionProps<'div'>;

export interface HeroProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    id:string;
    scrollTo:(arg0:string)=>void|undefined;
}

export interface DynamicSectionProps extends HeroProps {
    chapter?:Chapter;
    factor?:Point;
    exFactor?:ExtendedPointUseCase;
    index?:number;
    left?:Boolean;
}

export type NavItemChild = {
    label:string;
    path?:string;
    children?: NavItemChild[]
}

export type NavItem = {
    label:string;
    path:string;
    children?: NavItemChild[]
}

export interface VisibilityThreeType {
    [key:string]:boolean
}

export interface ScalesThreeType {
    [key:string]:number
}
export interface VariantThreeType {
    [key:string]:string
}


export interface WorkerThreeType {
    [key:string]:WorkerType
}

export type VoidOneParameterFunction = (id: string) => void;

export type VoidTwoParameterFunction = (event: MouseEvent, id: string) => void;
import { MotionValue } from "framer-motion";
import { Session } from "next-auth";

export interface ScrollContainerData {
    scrollTop: number;
    scrollHeight: number;
    scrollProgress: number;
}

export interface ScrollContextProps {
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
    sevenEightsCtn:number,
    scrollY:MotionValue,
    scrollYProgress:MotionValue,
}

export type SessionStatusType = "authenticated" | "loading" | "unauthenticated";

export type SessionContextType = {
    session: Session | null;
    status: SessionStatusType;
    isAuthenticated:boolean|null;
};
