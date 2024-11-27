'use client'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import Header from '@/app/_components/common/Header'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import React, { useEffect, useState } from 'react'
import { Document, Page, } from 'react-pdf';
import { pdfjs } from "react-pdf";
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { technologies } from '@/app/_library/const/resume'
import { MotionImg } from '@/app/_components/common/framer/MotionImg'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import ButtonPro from '@/app/_components/common/ButtonPro'
import { grey } from '@mui/material/colors'
import { useAboutSectionRefs } from '../_utils/refs'
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher'
import WindowUpdater from '@/app/_utility/window/WindowUpdater'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

if (typeof Promise.withResolvers === 'undefined') {
    if (window)
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        window.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
}



const ResumePage = () => {
    const handleDownload = (uri: string) => {
        const link = document.createElement('a');
        link.href = uri;
        link.download = 'maliek_davis_resume'; // File name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const docs = [
        { uri: "/documents/Maliek_Davis_CV.pdf" }, // Local File
    ];
    const [currentSection, setCurrentSection] = useState<string>('');
    // create visible states
    const [scalingFactor, setScalingFactor] = React.useState<number>(1);
    const {
        resumeMainRef, resumeRefs: refs, scrollRef
    } = useAboutSectionRefs();

    WindowUpdater(scrollRef);

    IntersectionWatcher({ refs });

    useEffect(()=> {
    // Scaling value for responsive experience
    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.1 : 0.1), 3) : 1;

        if (mainScalingFactor !== scalingFactor) {
            setScalingFactor(mainScalingFactor)
        }
    }, [scalingFactor])


    return (
        <MotionPageWrapper
            ctnRef={resumeMainRef}
            id={`about-resume-main`}
        >
            <MotionDiv
                className='hero-wrapper'
            >
                <Header
                    headerLabel='Resume'
                    tagLine='Summary of My Skills & Core Competencies'
                />

                <MotionDiv
                    className='flex w-full gap-3'
                >

                    <MotionDiv
                        className='text-left w-1/2 flex flex-col gap-6'
                    >
                        <MotionDiv

                            className='flex flex-col gap-3 mt-10'
                        >
                            <Typography variant='h5'>
                                What I Offer
                            </Typography>
                            <Typography variant='body1' >
                                Relentless dedication and ownership of work. Fueled by a passion to reveal the transformative power of computer science, and creative problem solving.
                            </Typography>
                        </MotionDiv>
                        <MotionDiv
                            className='flex flex-col gap-3'
                        >
                            <Typography variant='h5'>
                                Areas of Mastery & Passion
                            </Typography>
                            <MotionDiv>
                                <Typography variant='subtitle1' className="text-bold">
                                    Computer Science
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Mastering Fundamentals to Solve Complex Problems
                                </Typography>
                                <Typography variant="body2">
                                    Deep understanding of core computing concepts, including algorithms, data structures, and system design. Skilled in leveraging foundational principles of computer science to solve abstract problems and create innovative, scalable solutions.
                                </Typography>
                            </MotionDiv>
                            <MotionDiv>
                                <Typography variant='subtitle1' className="text-bold">
                                    OPTIMIZATION & PERFORMANCE
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Maximizing Efficiency Through Proven Methodologies
                                </Typography>
                                <Typography variant="body2">
                                    Expertise in profiling, refactoring, and optimizing code to increase software performance. I am skilled in applying techniques such as caching, load balancing, query optimization, and asynchronous processing to improve application responsiveness and scalability.
                                </Typography>
                            </MotionDiv>
                            <MotionDiv>
                                <Typography variant='subtitle1' className="text-bold">
                                    DESIGN & ARCHITECTURE
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Creating Maintainable Systems with a Strong Foundation
                                </Typography>
                                <Typography variant="body2">
                                    Deep understanding of core computing concepts, including algorithms, data structures, and system design. Skilled in leveraging foundational principles of computer science to solve abstract problems and create innovative, scalable solutions.
                                </Typography>
                            </MotionDiv>
                            <MotionDiv>
                                <Typography variant='subtitle1' className="text-bold">
                                    API CREATION & INTEGRATION
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Building the Connective Tissue of Modern Applications
                                </Typography>
                                <Typography variant="body2">
                                    Deep understanding of core computing concepts, including algorithms, data structures, and system design. Skilled in leveraging foundational principles of computer science to solve abstract problems and create innovative, scalable solutions.
                                </Typography>
                            </MotionDiv>
                        </MotionDiv>
                    </MotionDiv>

                    <MotionDiv
                        className='w-1/2 flex flex-col gap-3 justify-center items-center '
                    >
                        <ButtonPro
                            onClick={() => handleDownload(docs[0].uri)}
                            label='Download Resume'
                            variant='contained'
                            size='small'
                            color='secondary'
                        />
                        <MotionDiv
                        className='h-full flex flex-col items-center'
                        >
                            <Box
                                className='w-fit h-fit p-3  flex justify-center items-center blur-wrapper'
                                sx={{ bgcolor: grey[900], borderRadius: '12.5px' }}
                            >
                                <Document file={docs[0].uri} renderMode='canvas' className={`rounded`}  >
                                    <Page className={`rounded-md`} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} renderMode='canvas' canvasBackground='white' width={800} scale={scalingFactor} />
                                </Document>
                            </Box>
                        </MotionDiv>

                    </MotionDiv>

                </MotionDiv>
                <MotionDiv className='w-full '>
                    <MotionDiv
                        className='w-full my-[10vh]'
                    >
                        <Typography variant='h5'>
                            Technologies
                        </Typography>

                        <MotionDiv className='' >
                            <ScrollableItemCtn>
                                {
                                    technologies.map((t, i) => (
                                        <MotionDiv key={`${t.label} ${i}`} className='py-6' >
                                            <MotionDiv className='min-w-[15vw] flex flex-col justify-center items-center h-full'>
                                                <MotionDiv className='w-fit'>
                                                    <MotionImg src={t.svg} width={100} />
                                                </MotionDiv>

                                                <Typography variant='caption' className={` text-center`}>
                                                    {t.label}
                                                </Typography>
                                            </MotionDiv>

                                        </MotionDiv>
                                    ))
                                }
                                <MotionDiv className='min-w-[12vw] min-h-full' />
                            </ScrollableItemCtn>
                        </MotionDiv>


                    </MotionDiv>
                    <MotionDiv className='flex gap-10'>
                        <MotionDiv
                            className='flex flex-col gap-3 w-[50%] text-left pr-[10%]'
                        >
                            <Typography variant='h5'>
                                Processes & Philosophies
                            </Typography>
                            <MotionDiv
                                className='flex flex-col gap-3'
                            >
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        SOLID Principles
                                    </Typography>
                                    <Typography variant="body2">
                                        Expertise in profiling, refactoring, and optimizing code to increase software performance. I am skilled in applying techniques such as caching, load balancing, query optimization, and asynchronous processing to improve application responsiveness and scalability.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Design Patterns
                                    </Typography>
                                    <Typography variant="body2">
                                        Utilize proven design patterns to solve recurring development challenges, fostering efficiency, consistency, and high-quality code in complex applications.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Clean Architecture
                                    </Typography>
                                    <Typography variant="body2">
                                        Implement clean architecture methodologies to build modular, testable, and scalable systems that minimize technical debt and streamline future development.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Continuous Learning
                                    </Typography>
                                    <Typography variant="body2">
                                        Embrace continuous learning to stay at the forefront of emerging technologies and best practices, bringing innovative solutions to organizational challenges.
                                    </Typography>
                                </MotionDiv>
                            </MotionDiv>

                        </MotionDiv>
                        <MotionDiv
                            className='flex flex-col gap-3 w-[50%] text-right pl-[10%]'
                        >
                            <Typography variant='h5'>
                                Soft Skills
                            </Typography>
                            <MotionDiv
                                className='flex flex-col gap-3'
                            >
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Communication
                                    </Typography>
                                    <Typography variant="body2">
                                        Facilitate clear, effective communication across teams and stakeholders to ensure alignment, mitigate misunderstandings, and drive successful project outcomes.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Active Learning
                                    </Typography>
                                    <Typography variant="body2">
                                        Adapt quickly to new tools, methodologies, and technologies, enabling continuous improvement and delivering cutting-edge solutions.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Critical Thinking
                                    </Typography>
                                    <Typography variant="body2">
                                        Analyze complex problems logically and propose actionable, well-reasoned solutions that align with organizational goals.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Observation & Analysis
                                    </Typography>
                                    <Typography variant="body2">
                                        Identify patterns, inefficiencies, and opportunities for improvement, enabling data-driven decisions that enhance performance and processes.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Organization
                                    </Typography>
                                    <Typography variant="body2">
                                        Streamline workflows and prioritize tasks effectively to ensure timely delivery of high-quality work, even in fast-paced environments.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Creativity
                                    </Typography>
                                    <Typography variant="body2">
                                        Innovate unique, effective solutions to challenges, fostering a culture of creativity and driving competitive advantage through original ideas.
                                    </Typography>
                                </MotionDiv>
                                <MotionDiv>
                                    <Typography variant='subtitle1' className="text-bold">
                                        Awareness
                                    </Typography>
                                    <Typography variant="body2">
                                        Exhibit a strong understanding of project goals, team dynamics, and organizational priorities, ensuring proactive decision-making and alignment with strategic objectives. Maintain a clear awareness of personal strengths and limitations, enabling effective collaboration, skill development, and the ability to seek support when needed to achieve optimal outcomes.
                                    </Typography>
                                </MotionDiv>
                            </MotionDiv>

                        </MotionDiv>
                    </MotionDiv>


                </MotionDiv>
            </MotionDiv>
        </MotionPageWrapper>
    )
}

export default ResumePage