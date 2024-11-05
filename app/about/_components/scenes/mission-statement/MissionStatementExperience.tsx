'use client'

import { MotionGroup } from '@/app/_components/framer/MotionGroup'
import { useAboutSectionRefs } from '@/app/about/_utils/refs'
import { Moon, PowerTower, SolarPanel } from '@/public/3d-objects'
import { BBAnchor, Box } from '@react-three/drei'
import { MotionValue } from 'framer-motion'
import React, { useEffect, useMemo, useRef } from 'react'


const MissionStatementExperience: React.FC<{ scrollY: MotionValue ,visible:{moon:boolean,powerTower:boolean}}> = ({
    scrollY, visible
}) => {
    const {refs} = useAboutSectionRefs();

    const MemoizedMoon = React.memo(Moon);
    const MemoizedPowerTower = React.memo(PowerTower);

    const moonRef = useRef(null)
    const powerTowerRef = useRef(null)


    useEffect(()=>{

    },[])

    return (
        <group
        >


            <MotionGroup
            >
                <MotionGroup
                    position={[0, -30, 0]}
                    ref={moonRef}
                >
                    <MemoizedMoon scale={15} />
                </MotionGroup>

                <MotionGroup
                    position={[0, -12, 12]}
            rotation={[0.75, 0, 0]}
                >
                    <MemoizedPowerTower
                        scale={0.2} />
                </MotionGroup>

            </MotionGroup>


        </group >
    )
}

export default MissionStatementExperience