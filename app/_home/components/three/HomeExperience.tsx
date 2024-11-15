'use client'
import { useAppContext } from '@/app/_context/AppContext';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useHomePageMotion } from '../../utility/motion';
import { Float } from '@react-three/drei';
import MacBook from '@/public/3d-objects/macbook/Macbook';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup';
import { useScroll } from 'framer-motion';

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

    const [visible, setVisible] = useState({
        macbook: true,
    });

    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, 0.6), 3) : 1;

    const macbook = programmerMotion().scale.get() * mainScalingFactor;

    const [scales, ] = useState({
        macbook,
    });

    const prevScalesRef = useRef<typeof scales | null>(null);

    // Assuming scales is a prop or state
    useEffect(() => {
        // Store the previous scales values using a ref to compare

        // Create a deep comparison function or use lodash's _.isEqual for deep comparison if needed
        const hasScalesChanged = (prev: typeof scales | null, next: typeof scales) => {
            if (!prev) return true; // Initial render case
            return Object.keys(next).some((key) => prev[key as keyof typeof prev] !== next[key as keyof typeof next]);
        };

        // If scales object has changed, update the visibility
        if (hasScalesChanged(prevScalesRef.current, scales)) {
            Object.keys(scales).forEach((key) => {
                const value = scales[key as keyof typeof scales];

                if (value > 0 || value < 0) {
                    setVisible((prev) => ({
                        ...prev,
                        [key]: true,
                    }));
                } else {
                    setVisible((prev) => ({
                        ...prev,
                        [key]: false,
                    }));
                }

            });

            // Update the ref to the latest scales
            prevScalesRef.current = scales;
            console.log(visible);

        }
    }, [scales, visible]);

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