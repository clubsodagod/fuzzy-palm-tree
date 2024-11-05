
import { NavItem, PhotoV2, VideoV2 } from "../types/common";
import { Principles } from "../types/investment";
require('dotenv').config();
import getConfig from "next/config";



export const apiPath = process.env.NEXT_PUBLIC_NODE_ENVIROMENT === 'development'
    ? process.env.NEXT_PUBLIC_API_DEVELOPMENT
    : process.env.NEXT_PUBLIC_API_PRODUCTIONS;

export const clientDomain = process.env.NEXT_PUBLIC_NODE_ENVIROMENT === 'development'
    ? process.env.NEXT_PUBLIC_DOMAIN_DEVELOPMENT
    : process.env.NEXT_PUBLIC_DOMAIN_PRODUCTIONS;

export const fromEmail:string = process.env.NEXT_PUBLIC_FROM_EMAIL as string;

export const pearlBox:string = "Pearl Box";

export const firstName:string = "maliek";

export const lastName:string = "davis";

export const middleInitial:string = "j";

export const missionStatement:string = "Increasing the quality of life through the advancement of technology.";

export const bioImg:string = "/images/suited.png"

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
        label: "i'm a programmer",
        path: '/im-a-programmer',
        children: [
            {
                label: 'approach',
                path: '/im-a-programmer/approach',
            },
            {
                label: 'digital-solutions',
                path: '/im-a-programmer/digital-solutions',
            },
            {
                label: 'portfolio',
                path: '/im-a-programmer/portfolio',
            },
            // {
            //     label: "media",
            //     path: '/im-a-programmer/media',
            // },
            {
                label: "let's work",
                path: '/im-a-programmer/lets-work',
            },
        ]
    },
    // {
    //     label: 'investments',
    //     path: '/investments',
    //     children: [
    //         {
    //             label: 'real estate',
    //             path: '/investments/real-estate',
    //             children: [ 
    //                 {
    //                     label: 'approach',
    //                     path: '/investments/residential-real-estate/approach',
    //                 },
    //                 {
    //                     label: 'areas of investment',
    //                     path: '/investments/residential-real-estate/areas-of-investment',
    //                 },
    //                 {
    //                     label: 'business plan',
    //                     path: '/investments/residential-real-estate/business-plan',
    //                 },
    //                 {
    //                     label: 'current listings',
    //                     path: '/investments/residential-real-estate/current-listings',
    //                 },
    //                 {
    //                     label: 'partnership',
    //                     path: '/investments/residential-real-estate/partnership',
    //                 },
    //             ]
    //         },
    //         // {
    //         //     label: 'equity markets',
    //         //     children: [
    //         //         {
    //         //             label: 'day trading'
    //         //         },
    //         //         {
    //         //             label: 'value trading'
    //         //         }
    //         //     ]
    //         // },
    //     ]
    // },
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

export interface ExtendedPointUseCase extends Point {
    useCase: string;
    photo:string;
}

export const customSoftware:ExtendedPointUseCase[] = [
    {
        label:'Streamlining Operations',
        point: 'Custom software can integrate various business processes into a single system, reducing manual work and errors.',
        useCase: 'A manufacturing company implements a custom ERP (Enterprise Resource Planning) solution to integrate inventory management, production schedules, and accounting. This reduces production downtime, improves resource allocation, and lowers costs by automating workflows.',
        photo:"https://images.pexels.com/photos/4483862/pexels-photo-4483862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:'Improving Customer Experience',
        point: 'Tailored software can provide a personalized experience to customers, enhancing satisfaction and loyalty.',
        useCase: 'An e-commerce platform uses custom software to offer personalized product recommendations based on browsing history and purchase behavior. This increases customer engagement, boosts sales, and improves retention rates.',
        photo:"https://images.pexels.com/photos/7564241/pexels-photo-7564241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:'Facilitating Compliance and Reporting',
        point: "Custom solutions can automate compliance processes, ensuring that businesses meet regulatory requirements without extensive manual oversight.",
        useCase: "A financial services firm adopts a custom compliance tracking tool that automates reporting, tracks regulatory changes, and ensures all client transactions meet the latest legal standards. This minimizes the risk of non-compliance and associated penalties.",
        photo:"https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];


export const dataScienceAI:ExtendedPointUseCase[] = [
    {
        label:"Predictive Maintenance",
        point: "AI-driven predictive analytics can forecast equipment failures before they happen, reducing downtime and maintenance costs.",
        useCase: " A logistics company uses data science and AI to analyze sensor data from its fleet, predicting which vehicles are likely to require maintenance soon. This proactive approach prevents breakdowns, reduces repair costs, and keeps the fleet operational.",
        photo:"https://images.pexels.com/photos/5550510/pexels-photo-5550510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:"Enhanced Customer Insights",
        point: "Data science can analyze customer data to uncover insights about behavior and preferences, enabling targeted marketing strategies.",
        useCase: "A retail chain uses data science to analyze customer purchase patterns and predict future buying behavior. This allows for personalized marketing campaigns, optimized inventory management, and improved customer satisfaction, leading to increased sales.",
        photo:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:"Fraud Detection and Prevention",
        point: "AI algorithms can identify unusual patterns in data that may indicate fraudulent activity, protecting businesses from financial losses.",
        useCase: "A bank implements a real-time fraud detection system using AI to analyze transaction data and identify potential fraudulent activities. This system quickly flags suspicious transactions, preventing unauthorized access and protecting customer accounts.",
        photo:"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];


export const webMobileApp:ExtendedPointUseCase[] = [
    {
        label:"Expanding Market Reach",
        point: "Mobile applications enable businesses to reach customers anytime, anywhere, increasing accessibility and market reach.",
        useCase: "A restaurant chain develops a mobile app for online ordering and delivery tracking. Customers can easily place orders from their phones, increasing the restaurant’s customer base and boosting sales, especially during off-peak hours.",
        photo:"https://png.pngtree.com/background/20230626/original/pngtree-high-speed-internet-connection-3d-rendered-earth-rotating-with-global-network-picture-image_4056551.jpg",
    },
    {
        label:"Enhancing Customer Engagement",
        point: "Interactive and user-friendly web applications can engage users effectively, fostering loyalty and long-term relationships.",
        useCase: "A fitness brand launches a web app that offers personalized workout plans, tracks progress, and integrates with wearable devices. This keeps users engaged, provides added value, and helps the brand build a strong community of loyal customers.",
        photo:"https://images.pexels.com/photos/7351150/pexels-photo-7351150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:"Improving Business Efficiency",
        point: "Web and mobile apps can automate tasks, streamline processes, and improve internal communication.",
        useCase: "A real estate company uses a mobile app to manage property listings, track leads, and communicate with clients. This centralizes operations, reduces paperwork, and ensures that agents have all necessary information at their fingertips, enhancing productivity.",
        photo:"https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

export const digitalTransformation:ExtendedPointUseCase[] = [
    {
        label:"Adapting to Market Changes",
        point: "Digital transformation allows businesses to quickly adapt to changing market conditions, staying competitive.",
        useCase: "A traditional retail store transitions to a digital model by launching an online store and using digital marketing strategies. This adaptation allows the store to reach customers during lockdowns, keeping sales steady despite physical store closures.",
        photo:"https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:"Enhancing Collaboration and Remote Work",
        point: "Digital tools enable effective remote work, improving collaboration and flexibility.",
        useCase: "A consulting firm adopts cloud-based collaboration tools and project management software, enabling seamless remote work for its employees. This ensures that projects continue smoothly regardless of location, improving employee satisfaction and productivity.",
        photo:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        label:"Driving Innovation",
        point: "Digital transformation fosters a culture of innovation, helping businesses to develop new products and services.",
        useCase: "A healthcare provider leverages digital transformation to implement telehealth services, allowing patients to consult with doctors via video calls. This innovation improves patient access to healthcare, reduces wait times, and expands the provider's reach to rural areas.",
        photo:"https://images.pexels.com/photos/8533144/pexels-photo-8533144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];


// Define the DynamicComponentData interface
export interface DynamicComponentData extends Point {
    photo: PhotoV2;
    video: VideoV2;
    useCases?: string[];
    codeExample?: string;
    benefits?: string[];
    commonViolations?: string[];
    relatedPatterns?: string[];
    practicalTips?: string[];
}

export const solidPrinciples: DynamicComponentData[] = [
    {
        label: "Single Responsibility Principle (SRP)",
        point: "A class should have only one reason to change, meaning it should have only one job or responsibility.",
        photo: 'https://images.pexels.com/photos/208034/pexels-photo-208034.jpeg',
        video: 'https://videos.pexels.com/video-files/13141577/13141577-hd_1920_1080_60fps.mp4',
        useCases: ["Logging functionality separate from business logic", "Splitting UI components by purpose"],
        codeExample: `class Invoice { void calculateTotal(); void printInvoice(); }`,
        benefits: ["Improved readability", "Easier debugging and testing"],
        commonViolations: ["Combining logging and file-saving responsibilities in one class"],
        relatedPatterns: ["Facade", "Observer"],
        practicalTips: ["Keep methods under 10 lines to ensure single responsibility", "Use helper classes for specific tasks"],
    },
    {
        label: "Open/Closed Principle (OCP)",
        point: "A class should be open for extension but closed for modification, meaning you can extend its behavior without modifying its existing code.",
        photo: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg',
        video: 'https://videos.pexels.com/video-files/5404704/5404704-sd_640_360_25fps.mp4',
        useCases: ["Adding new payment methods in e-commerce without altering core code", "Plug-in architectures"],
        codeExample: `interface Shape { double area(); } class Circle implements Shape { ... }`,
        benefits: ["Promotes flexibility", "Reduces regression risk"],
        commonViolations: ["Hardcoding multiple behaviors in a single class"],
        relatedPatterns: ["Strategy", "Decorator"],
        practicalTips: ["Use interfaces to define open-ended functionality", "Leverage inheritance cautiously to avoid complexity"],
    },
    {
        label: "Liskov Substitution Principle (LSP)",
        point: "Objects of a superclass should be replaceable with objects of a subclass without altering the correctness of the program.",
        photo: 'https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg',
        video: 'https://videos.pexels.com/video-files/5637833/5637833-uhd_2560_1440_25fps.mp4',
        useCases: ["Swappable database backends", "Pluggable payment gateways"],
        codeExample: `class Rectangle { ... } class Square extends Rectangle { ... }`,
        benefits: ["Greater flexibility", "Interchangeable components"],
        commonViolations: ["Inheriting behaviors that violate expected outputs"],
        relatedPatterns: ["Adapter", "Template Method"],
        practicalTips: ["Avoid using 'is-a' relationships unless they’re truly interchangeable", "Test subclass substitutability"],
    },
    {
        label: "Interface Segregation Principle (ISP)",
        point: "Clients should not be forced to depend on interfaces they do not use. Instead, break down large interfaces into smaller, more specific ones.",
        photo: 'https://images.pexels.com/photos/3402846/pexels-photo-3402846.jpeg',
        video: 'https://videos.pexels.com/video-files/3787422/3787422-hd_1920_1080_30fps.mp4',
        useCases: ["Separate interfaces for printers and scanners in multifunction devices", "UI components with specific action interfaces"],
        codeExample: `interface Printable { void print(); } interface Scannable { void scan(); }`,
        benefits: ["Reduces coupling", "Enhances clarity and reusability"],
        commonViolations: ["Bloated interfaces forcing unnecessary implementation"],
        relatedPatterns: ["Proxy", "Builder"],
        practicalTips: ["Split interfaces with three or more methods into smaller parts", "Use dependency injection to simplify interface changes"],
    },
    {
        label: "Dependency Inversion Principle (DIP)",
        point: "High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces).",
        photo: 'https://images.pexels.com/photos/4195406/pexels-photo-4195406.jpeg',
        video: 'https://videos.pexels.com/video-files/4124975/4124975-hd_1280_720_25fps.mp4',
        useCases: ["Service-based architecture", "Implementing a payment processor interface for different vendors"],
        codeExample: `interface Logger { void log(String message); } class DatabaseLogger implements Logger { ... }`,
        benefits: ["Decouples code", "Increases adaptability"],
        commonViolations: ["Directly depending on specific implementations"],
        relatedPatterns: ["Factory Method", "Dependency Injection"],
        practicalTips: ["Abstract common behaviors and inject dependencies", "Avoid tightly coupled class hierarchies"],
    },
];


export interface DesignPattern {
    label: string;
    overview: string;
    photo: string; // URL or filename for an image representing the pattern
    video: string; // URL or filename for a video representing the pattern
    useCases: string[]; // Example scenarios where the pattern is applicable
    commonPitfalls: string[]; // Common mistakes or misuses of the pattern
}

export interface DesignPatternsByType {
    creation: DesignPattern[];
    behavioral: DesignPattern[];
    structural: DesignPattern[];
}

export const designPatterns: DesignPatternsByType = {
    creation: [
        {
            label: "Singleton",
            overview: "Ensures a class has only one instance and provides a global point of access to it.",
            photo: "https://images.pexels.com/photos/6273073/pexels-photo-6273073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/singleton.mp4",
            useCases: [
                "Managing global application state",
                "Database connections",
                "Logging system",
                "Configuration settings",
                "Caching mechanisms",
            ],
            commonPitfalls: [
                "Overuse can lead to tight coupling",
                "Difficulties with unit testing",
                "Potential for unexpected state changes",
                "Limited flexibility for concurrent systems",
            ],
        },
        {
            label: "Factory",
            overview: "Provides an interface for creating objects in a superclass but allows subclasses to alter the type of created objects.",
            photo: "https://images.pexels.com/photos/19233057/pexels-photo-19233057/free-photo-of-assembling-machines-in-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/factory.mp4",
            useCases: [
                "When classes need to create different types of related objects",
                "Implementing plugin systems",
                "Object pooling",
                "Creating instances based on user input",
                "Encapsulating object creation logic",
            ],
            commonPitfalls: [
                "Overcomplicating simple object creation",
                "Redundant factories for similar types",
                "Unintentionally violating the Open-Closed Principle",
            ],
        },
        {
            label: "Abstract Factory",
            overview: "A super-factory that creates other factories, allowing the creation of families of related objects.",
            photo: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/abstract-factory.mp4",
            useCases: [
                "Building UI toolkits",
                "Creating environments for cross-platform applications",
                "Managing related products in software libraries",
            ],
            commonPitfalls: [
                "High complexity when not necessary",
                "May introduce unused dependencies",
                "Increased difficulty in debugging",
            ],
        },
        {
            label: "Builder",
            overview: "Separates the construction of a complex object from its representation, allowing different representations to be created.",
            photo: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/builder.mp4",
            useCases: [
                "Constructing complex objects like user profiles",
                "Creating variations of a product",
                "Building objects with many parameters",
            ],
            commonPitfalls: [
                "Too many options can lead to confusion",
                "Not suitable for simple objects",
                "Complexity without significant flexibility gain",
            ],
        },
        {
            label: "Prototype",
            overview: "Creates new objects by copying an existing object, known as the prototype.",
            photo: "https://images.pexels.com/photos/20552667/pexels-photo-20552667/free-photo-of-close-up-of-a-3d-printer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/prototype.mp4",
            useCases: [
                "Performance optimization by cloning",
                "Creating objects with similar states",
                "Reducing setup time for objects",
            ],
            commonPitfalls: [
                "Shallow copies can cause issues",
                "Deep cloning may impact performance",
                "Limited application scope",
            ],
        }
    ],
    behavioral: [
        {
            label: "Observer",
            overview: "Defines a dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
            photo: "https://images.pexels.com/photos/1543417/pexels-photo-1543417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/observer.mp4",
            useCases: [
                "Event handling systems",
                "Real-time applications",
                "UI updates based on model changes",
                "Notifications",
                "Log changes across multiple systems",
            ],
            commonPitfalls: [
                "Overhead with many observers",
                "Memory leaks due to unsubscribed observers",
                "Difficulty managing dependencies",
            ],
        },
        {
            label: "Strategy",
            overview: "Enables selecting an algorithm at runtime by defining a family of algorithms and making them interchangeable.",
            photo: "https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/strategy.mp4",
            useCases: [
                "Payment processing systems with multiple payment methods",
                "Sorting algorithms",
                "Route optimization",
                "Choosing different validation methods",
            ],
            commonPitfalls: [
                "Increased complexity with many strategies",
                "Potential for unnecessary strategy objects",
                "Incompatibility issues between strategies",
            ],
        },
        {
            label: "Command",
            overview: "Encapsulates a request as an object, allowing parameterization of clients with queues, requests, and operations.",
            photo: "https://images.pexels.com/photos/1371985/pexels-photo-1371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/command.mp4",
            useCases: [
                "Undo/Redo functionality",
                "Transactional systems",
                "Macro commands for batch operations",
            ],
            commonPitfalls: [
                "Complexity increases with nested commands",
                "High memory usage in large command histories",
            ],
        },
        {
            label: "State",
            overview: "Allows an object to alter its behavior when its internal state changes, appearing as if it has changed its class.",
            photo: "https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/state.mp4",
            useCases: [
                "Implementing state machines",
                "Game development for character states",
                "Workflow management systems",
            ],
            commonPitfalls: [
                "Tight coupling between state classes",
                "Difficulty tracking state transitions",
            ],
        },
        {
            label: "Template Method",
            overview: "Defines the skeleton of an algorithm, deferring steps to subclasses without changing the algorithm’s structure.",
            photo: "https://images.pexels.com/photos/6088745/pexels-photo-6088745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/template-method.mp4",
            useCases: [
                "Setting up frameworks",
                "Data processing pipelines",
                "Reusable algorithm components",
            ],
            commonPitfalls: [
                "Limited flexibility",
                "Can lead to rigid class hierarchies",
            ],
        },
    ],
    structural: [
        {
            label: "Adapter",
            overview: "Allows incompatible interfaces to work together by acting as a bridge between them.",
            photo: "https://images.pexels.com/photos/3639031/pexels-photo-3639031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/adapter.mp4",
            useCases: [
                "Integrating new code with legacy systems",
                "Using third-party libraries with incompatible interfaces",
                "Bridging between different system types (e.g., Windows and Linux)",
                "Creating a uniform interface for APIs",
            ],
            commonPitfalls: [
                "Adding unnecessary complexity",
                "Adapter bloat with too many conversions",
                "Decreased performance due to additional abstraction",
            ],
        },
        {
            label: "Decorator",
            overview: "Adds new functionality to an object dynamically, without altering its structure.",
            photo: "https://images.pexels.com/photos/5468021/pexels-photo-5468021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/decorator.mp4",
            useCases: [
                "Adding UI elements dynamically",
                "Extending functionality of objects at runtime",
                "Adding logging or validation functionality",
                "Enriching features of a class without subclassing",
            ],
            commonPitfalls: [
                "Excessive layering of decorators",
                "Reduced clarity of object responsibilities",
                "Higher memory usage due to additional objects",
            ],
        },
        {
            label: "Facade",
            overview: "Provides a unified interface to a set of interfaces in a subsystem, making it easier to use.",
            photo: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/facade.mp4",
            useCases: [
                "Simplifying complex subsystems",
                "User-friendly interfaces for APIs",
                "Modularization of subsystems",
            ],
            commonPitfalls: [
                "May hide important functionality",
                "Increased difficulty in debugging",
            ],
        },
        {
            label: "Proxy",
            overview: "Provides a placeholder for another object to control access to it.",
            photo: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/proxy.mp4",
            useCases: [
                "Lazy initialization",
                "Access control",
                "Logging or caching requests",
                "Remote proxies for network calls",
            ],
            commonPitfalls: [
                "Increased latency",
                "Complexity due to additional layers",
            ],
        },
        {
            label: "Composite",
            overview: "Allows you to compose objects into tree structures to represent part-whole hierarchies, treating individual objects and compositions uniformly.",
            photo: "https://images.pexels.com/photos/4966170/pexels-photo-4966170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            video: "/videos/composite.mp4",
            useCases: [
                "Hierarchical structures",
                "File systems",
                "UI components like menus and toolbars",
            ],
            commonPitfalls: [
                "Can lead to complex recursive structures",
                "May be overkill for flat structures",
            ],
        }
    ]
};


// Define the SDLCPhase interface
export interface SDLCPhase {
    phaseName: string;
    overview: string;
    photo: PhotoV2;
    video: VideoV2;
    challenges: string[];
    bestPractices: string[];
    practicalApplications: string[];
    examples: string[];
}

// Create the SDLC phases array
export const sdlc: SDLCPhase[] = [
    {
        phaseName: "Requirements Gathering & Analysis",
        photo:"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video:"https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        overview: "Identify and document the functional and non-functional requirements of the project.",
        challenges: [
            "Inadequate understanding of customer needs",
            "Ambiguities or conflicting requirements",
            "Inadequate stakeholder involvement"
        ],
        bestPractices: [
            "Engage stakeholders early and often",
            "Conduct detailed requirement workshops",
            "Validate requirements regularly with stakeholders"
        ],
        practicalApplications: [
            "Using surveys or interviews to gather user needs",
            "Employing requirements modeling techniques, like use case diagrams",
            "Utilizing a requirements management tool like JIRA or Confluence"
        ],
        examples: [
            "Building a requirement document for an e-commerce website",
            "Conducting a user interview for a mobile banking app",
            "Creating a feature list for a content management system"
        ]
    },
    {
        phaseName: "System Design",
        overview: "Create an architecture for the project, outlining the components and interactions within the system.",
        photo:"https://images.pexels.com/photos/17483871/pexels-photo-17483871/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-proje.png",
        video:"https://videos.pexels.com/video-files/852063/852063-hd_1920_1080_30fps.mp4",
        challenges: [
            "Balancing performance with scalability",
            "Selecting the right tech stack",
            "Defining architecture without over-complication"
        ],
        bestPractices: [
            "Use modular, scalable architecture",
            "Document system architecture thoroughly",
            "Prioritize key requirements and scalability"
        ],
        practicalApplications: [
            "Using UML diagrams to model system components",
            "Applying design patterns like MVC for web applications",
            "Creating a data schema for relational databases"
        ],
        examples: [
            "Designing the backend for a video streaming service",
            "Building a microservices architecture for a fintech app",
            "Structuring an API for a SaaS product"
        ]
    },
    {
        phaseName: "Implementation (Coding)",
        overview: "Translate the system design into functional code using the chosen tech stack and frameworks.",
        photo:"https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video:"https://videos.pexels.com/video-files/6330779/6330779-hd_1920_1080_30fps.mp4",
        challenges: [
            "Maintaining code quality",
            "Ensuring team collaboration on code",
            "Managing time and deadlines effectively"
        ],
        bestPractices: [
            "Use version control systems like Git",
            "Employ coding standards and practices",
            "Conduct code reviews regularly"
        ],
        practicalApplications: [
            "Implementing core business logic in backend code",
            "Building interactive components in a frontend framework",
            "Using CI/CD pipelines for automated deployment"
        ],
        examples: [
            "Writing RESTful API endpoints for data retrieval",
            "Developing a responsive UI with React",
            "Implementing microservices for a scalable application"
        ]
    },
    {
        phaseName: "Testing",
        overview: "Verify that the system functions as intended and meets the requirements.",
        photo:"https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video:"https://videos.pexels.com/video-files/8328045/8328045-uhd_2560_1440_25fps.mp4",
        challenges: [
            "Identifying all potential edge cases",
            "Balancing testing coverage with time constraints",
            "Managing regression and integration testing across teams"
        ],
        bestPractices: [
            "Use automated testing for repetitive tasks",
            "Incorporate both unit and integration tests",
            "Conduct user acceptance testing (UAT)"
        ],
        practicalApplications: [
            "Running unit tests to validate core functionalities",
            "Conducting load tests to ensure system stability",
            "Using a bug tracking tool to manage issues"
        ],
        examples: [
            "Testing user authentication functionality",
            "Running performance tests for database queries",
            "Checking UI responsiveness on various devices"
        ]
    },
    {
        phaseName: "Deployment",
        overview: "Deploy the completed project into a production environment for user access.",
        photo:"https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video:"https://videos.pexels.com/video-files/1085656/1085656-uhd_2560_1440_25fps.mp4",
        challenges: [
            "Minimizing downtime during deployment",
            "Ensuring compatibility with production environment",
            "Managing configuration across environments"
        ],
        bestPractices: [
            "Use CI/CD tools for deployment automation",
            "Conduct deployment rehearsals in staging",
            "Implement rollback strategies for errors"
        ],
        practicalApplications: [
            "Deploying a web app using Docker and Kubernetes",
            "Setting up continuous delivery with Jenkins",
            "Using cloud-based services like AWS for scalable deployment"
        ],
        examples: [
            "Rolling out a feature update to a mobile app",
            "Deploying a website with zero downtime",
            "Launching a new API version"
        ]
    },
    {
        phaseName: "Maintenance",
        overview: "Monitor, update, and refine the project post-deployment to address issues and ensure performance.",
        photo:"https://images.pexels.com/photos/1181330/pexels-photo-1181330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video:"https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4",
        challenges: [
            "Handling bug fixes without affecting existing functionality",
            "Managing resources for new features vs. bug fixes",
            "Ensuring security and performance over time"
        ],
        bestPractices: [
            "Use monitoring tools to track system health",
            "Implement feedback loops for ongoing improvement",
            "Plan for regular security updates"
        ],
        practicalApplications: [
            "Utilizing logging to identify and resolve issues",
            "Running regular security audits",
            "Adding features based on user feedback"
        ],
        examples: [
            "Monitoring server load and scaling as needed",
            "Patching vulnerabilities in legacy code",
            "Introducing new functionality while maintaining stability"
        ]
    }
];
