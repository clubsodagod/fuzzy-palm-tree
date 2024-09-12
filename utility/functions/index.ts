import { MotionValue, useTransform } from "framer-motion";
import { RefObject } from "react";
import { RefIDObject } from "../refs/programmer-page-refs";
import { FormDocument, RegisterForm } from "@/library/types/form/register";

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

export type Puppeteer = (useTransform:any,transformValue:MotionValue, scale:number[], x:number[],y:number[],z:number[], rotationY:number[], eventPoints:number[]) => {
    scale:MotionValue,
    x:MotionValue,
    y:MotionValue,
    z:MotionValue,
    rotationY:MotionValue,
}

export const Animate:Puppeteer = (useTransform, transformValue, scale, x, y, z, rotationY, eventPoints) => {

    return {
        scale:  useTransform(transformValue,eventPoints,scale),
        x:  useTransform(transformValue,eventPoints,x),
        y: useTransform(transformValue,eventPoints,y),
        z: useTransform(transformValue,eventPoints,z),
        rotationY: useTransform(transformValue, eventPoints,rotationY)
        }
}
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

export const shouldRenderObject = (
    scrollY: MotionValue,
    start: number, 
    end: number, 
    Component: React.ReactNode, 
    props: any = {}
  ) => {
    // Check if the scrollY is within the range [start, end]
    if (scrollY.get() >= start && scrollY.get() <= end) {
      // Return the component with passed props if within range
      return Component;
    }
    // Return null if not within range (meaning the component is not rendered)
    return null;
  };


export type  HandleSubmit = (arg0:FormDocument, arg1:string) => {message?:string, error:boolean}


// Debounce utility function to delay validation execution
export const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
    

// Function to validate fields
export const validateField = (name: string, value: string, form:any) => {
    let isValid = true;
  
    switch (name) {
      case 'firstName':
      case 'lastName':
        // First name and Last name should be at least 2 characters long, and contain only letters
        const nameRegex = /^[a-zA-Z]+(?:['-.\s][a-zA-Z]+)*$/;
        isValid = value.trim().length > 1 && nameRegex.test(value);
        break;
  
        case 'username':
            // Username should be at least 2a characters long
            // Can contain alphanumeric characters, underscores, and periods
            // Must include at least one letter or number
            // If exactly 1 character, it must be a letter
            const usernameRegex = /^(?=[a-zA-Z0-9_.]*)(?:(?=.*[a-zA-Z])|(?=.*\d)).{2,}$/;
            const singleCharLetterRegex = /^[a-zA-Z]$/;
            
            if (value.trim().length === 1) {
              isValid = singleCharLetterRegex.test(value.trim());
            } else {
              isValid = usernameRegex.test(value.trim());
            }
            break;
  
      case 'email':
        // Email should follow a more comprehensive pattern for validation, accounting for various email formats
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        isValid = emailRegex.test(value.trim());
        break;
  
      case 'emailConfirm':
        // Confirm email must exactly match the entered email
        isValid = value.trim() === form.email?.trim();
        break;
  
      case 'password':
        // Password should be at least 8 characters long, contain one uppercase letter, one number, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        isValid = passwordRegex.test(value);
        break;
  
      case 'confirmPassword':
        // Confirm password must exactly match the entered password
        isValid = value === form?.password;
        break;
  
      default:
        isValid = true;
    }
  
    return isValid;
  };