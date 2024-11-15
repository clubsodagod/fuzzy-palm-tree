'use client'
import { useAppContext } from '@/app/_context/AppContext';
import  { RefObject, useEffect } from 'react'

const WindowUpdater = (scrollRef:RefObject<HTMLDivElement>) => {

    const {scroll:{windowHeight, windowScrollHeight, setWindowScrollHeight, setWindowHeight}} = useAppContext()
    return (
        useEffect(() => {
          if (windowScrollHeight === 0 && scrollRef.current && window) {
            setWindowScrollHeight(scrollRef.current.scrollHeight - window.innerHeight);
          }
          if (window && windowHeight === 0) {
            setWindowHeight(window.innerHeight);
          }
        }, [windowScrollHeight, setWindowScrollHeight, scrollRef, windowHeight, setWindowHeight])
    )
}

export default WindowUpdater