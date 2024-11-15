import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import React, { useEffect, useRef } from 'react'

interface VisibilityManagerProps {
    scales: ScalesThreeType;
    visible: VisibilityThreeType;
    setVisible: React.Dispatch<React.SetStateAction<VisibilityThreeType>>;
}

const VisibilityManager  = ({scales,visible, setVisible}:VisibilityManagerProps) => {
    const prevScalesRef = useRef<typeof scales | null>(null);


    return (
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

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scales, setVisible])
    )
}

export default VisibilityManager