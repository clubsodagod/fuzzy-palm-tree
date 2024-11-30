import { ResolvingMetadata, Metadata } from "next"
import LetsWorkModule from "./_components/LetsWorkModule"


export const metadata: Metadata = {
    title: "Let's Work | Maliek Davis",
    description: "Get in touch with Maliek Davis to collaborate on your next digital project. Let's create something amazing together.",
    alternates: {
        canonical: '/im-a-programmer/lets-work',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'hire a developer'
}




const LetsWorkPage = () => {




    return (
        <LetsWorkModule />
    )
}

export default LetsWorkPage