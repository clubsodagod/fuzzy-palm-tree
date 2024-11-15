import { ScalesThreeType } from '@/app/_library/types/common';
import { MotionValue } from 'framer-motion'
import React from 'react'

interface ScaleManagerProps {
    scrollY: MotionValue;
    setScales:React.Dispatch<ScalesThreeType>;
    scalesPayload:ScalesThreeType;
}

const ScaleManager = ({ scrollY,setScales, scalesPayload }: ScaleManagerProps) => {

    const scrollFactor = scrollY.get()
    const scrollFactorPrevious = scrollY.getPrevious()

    return (
        React.useEffect(() => {
            if (scrollFactor != scrollFactorPrevious) {
                setScales(scalesPayload);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [scrollFactor, scrollFactorPrevious])
    )
}

export default ScaleManager