import { CSSProperties } from "react";
import { Transition, Variants } from "framer-motion";

interface AnimationStyles {
    [key: string]: Variants | Transition | CSSProperties | undefined;
}


export const imAProgrammerStyles: AnimationStyles = {
    dynamicTemporalTransition: {
        duration: 0.5,
        ease: "easeInOut",
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    },
    slideIn: {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    },
    customStyle: {
        backgroundColor: "red", // CSS property
        opacity: 0.8,           // CSS property
    }
};
