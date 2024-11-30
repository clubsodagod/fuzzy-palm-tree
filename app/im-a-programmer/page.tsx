import React from 'react'
import ProgrammerModule from './_components/ProgrammerModule';
import { ResolvingMetadata, Metadata } from 'next';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;


export const metadata: Metadata = {
    title: "More Than a Programmer | Maliek Davis",
    description: "Maliek Davis, a passionate software engineer, shares insights on clean architecture, systems design, and agile development.",
    alternates: {
        canonical: '/im-a-programmer',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'maliek davis software engineer'
}


const ProgrammerPage = () => {


    return (
        <ProgrammerModule />
    )
}

export default ProgrammerPage