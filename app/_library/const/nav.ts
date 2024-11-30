import { NavItem } from "../types/common";

import { env } from "process";


export const baseUrl = process.env.NEXT_PUBLIC_NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL :process.env.NEXT_PUBLIC_NODE_ENV == 'production-test' ? process.env.NEXT_PUBLIC_PRODUCTION_TEST_URL : process.env.NEXT_PUBLIC_PRODUCTION_URL 


export const navItems: NavItem[] = [
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
        children: [
            {
                label: 'resume',
                path: '/about/resume'
            }
        ]
    },
    {
        label: 'contact',
        path: '/contact'
    },
]
