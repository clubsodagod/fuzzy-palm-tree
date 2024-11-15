import { RefIDObject } from "@/app/_library/types/refs";
import { MotionValue, motionValue } from 'framer-motion'
import { RefObject } from "react";

export type ResponsiveValues = [mobile: number, tablet: number, large: number];

export type UseResponsiveValues = (values: ResponsiveValues) => number;

export const useResponsiveValues: UseResponsiveValues = (values: ResponsiveValues) => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth;

        switch (true) {
            case width <= 768:
                // Mobile breakpoint: max 768
                return values[0];
            case width > 768 && width <= 1024:
                // Tablet breakpoint: 769-1024
                return values[1];
            case width > 1024:
                // Large breakpoint: greater than 1024
                return values[2];
            default:
                // Fallback case (should not be needed)
                return values[2];
        }
    }
    // Default value if window is not defined (e.g., during server-side rendering)
    return values[2];
};

export type Puppeteer = (useTransform:(arg0:MotionValue,arg1:number[],arg2:number[])=>MotionValue,transformValue:MotionValue, scale:number[], x:number[],y:number[],z:number[], rotationX:number[], rotationY:number[], rotationZ:number[], eventPoints:number[]) => {
    scale:MotionValue,
    x:MotionValue,
    y:MotionValue,
    z:MotionValue,
    rotationY:MotionValue,
    rotationX:MotionValue,
    rotationZ:MotionValue,
}

export const Animate:Puppeteer = (useTransform, transformValue, scale, x, y, z, rotationY, rotationX, rotationZ, eventPoints) => {


    return {
        scale:  useTransform(transformValue,eventPoints,scale),
        x:  useTransform(transformValue,eventPoints,x),
        y: useTransform(transformValue,eventPoints,y),
        z: useTransform(transformValue,eventPoints,z),
        rotationX: useTransform(transformValue, eventPoints,rotationX),
        rotationY: useTransform(transformValue, eventPoints,rotationY),
        rotationZ: useTransform(transformValue, eventPoints,rotationZ),
        }
}

export const useMotionLogic = (scrollY: MotionValue, eventPoints: number[]) => {
    // Define properties like position and scale that might change with scroll.
    const x = motionValue(0);
    const y = motionValue(0);
    const scale = motionValue(1);

    // Define the updateScroll method for the object.
    const updateScroll = (scrollValue: number) => {
        // Here, update the properties based on the scrollValue.
        // This is where you define how `x`, `y`, and `scale` change with scrolling.
        const progress = scrollValue / eventPoints[eventPoints.length - 1]; // Example calculation
        
        x.set(progress * 10); // Example: Change position based on scroll progress
        y.set(progress * -5); // Example: Change y position
        scale.set(1 + progress * 0.5); // Example: Scale effect based on scroll
    };

    return {
        x,
        y,
        scale,
        updateScroll
    };
};

// Utility function to convert numbers to words
export const numberToWord = (num: number): string => {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    return words[num] || num.toString(); // Extend this array for larger numbers if needed
};

export interface DynamicRef {
    refs:RefObject<HTMLDivElement>[];
    idTemplate:string;
}

export type CreateDynamicRefs = (dynamicRefs:DynamicRef[]) => RefIDObject[];

export const createDynamicRefs:CreateDynamicRefs = (dynamicRefs) => {

    // Generate dynamic refs
    const dynoRefs = dynamicRefs.flatMap(({ refs, idTemplate }) => 
        refs.map((singleRef, index) => ({
            ref: singleRef,
            id: `${idTemplate}-${numberToWord(index)}`
        }))
    );

    // Combine with other static refs
    return [
        ...dynoRefs,
    ];
};