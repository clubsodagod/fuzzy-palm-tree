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
                        label: 'approach',
                        path: '/investments/residential-real-estate/approach',
                    },
                    {
                        label: 'areas-of-investment',
                        path: '/investments/residential-real-estate/areas-of-investment',
                    },
                    {
                        label: 'business plan',
                        path: '/investments/residential-real-estate/business-plan',
                    },
                    {
                        label: 'current listings',
                        path: '/investments/residential-real-estate/current-listings',
                    },
                    {
                        label: 'partnership',
                        path: '/investments/residential-real-estate/partnership',
                    },
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
        label: "i'm a programmer",
        path: '/im-a-programmer',
        children: [
            {
                label: 'approach',
                path: '/im-a-programmer/approach',
            },
            {
                label: 'digital-solutions',
                path: '/im-a-programmer/my-craft',
            },
            {
                label: 'portfolio',
                path: '/im-a-programmer/portfolio',
            },
            {
                label: "media",
                path: '/im-a-programmer/media',
            },
            {
                label: "let's work",
                path: '/im-a-programmer/lets-work',
            },
        ]
    },
    {
        label: 'blog',
        path: '/blog',
        children: [
            {
                label: 'categories',
                path: '/blog/categories'
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

export interface Chapter {
    chapter: string;
}

export interface Point {
    label:string;
    point:string;
}
export const overview:Chapter[] = [
    {
        chapter:"I'm a digital innovator passionate about using computer science to make a real impact. "
    },
    {
        chapter:"I bring creativity and technical expertise together to offer a range of services that include custom software development, data science, and AI integration.",
    },
    {
        chapter:"Whether it's crafting seamless mobile payment solutions..."
    },
    {
        chapter:"developing engaging web and mobile applications..."
    },
    {
        chapter:"or providing strategic digital transformation consulting..."
    },
    {
        chapter:"My mission is clear!"
    },
    {
        chapter:"To enhance the quality of life through the advancement of technology!"
    },
    {
        chapter:"I believe in creating dynamic and robust applications and systems that are not only powerful but also intuitive and simple to use."
    },
    {
        chapter:"My approach is driven by a commitment to building technology that serves people, empowering them to reach their full potential in a digital world."
    },
    {
        chapter:"By leveraging the latest innovations and a deep understanding of user needs, I deliver solutions that make a difference."
    },

]

export const importantFactors:Point[] = [
    {
        label: "Efficiency and Productivity",
        point: "Digital solutions streamline operations, automate repetitive tasks, and free up valuable time, boosting overall productivity.",
    },
    {
        label: "Data-Driven Decision Making",
        point: "By integrating data science and analytics, digital solutions provide insights that guide strategic decisions, helping businesses stay competitive.",
    },
    {
        label: "Enhanced Customer Experience",
        point: "Tailored web and mobile applications offer a seamless and user-friendly experience, increasing customer satisfaction and loyalty.",
    },
    {
        label: "Cost Reduction:",
        point: "Automation and optimized processes lead to significant cost savings, making businesses more profitable and sustainable.",
    },
    {
        label: "Scalability",
        point: "Digital solutions grow with your business, providing the flexibility to adapt to increasing demands without major disruptions.",
    },
    {
        label: "Security and Compliance",
        point: "Robust digital solutions include advanced security features to protect sensitive data and ensure compliance with industry regulations.",
    },
    {
        label: "Innovation and Competitive Advantage",
        point: "Embracing digital solutions positions businesses at the forefront of innovation, setting them apart from competitors.",
    },
]

export const agileDevelopment:Point[] = [
    {
        label: "Iterative Progress",
        point:"Breaking down projects into small, manageable units to deliver features incrementally, allowing for continuous improvement.",
    },
    {
        label: "Customer Collaboration",
        point:"Regular interaction with clients to ensure that the product aligns with their needs and expectations.",
    },
    {
        label: "Adaptability",
        point:"Responding to change over following a fixed plan, enabling teams to adapt to shifting requirements or market conditions.",
    },
    {
        label: "Cross-Functional Teams",
        point:"Encouraging collaboration across diverse skills and expertise to foster innovation and reduce bottlenecks.",
    },
    {
        label: "Continuous Feedback",
        point:"Regularly seeking feedback from stakeholders and users to refine and enhance the product in real time.",
    },
    {
        label: "Transparency",
        point:"Keeping all team members and stakeholders informed about progress, challenges, and changes to ensure alignment.",
    },
    {
        label: "Sustainable Development",
        point:"Promoting a pace of work that can be maintained long-term without burnout, ensuring consistent productivity and quality.",
    },
]
export const designThinking:Point[] = [
    {
        label: "Empathy",
        point:"Understanding the end-user's needs, challenges, and desires to design solutions that truly address their problems.",
    },
    {
        label: "Ideation",
        point:"Encouraging brainstorming sessions to generate a wide range of creative ideas and innovative solutions.",
    },
    {
        label: "Prototyping",
        point:"Developing simple, testable versions of a product or feature to explore ideas and gather user feedback quickly.",
    },
    {
        label: "User-Centric Approach",
        point:"Keeping the user at the center of the design process, ensuring that solutions are intuitive and meet real needs.",
    },
    {
        label: "Problem Framing",
        point:"Clearly defining the problem to be solved to guide the design process and focus on what matters most.",
    },
    {
        label: "Testing and Iteration",
        point:"Continuously testing prototypes with users and iterating based on their feedback to refine and improve the solution.",
    },
    {
        label: "Collaboration",
        point:"Leveraging diverse perspectives and expertise through collaborative teamwork to drive creativity and innovation.",
    },
]
export const workflow:Point[] = [
    {
        label: "Clear Objectives",
        point:"Defining specific, measurable goals for each phase of the project to maintain focus and direction.",
    },
    {
        label: "Structured Planning",
        point:"Outlining detailed plans and timelines to organize tasks, allocate resources, and manage dependencies effectively.",
    },
    {
        label: "Task Prioritization",
        point:"Identifying and prioritizing tasks based on their impact and urgency to optimize time and resources.",
    },
    {
        label: "Automation",
        point:"Utilizing tools and technologies to automate repetitive tasks, increase efficiency, and reduce human error.",
    },
    {
        label: "Communication",
        point:"Establishing strong communication channels to ensure that all team members are aligned and informed throughout the process.",
    },
    {
        label: "Monitoring and Evaluation",
        point:"Regularly tracking progress and evaluating performance to identify areas for improvement and adjust the workflow as needed.",
    },
    {
        label: "Continuous Improvement",
        point:"Committing to ongoing process evaluation and optimization to enhance efficiency and effectiveness over time.",
    },
]