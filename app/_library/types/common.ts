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


export interface WorkerThreeType {
    [key:string]:WorkerType
}

export type VoidOneParameterFunction = (id: string) => void;

export type VoidTwoParameterFunction = (event: MouseEvent, id: string) => void;