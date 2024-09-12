import { Post } from "@/library/types/common";

export const blogPosts: Post[] = [
    {
        author: {
            name: { first: "John", middleInitial: "A", last: "Doe" },
            bio: "John is a seasoned software engineer with a passion for teaching and writing about technology.",
            joinDate: new Date("2020-01-15"),
            imageUrl: {
                portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                landscape: "https://example.com/john-landscape.jpg",
            },
            videoUrl: {
                portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                landscape: "https://example.com/john-video-landscape.mp4",
            },
            socialLinks: {
                twitter: "@JohnDoeTech",
                linkedin: "https://linkedin.com/in/johndoe",
                github: "https://github.com/johndoe",
                website: "https://johndoe.dev",
            },
        },
        title: "Understanding JavaScript Closures",
        excerpt: "A deep dive into closures, one of JavaScript's most powerful features.",
        featuredImg: {
            portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            landscape: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        images: [
            {
                portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                landscape: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
                portrait: "https://example.com/js-closures-detail2-portrait.jpg",
                landscape: "https://example.com/js-closures-detail2-landscape.jpg",
            },
        ],
        body: "JavaScript closures are a fundamental concept in the language...",
        categories: ["JavaScript", "Programming"],
        tags: ["JavaScript", "Closures", "Functional Programming"],
        featured: true,
        metrics: {
            views: 10234,
            likes: 534,
            shares: 120,
        },
        publishedDate: new Date("2023-07-01"),
        updatedDate: new Date("2023-07-05"),
    },
    {
        author: {
            name: { first: "Jane", last: "Smith" },
            bio: "Jane is a data scientist with a focus on machine learning and AI.",
            joinDate: new Date("2019-06-10"),
            imageUrl: {
                portrait: "https://example.com/jane-portrait.jpg",
                landscape: "https://example.com/jane-landscape.jpg",
            },
            socialLinks: {
                linkedin: "https://linkedin.com/in/janesmith",
                github: "https://github.com/janesmith",
            },
        },
        title: "Introduction to Machine Learning",
        excerpt: "Learn the basics of machine learning, from data preprocessing to model evaluation.",
        featuredImg: {
            portrait: "https://example.com/ml-intro-portrait.jpg",
            landscape: "https://example.com/ml-intro-landscape.jpg",
        },
        body: "Machine learning is a rapidly growing field with applications in many areas...",
        categories: ["Machine Learning", "Data Science"],
        tags: ["Machine Learning", "AI", "Data Science"],
        featured: false,
        metrics: {
            views: 15432,
            likes: 892,
            shares: 230,
        },
        publishedDate: new Date("2023-06-15"),
    },
    {
        author: {
            name: { first: "Alex", middleInitial: "B", last: "Johnson" },
            bio: "Alex is a web developer specializing in React and frontend technologies.",
            joinDate: new Date("2021-03-05"),
            imageUrl: {
                portrait: "https://example.com/alex-portrait.jpg",
                landscape: "https://example.com/alex-landscape.jpg",
            },
            socialLinks: {
                twitter: "@AlexDev",
                linkedin: "https://linkedin.com/in/alexjohnson",
                github: "https://github.com/alexjohnson",
                website: "https://alexjohnson.dev",
            },
        },
        title: "Building Responsive Web Applications with React",
        excerpt: "A guide to creating responsive web apps using React and modern CSS techniques.",
        featuredImg: {
            portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            landscape: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        body: "Responsive design is crucial in today's mobile-first world...",
        categories: ["Web Development", "React"],
        tags: ["React", "CSS", "Responsive Design"],
        featured: true,
        metrics: {
            views: 20345,
            likes: 1234,
            shares: 345,
        },
        publishedDate: new Date("2023-08-01"),
        updatedDate: new Date("2023-08-03"),
    },
    {
        author: {
            name: { first: "Sam", last: "Williams" },
            bio: "Sam is a cybersecurity expert with over a decade of experience.",
            joinDate: new Date("2018-11-20"),
            imageUrl: {
                portrait: "https://example.com/sam-portrait.jpg",
                landscape: "https://example.com/sam-landscape.jpg",
            },
            videoUrl: {
                portrait: "https://example.com/sam-video-portrait.mp4",
                landscape: "https://example.com/sam-video-landscape.mp4",
            },
            socialLinks: {
                linkedin: "https://linkedin.com/in/samwilliams",
                github: "https://github.com/samwilliams",
            },
        },
        title: "Securing Your Web Applications: Best Practices",
        excerpt: "Explore the best practices for securing web applications in today's threat landscape.",
        featuredImg: {
            portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            landscape: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        body: "Security is a top priority for any web application...",
        categories: ["Cybersecurity", "Web Development"],
        tags: ["Security", "Best Practices", "Web Development"],
        featured: false,
        metrics: {
            views: 8723,
            likes: 453,
            shares: 89,
        },
        publishedDate: new Date("2023-05-20"),
    },
    {
        author: {
            name: { first: "Emily", middleInitial: "R", last: "Brown" },
            bio: "Emily is a cloud computing specialist with a passion for scalable architectures.",
            joinDate: new Date("2022-02-14"),
            imageUrl: {
                portrait: "https://example.com/emily-portrait.jpg",
                landscape: "https://example.com/emily-landscape.jpg",
            },
            socialLinks: {
                twitter: "@CloudEmily",
                linkedin: "https://linkedin.com/in/emilybrown",
                github: "https://github.com/emilybrown",
                website: "https://emilybrown.cloud",
            },
        },
        title: "Introduction to Cloud Computing: Why It Matters",
        excerpt: "Understand the fundamentals of cloud computing and its impact on modern businesses.",
        featuredImg: {
            portrait: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            landscape: "https://images.pexels.com/photos/3519103/pexels-photo-3519103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        body: "Cloud computing has revolutionized the way businesses operate...",
        categories: ["Cloud Computing", "Technology"],
        tags: ["Cloud", "Scalability", "AWS", "Azure"],
        featured: true,
        metrics: {
            views: 19234,
            likes: 923,
            shares: 340,
        },
        publishedDate: new Date("2023-09-01"),
        updatedDate: new Date("2023-09-02"),
    },
];
