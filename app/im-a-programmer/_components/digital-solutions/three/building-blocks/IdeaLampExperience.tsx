import { MotionGroup } from '@/app/_components/common/framer/MotionGroup'
import IdeaLamp from '@/public/3d-objects/digital-solutions/idea-lamp/Scene'
import { MotionProps } from 'framer-motion'
import React from 'react'



export function IdeaLampExperience (props:any) {
    return (
        <MotionGroup
            {...props}
        >
            <IdeaLamp />
        </MotionGroup>
    )
}

export default IdeaLampExperience