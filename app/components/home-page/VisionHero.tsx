import { firstName, lastName } from '@/library/const'
import React from 'react'

const VisionHero = () => {
    return (
        <section id='page-wrapper'>
            
            <h1>
                {firstName} {lastName}
            </h1>

            <h3>
                The Investor
            </h3>
            <p>
                From real estate to the financial markets, I&apos;m getting to the science of wealth building!
            </p>

            <div>
                <button>
                    Learn more
                </button>
                <button>
                    Investment Opportunities
                </button>                
            </div>

        </section>
    )
}

export default VisionHero