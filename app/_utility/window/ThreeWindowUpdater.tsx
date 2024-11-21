'use client'
import { useAppContext } from '@/app/_context/AppContext';
import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { RefObject, useEffect } from 'react'

const ThreeWindowUpdater = (scrollRef: RefObject<HTMLDivElement>,scrollY:MotionValue) => {

    const { scroll: { windowHeight, windowScrollHeight, setWindowScrollHeight, setWindowHeight,  } } = useAppContext()
    return (
        useMotionValueEvent(scrollY, "change", () => {
            if (window && window.innerHeight != windowHeight) {
                setWindowHeight(window.innerHeight)
            }
        })
    )
}

export default ThreeWindowUpdater