import { NavItem } from "../types/common";
import { Principles } from "../types/investment";



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





// investments

export const riskManagementPrinciples: Principles = [
    {
        key: "Risk Assessment",
        value: "We conduct comprehensive risk assessments for every investment, analyzing potential downside scenarios and implementing strategies to mitigate those risks. Our conservative underwriting ensures that investments are capable of weathering market fluctuations."
    },
    {
        key: "Diversification",
        value: "Our portfolio is diversified across various asset classes, property types, and geographic locations. This diversification helps to spread risk and provides a balanced approach to potential market downturns."
    },
    {
        key: "Active Management",
        value: "We believe in a hands-on approach to managing our properties. By staying actively involved in the operations and maintenance of our assets, we can quickly address issues, optimize performance, and enhance value."
    }
];

export const marketApproachPrinciples: Principles = [
    {
        key: "Dynamic Strategies",
        value: "Our investment approach is dynamic and adaptable, allowing us to pivot based on market conditions and emerging trends. We continuously monitor market indicators and economic factors to make informed, data-driven decisions."
    },
    {
        key: "Data Driven Decision Making",
        value: "We leverage advanced analytics and market research to identify undervalued properties and emerging markets. Our use of data allows us to stay ahead of market trends and spot opportunities before they become widely recognized."
    },
    {
        key: "Geographic Targeting",
        value: "Our investment strategy is geographically targeted, focusing on high-growth areas with strong rental demand and potential for property appreciation. By concentrating on specific markets, we can apply our deep understanding and expertise to maximize returns."
    }
];

export const longTermVisionPrinciples: Principles = [
    {
        key: "Lasting Relationships",
        value: "We aim to build long-term relationships with our investors, partners, and communities. Our commitment to transparency, integrity, and mutual success underpins every partnership we form."
    },
    {
        key: "Sustainable Growth",
        value: "Our vision is to achieve sustainable growth by investing in properties that not only provide strong financial returns but also contribute positively to the communities they are in. We strive to create lasting impact and value through every investment."
    },
    {
        key: "Innovation",
        value: "As the market evolves, so do we. We are constantly seeking innovative ways to improve our strategies, leverage new technologies, and adapt to the changing landscape of real estate investing."
    }
];



export const coreInvestmentPrinciples: Principles = [
    { key: "Capital Preservation", value: "Capital preservation is our priority." },
    { key: "Value Creation", value: "Value creation through strategic investments." },
    { key: "Sustainable Growth", value: "Focus on sustainable growth." },
    { key: "Market Adaptation", value: "Adapting to market changes dynamically." },
    { key: "Risk Mitigation", value: "Mitigating risk with a diversified portfolio." },
];

