import { PageWrapper } from '@/app/components'
import React, { RefObject } from 'react'

const Visuals:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
            <PageWrapper 
            ctnRef={ctnRef} 
            id='digital-solutions-visuals'
            >
                <div>Visuals</div>
            </PageWrapper>
    )
}

export default Visuals