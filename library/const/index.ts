import { NavItem } from "../types/common";



export const pearlBox:string = "Pearl Box";

export const firstName:string = "maliek";

export const lastName:string = "davis";

export const middleInitial:string = "j";

export const missionStatement:string = "Increasing the quality of life through the advancement of technology.";

export const bioImg:string = "/temporary/images/maliek-davis-home.jpg"

export const bio:string = `Maliek Davis is a dedicated real estate investor with a passion for revitalizing communities through strategic multifamily investments. With a focus on properties that offer significant value-add potential, Maliek is committed to creating positive change in Metro Detroit, Grand Rapids, and Lansing, Michigan. His approach to real estate is driven by a deep understanding of market dynamics, an eye for underperforming properties, and a commitment to long-term value creation.

Growing up in Rochester Hills, Michigan, Maliek has always had a strong connection to the local communities. This connection fuels his desire to not only achieve financial success but also to make a meaningful impact on the neighborhoods he invests in. By targeting multifamily properties with 20+ units, Maliek aims to provide quality, affordable housing while generating sustainable returns for his investors.

Maliek's background in software engineering and project management has equipped him with a unique skill set that he leverages in his real estate ventures. His analytical mindset, attention to detail, and ability to manage complex projects ensure that every investment is thoroughly vetted and strategically executed.

Beyond real estate, Maliek is a lifelong learner who is constantly seeking ways to improve his craft and expand his knowledge. He believes in the power of collaboration and is always looking to build strong relationships with like-minded investors, partners, and community leaders. Maliek's ultimate goal is to leave a lasting legacy by helping to build thriving, resilient communities across Michigan.`;

export const navItems:NavItem[] = [
    {
        label: 'home',
        path: '/',
    },
    {
        label: 'investments',
        path: '/investments',
        children: [
            {
                label: 'real estate',
                path: '/investments/real-estate',
                children: [ 
                    {
                        label: 'commercial real estate',
                        path: '/investments/commercial-real-estate',
                        children: [
                            {
                                label: 'criteria',
                                path: '/investments/commercial-real-estate/criteria',
                            },
                            {
                                label: 'portfolio',
                                path: '/investments/commercial-real-estate/portfolio',
                                children: [
                                    {
                                        label: 'transactions',
                                        path: '/investments/commercial-real-estate/portfolio/transactions',
                                    },
                                    {
                                        label: 'current listings',
                                        path: '/investments/commercial-real-estate/current-listings',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        label: 'residential real estate',
                        path: '/investments/residential-real-estate',
                        children: [
                            {
                                label: 'criteria',
                                path: '/investments/residential-real-estate/criteria',
                            },
                            {
                                label: 'portfolio',
                                path: '/investments/residential-real-estate/portfolio',
                                children: [
                                    {
                                        label: 'transactions',
                                        path: '/investments/residential-real-estate/portfolio/transactions',
                                    },
                                    {
                                        label: 'current listings',
                                        path: '/investments/residential-real-estate/portfolio/current-listings',
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'equity markets',
                children: [
                    {
                        label: 'day trading'
                    },
                    {
                        label: 'value trading'
                    }
                ]
            }
        ]
    },
    {
        label: 'digital solutions',
        path: '/digital-solutions',
        children: [
            {
                label: 'mission',
                path: '/digital-solutions/mission',
            },
            {
                label: 'my craft',
                path: '/digital-solutions/my-craft',
            },
            {
                label: 'my process',
                path: '/digital-solutions/my-process',
            },
            {
                label: "let's work",
                path: '/digital-solutions/lets-work',
            },
        ]
    },
    {
        label: 'blog',
        path: '/blog',
        children: [
            {
                label: 'categories',
                children: [
                    {
                        label: ""
                    }
                ]
            }
        ]
    },
    {
        label: 'about',
        path: '/about',
    },
    {
        label: 'contact',
        path: '/contact'
    },
]

// Investments Page 

export const realEstateQuote:string = "Success in real estate starts when you believe you are worthy of it.";
export const realEstatePassion:string = "Real estate is my path to wealth, community growth, and early retirement—it's the freedom to live life on my terms.";


export const blogHeroH1:string = "The Daily Davis";