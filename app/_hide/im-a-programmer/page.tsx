'use client'
import React, { useEffect, useState } from 'react'
import { AppContainer, ScrollableItemCtn } from '../_components'
import { WhyDigitalSolutions, Overview, OverviewDynamic, WhyDigitalSolutionsDynamic } from './_components';
import { Chapter, importantFactors, overview, Point } from '@/library/const';
import { useScroll, useMotionValueEvent, useAnimationControls, MotionValue } from 'framer-motion';
import { RefIDObject, useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { programmerGradientVariants as gradientVariants } from '@/library/const/animation-gradients';
import MainProgrammerScene from './_components/scenes/MainProgrammerScene';
import { useScroll as scroll } from '../_context/sub-context/ScrollContext';
import { numberToWord } from '@/utility/functions';
import { useScreenContext } from '../_context/sub-context/ScreenContext';

const ImAProgrammerPage = () => {

	const {
		isMobile,
	} = useScreenContext();

	const { windowScrollHeight, setWindowScrollHeight, setWindowHeight, windowHeight } = scroll();

	const {
		scrollRef, bodyRef, mainRef, overviewRef, overviewDynamicRefs, whyDigitalDynamicRefs, refs, areasRef, whyDigitalRef
	} = useProgrammerPageSectionRefs();

	const ctnRef = React.useRef<HTMLDivElement>(null);


	const { scrollYProgress, scrollY, } = useScroll({ target: bodyRef, offset: ['start end', 'end start'] })


	const [currentSection, setCurrentSection] = useState<string>('');

	const controls = useAnimationControls();


	const [currentIndex, setCurrentIndex] = useState(0);

	const scrollToSection = (index: number, refs: RefIDObject[]) => {
		if (refs[index] && refs[index].ref.current) {
			refs[index].ref.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	const [scrollPosition, setScrollPosition] = useState(0);

	const scrollThreshold = 150; 

	useEffect(() => {

		let accumulatedDeltaY = 0; 

		const handleScroll = (event: WheelEvent) => {

			accumulatedDeltaY += event.deltaY;
			console.log(accumulatedDeltaY);
			
			// Only scroll when deltaY exceeds the threshold
			if (Math.abs(accumulatedDeltaY) > scrollThreshold) {
				if (accumulatedDeltaY > 0) {
					// Scrolling down
					setCurrentIndex((prevIndex) =>
						Math.min(prevIndex + 1, refs.length - 1)
					);
				} else {
					// Scrolling up
					setCurrentIndex((prevIndex) =>
						Math.max(prevIndex - 1, 0)
					);
				}
				accumulatedDeltaY = 0; // Reset after scrolling
			}
		};

		window.addEventListener('wheel', handleScroll);
		scrollToSection(currentIndex, refs); // Scroll when the index changes

		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
		
	}, [currentIndex, refs]);


	useEffect(() => {
		const observerOptions = {
			root: null, // Use the viewport as the root
			rootMargin: '0px',
			threshold: 0.65, // Trigger when 50% of the element is in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {

				if (entry.isIntersecting) {

					const id = entry.target.id;
					console.log(id);
					setCurrentSection(id); // Update currentSection to the current ref's id
					controls.start(id); // Trigger the animation for the current section
				}


			});
		}, observerOptions);

		refs.forEach(({ ref }) => {
			if (ref.current) {
				observer.observe(ref.current);

			}
		});

		{
			refs.forEach((ref) => {
				if (ref) {
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

	useEffect(() => {
		if (windowScrollHeight === 0) {
			setWindowScrollHeight(scrollRef?.current?.scrollHeight! - window.innerHeight);
		}
		if (windowHeight === 0) {
			setWindowHeight(window?.innerHeight);
			console.log(window.innerHeight);

		}
		{ windowScrollHeight && windowScrollHeight }
		{ windowHeight && windowHeight }
	}, [windowScrollHeight, setWindowScrollHeight, scrollRef, windowHeight, setWindowHeight]);

	return (
		<AppContainer
			ctnRef={scrollRef}
			bodyRef={bodyRef}
			gradientVariants={gradientVariants}
			controls={controls}
		>


			{/* <Overview ctnRef={overviewRef} />
			{
				overview.map((c: Chapter, i: number) => {
					const currentRef = overviewDynamicRefs[i];
					if (i % 2 === 0) {
						return <OverviewDynamic ctnRef={currentRef} chapter={c} key={`chapter: ${i + 1}`} id={`programmer-overview-dynamic-${numberToWord(i)}`} index={i} />
					} else {
						return <OverviewDynamic ctnRef={currentRef} chapter={c} key={`chapter: ${i + 1}`} id={`programmer-overview-dynamic-${numberToWord(i)}`} index={i} />
					}

				})
			}
			<WhyDigitalSolutions ctnRef={whyDigitalRef} />
			{
				importantFactors.map((f: Point, i: number) => {
					const currentRefWhyDigital = whyDigitalDynamicRefs[i];
					if (i % 2 === 0) {
						return <WhyDigitalSolutionsDynamic ctnRef={currentRefWhyDigital} id={`programmer-why-digital-dynamic-${numberToWord(i)}`} index={i} factor={f} key={`factoralt: ${i}`} />
					} else {
						return <WhyDigitalSolutionsDynamic ctnRef={currentRefWhyDigital} id={`programmer-why-digital-dynamic-${numberToWord(i)}`} index={i} factor={f} key={`factor: ${i}`} />
					}

				})
			} */}
			{/* <RealWorldImpact />
            <HomeVisuals /> */}
			<div className='three-scene'>
				<MainProgrammerScene scrollY={scrollY} />
			</div>
		</AppContainer>
	)
}

export default ImAProgrammerPage