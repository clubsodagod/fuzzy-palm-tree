'use client'
import { useAnimationControls } from "framer-motion";
import React, { useState } from 'react';

const AppContainerContext = () => {

    const [currentSection, setCurrentSection] = useState<string|undefined>();

    const scrollRef = React.useRef<HTMLDivElement>(null);

    // const {scrollY, scrollYProgress} = useScroll({container:scrollRef,});

    const controls = useAnimationControls();

    


    return {
        currentSection, setCurrentSection,
        scrollRef, controls, 
    }
}

export default AppContainerContext