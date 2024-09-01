'use client'


import { AppContainer } from '@/app/components';
import React, { useRef } from 'react'
import { AgileDevelopment, AgileDevelopmentDynamic, ApproachHero, DesignThinking, DesignThinkingDynamic, ProcessWorkflow, TechnologyStack, WorkflowDynamic } from '../_components/approach';
import { agileDevelopment, designThinking, Point, workflow } from '@/library/const';

const ApproachPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            <ApproachHero />
            <AgileDevelopment />
            {
                agileDevelopment.map((f:Point,i:number)=> { 

                    if (i%2 === 0) {
                        return (
                            <AgileDevelopmentDynamic key={`importFactor: ${i}`} left='' factor={f}/>
                        )                        
                    } else {
                        return (
                            <AgileDevelopmentDynamic key={`importFactor: ${i}`} left='left' factor={f}/>
                        )
                    }

                })
            }
            <DesignThinking />
            {
                designThinking.map((f:Point,i:number)=> { 

                    if (i%2 === 0) {
                        return (
                            <DesignThinkingDynamic key={`importFactor: ${i}`} left='' factor={f}/>
                        )                        
                    } else {
                        return (
                            <DesignThinkingDynamic key={`importFactor: ${i}`} left='left' factor={f}/>
                        )
                    }

                })
            }
            <TechnologyStack />
            <ProcessWorkflow />
            {
                workflow.map((f:Point,i:number)=> { 

                    if (i%2 === 0) {
                        return (
                            <WorkflowDynamic key={`importFactor: ${i}`} left='' factor={f}/>
                        )                        
                    } else {
                        return (
                            <WorkflowDynamic key={`importFactor: ${i}`} left='left' factor={f}/>
                        )
                    }

                })
            }
        </AppContainer>
    )
}

export default ApproachPage