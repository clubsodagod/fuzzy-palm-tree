import { ResolvingMetadata, Metadata } from "next"
import ResumeModule from "./resume-module/ResumeModule"





export const metadata: Metadata = {
    title: 'Resume | Maliek Davis',
    description: "View Maliek Davis' professional resume, showcasing his experience, skills, and projects in software engineering.",
    alternates: {
        canonical: '/about/resume',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'hire software engineer'
}


const ResumePage = () => {

    return (
        <ResumeModule />
    )
}

export default ResumePage