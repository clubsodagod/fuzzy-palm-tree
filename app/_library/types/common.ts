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