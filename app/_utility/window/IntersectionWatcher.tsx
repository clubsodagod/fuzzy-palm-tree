'use client'

import { useAppContext } from "@/app/_context/AppContext";
import { RefIDObject } from "@/app/_library/types/refs";
import { useEffect } from "react";

export interface IntersectionWatcherProps {
    refs: RefIDObject[];
}


function snapToTop(element: Element) {
    element.scrollIntoView({ behavior: "smooth", block: 'start' });
};

export default function IntersectionWatcher(props: IntersectionWatcherProps) {

    const {
        appContainer: {
            controls, setCurrentSection
        }
    } = useAppContext()

    const {
        refs
    } = props;
    console.log(refs);
    
    return (

        useEffect(() => {

            const observerOptions = {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.25, // Trigger when 50% of the element is in view
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        console.log(id);
                        
                        setCurrentSection(id); // Update currentSection to the current ref's id
                        controls.start(id); // Trigger the animation for the current section
                        // snapToTop(entry.target);
                    }


                });
            }, observerOptions);

            refs.forEach(({ ref }) => {
                if (ref.current) {
                    observer.observe(ref.current);
                }
            });


            return () => {
                refs.forEach(({ ref }) => {
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                });
            };

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [controls, refs,])

    )
}
