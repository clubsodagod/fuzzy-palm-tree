import React from 'react'
import ProgrammerModule from './_components/ProgrammerModule';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

const ProgrammerPage = () => {


    return (
        <ProgrammerModule />
    )
}

export default ProgrammerPage