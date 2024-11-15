'use client'
import { useScroll } from "framer-motion"
import {  useState } from 'react'

const ScrollContext = () => {
    const [currentSection, setCurrentSection] = useState<string>('');
	const { scrollYProgress, scrollY, } = useScroll();
    const [windowScrollHeight, setWindowScrollHeight] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    const dynamicIncrement = (iteration:number) => windowHeight * iteration ;

    const qtrCtn = windowScrollHeight / 4;
    const halfCtn = windowScrollHeight / 2;
    const threeQtrCtn = qtrCtn * 3;
    const eighthCtn = windowScrollHeight / 8;
    const threeEighthsCtn = eighthCtn * 3;
    const fiveEightsCtn = eighthCtn * 5;
    const sevenEightsCtn = eighthCtn * 7;
    const halfThirdCtn = (0.33 * windowScrollHeight) * 0.5;
    const twoThirdsCtn = (windowScrollHeight / 3) * 2;
    const oneThirdCtn = (windowScrollHeight / 3);
    const eightyFiveHundredthsCtn = twoThirdsCtn + halfThirdCtn;





    return {
        
        windowScrollHeight,
        windowHeight,
        setWindowHeight,
        setWindowScrollHeight,
        eighthCtn,
        halfThirdCtn,
        twoThirdsCtn,
        oneThirdCtn,
        eightyFiveHundredthsCtn,
        halfCtn,
        qtrCtn,
        threeQtrCtn,
        threeEighthsCtn,
        fiveEightsCtn,
        sevenEightsCtn,
        dynamicIncrement, scrollY, scrollYProgress,
        currentSection,
        setCurrentSection
    }
}

export default ScrollContext