import React, { useEffect } from 'react'


interface ScalingFactorManagerProps {
    scalingFactor:number;
    mainScalingFactor:number;
    setScalingFactor:React.Dispatch<number>;
}

const ScalingFactorManager = ({scalingFactor,setScalingFactor, mainScalingFactor}:ScalingFactorManagerProps) => {
    return (
        useEffect(()=> {
            if (mainScalingFactor != scalingFactor) {
                setScalingFactor(mainScalingFactor);
            }
        })
    )
}

export default ScalingFactorManager