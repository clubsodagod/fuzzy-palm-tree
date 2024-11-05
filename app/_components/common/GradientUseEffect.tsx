import { RefIDObject } from '@/utility/refs/programmer-page-refs';
import { AnimationControls } from 'framer-motion';
import React, { useEffect } from 'react'


export interface UseEffectProps {
    controls:AnimationControls;
    refs:RefIDObject[];
}

const GradientUseEffect = ({controls,refs}:UseEffectProps) => {

    useEffect(() => {

        const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.51, // Trigger when 50% of the element is in view
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                controls.start(id); // Trigger the animation for the current section
                // snapToTop(entry.target);
            console.log(entry.target.id);
            }
            

        });
        }, observerOptions);

        refs.forEach(({ ref }) => {
        if (ref.current) {
            observer.observe(ref.current);
            
        }
        });

        {
            refs.forEach((ref)=> {
                if(ref){
                    console.log(ref.ref.current)
                }
            })
        }

        return () => {
        refs.forEach(({ ref }) => {
            if (ref.current) {
            observer.unobserve(ref.current);
            }
        });
        };
    }, [controls, refs]);
}

export default GradientUseEffect