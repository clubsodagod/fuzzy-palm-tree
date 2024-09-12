'use client'
import { AppContainer } from '@/app/components';
import React, { useEffect, useRef, useState } from 'react'
import { ConsultationOffers, ContactInformation, LocationSocialLinks } from '../_components/lets-work';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { programmerGradientVariants  } from '@/library/const/animation-gradients';

const LetsWorkPage = () => {

    const {
        scrollRef, bodyRef, ctaRefs:refs, 
        ctaConsultationRef, contactInfoRef, locationInfoRef,
    } = useProgrammerPageSectionRefs();

    const [scrollYPro, setScrollYPro] = React.useState<number>(0)
    const { scrollYProgress, scrollY,  } = useScroll({target:bodyRef, offset: ['start end', 'end start']})

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ))
        setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
    });

    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior:"smooth", block: 'start' });
    };

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
                setCurrentSection(id); // Update currentSection to the current ref's id
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


    return (
        <AppContainer
        ctnRef={scrollRef}
        bodyRef={bodyRef}
        gradientVariants={programmerGradientVariants}
        controls={controls}
        >
            <ConsultationOffers ctnRef={ctaConsultationRef} />
            <ContactInformation ctnRef={contactInfoRef} />
            <LocationSocialLinks ctnRef={locationInfoRef} />
        </AppContainer>
    )
}

export default LetsWorkPage