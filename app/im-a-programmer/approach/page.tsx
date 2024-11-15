import React from 'react'
import ProgrammerApproachModule from '../_components/approach/ProgrammerApproachModule';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function ProgrammerApproachPage() {

    
    
    return (
        <ProgrammerApproachModule
        posts={undefined}
        />
    )
}
