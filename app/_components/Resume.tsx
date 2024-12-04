import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useEffect } from 'react'
import ButtonPro from './common/ButtonPro'
import { MotionDiv } from './common/framer/MotionDiv'
import { Document, Page, } from 'react-pdf';
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



const Resume = () => {

    const [scalingFactor, setScalingFactor] = React.useState<number>(1);
    
    const handleDownload = (uri: string) => {
        const link = document.createElement('a');
        link.href = uri;
        link.download = 'maliek_davis_resume'; // File name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const docs = [
        { uri: "/documents/Software_Engineer_Maliek_Davis_nextjs_reactjs_typescript_api_ai.pdf" }, // Local File
    ];

    useEffect(() => {
        // Scaling value for responsive experience
        const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.1 : 0.1), 3) : 1;

        if (mainScalingFactor !== scalingFactor) {
            setScalingFactor(mainScalingFactor)
        }
    }, [scalingFactor])

    return (
        <MotionDiv
            className='md:w-1/2 flex flex-col gap-3 justify-center items-center  '
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
                    <Document file={docs[0].uri} renderMode='canvas'   >
                        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} renderMode='canvas' canvasBackground='white' width={800} scale={scalingFactor} />
                    </Document>
                </Box>
            </MotionDiv>

        </MotionDiv>
    )
}

export default Resume