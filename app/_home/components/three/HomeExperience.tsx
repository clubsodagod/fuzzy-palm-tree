'use client'
import { useAppContext } from '@/app/_context/AppContext';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useHomePageMotion } from '../../utility/motion';
import { Float } from '@react-three/drei';
import MacBook from '@/public/3d-objects/macbook/Macbook';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup';
import { useScroll } from 'framer-motion';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import { VisibilityThreeType } from '@/app/_library/types/common';

const HomeExperience = () => {

    // 3D objects
    const CachedMacBook = React.memo(MacBook);

    const { scroll: { dynamicIncrement: dI, }, appContainer:{scrollRef}} = useAppContext();
    const {scrollY,} = useScroll({container:scrollRef,});
    // create event points for handling scroll animations
    const homeEventPoints = useMemo(() => {
        return [
            0, (dI(0.5)),
            (dI(1)), (dI(1.5)),
            (dI(2)),
        ]
    }, [dI]);

    const { programmerMotion } = useHomePageMotion(scrollY, homeEventPoints,);

    const [scalingFactor, setScalingFactor] = useState<number>(1);

    const [visible, setVisible] = useState<VisibilityThreeType>({
        macbook: true,
    });

    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, 0.6), 3) : 1;

    const macbook = programmerMotion().scale.get() * mainScalingFactor;

    const [scales, ] = useState({
        macbook,
    });

    const prevScalesRef = useRef<typeof scales | null>(null);

    // Visibility manager
    VisibilityManager({scales,visible,setVisible})

    useEffect(() => {
        if (scalingFactor) {
            setScalingFactor(mainScalingFactor);
        }

    }, [mainScalingFactor, scalingFactor]);


    return (

        <MotionGroup
            scale={mainScalingFactor}
        >


            <MotionGroup
                name='macbook'
                visible={visible.macbook}
                castShadow
                initial={{ scale: 0 }}
                
                rotation={[programmerMotion().rotationX, programmerMotion().rotationY, programmerMotion().rotationZ]}
                position={[programmerMotion().x, programmerMotion().y, programmerMotion().z]}
                scale={programmerMotion().scale}
            >
                <Float
                    floatIntensity={0.0625}
                    rotationIntensity={1.25}
                >
                    <CachedMacBook />
                </Float>
            </MotionGroup>
        </MotionGroup>
    )
}

export default HomeExperience