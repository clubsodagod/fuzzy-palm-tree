import React, { useEffect } from 'react'


interface ScalingFactorManagerProps {
    scalingFactor:number;
    mainScalingFactor:number;
    setScalingFactor:React.Dispatch<number>;
}

const ScalingFactorManager = ({scalingFactor,setScalingFactor, mainScalingFactor}:ScalingFactorManagerProps) => {
    return (
        useEffect(()=> {
            if (mainScalingFactor !== scalingFactor) {
                setScalingFactor(mainScalingFactor);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[mainScalingFactor, scalingFactor, ])
    )
}

export default ScalingFactorManager