import React from "react";
import * as THREE from 'three'

export type JoinGrowthPropsScene = JSX.IntrinsicElements['group'] & {
    animate: AnimationOptions;
    ctnRefs?: React.RefObject<HTMLDivElement>[]
};

export type JoinGrowthProps = JSX.IntrinsicElements['group'] & {
    animate: AnimationOptions;
    ctnRefs?: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
};




export type Photo = {
    portrait:string;
    landscape:string;
};

export type Name = {
    first: string;
    middleInitial?: string;
    last: string;
}

export type Video = {
    portrait:string;
    landscape:string;
}

export type AnimationOptions = {
    animationMain?: boolean;
    animationOrbit?: boolean;
}

export type SocialLinks =  {
    twitter?: string;
    linkedin?: string;
    github?: string;
    facebook?:string;
    instagram?:string;
    snapchat?:string;
    tiktok?:string;
    rueblur?:string;
    website?: string;
};

export type Heading = string;

export type Subheading = string;

export type CTAButton = {
    label: string;
    type: string;
};

export type ListItem = {
    label: string;
    excerpt: string;
}

export type UnorderedList = ListItem[];

export interface Testimonial {
    id:string;
    name: string;
    comment: string;
    stars: number;
    photo: Photo[];
    video?: Video;
}

export interface Hero {
    headline: Heading;
    subheading: Subheading;
    ctaButton: CTAButton;
}

export interface Section {
    headline:Heading;
    listOfBenefits:UnorderedList;
    testimonials:Testimonial[];
    ctaButton: CTAButton;
}

export interface CaseStudy {
    id: string; // Unique identifier for the case study
    title: string; // Title of the case study
    subtitle?: string; // Optional subtitle for the case study
    overview: string; // Brief overview or summary of the case study
    problemStatement: string; // Description of the problem or challenge addressed
    solution: string; // Detailed description of the solution provided
    results: string; // Outcomes or results achieved
    technologiesUsed: string[]; // Array of technologies or tools used in the case study
    images?: Photo[]; // Optional array of images related to the case study
    videoUrl?: string; // Optional URL to a video demonstrating the case study
    datePublished: string; // Date when the case study was published
    author: string; // Information about the author of the case study
    metrics?: { // Optional object to track metrics related to the case study
      views?: number; // Number of views
      likes?: number; // Number of likes
      shares?: number; // Number of shares
    };
    tags?: string[]; // Optional array of tags related to the case study
}

export interface CTA {
    headline:Heading;
    listOfBenefits:UnorderedList;
    caseStudies:CaseStudy[];
}

export type NavItemChild = {
    label:string;
    path?:string;
    children?: NavItemChild[]
}

export type NavItem = {
    label:string;
    path:string;
    children?: NavItemChild[]
}

export type Author = {
    name: Name;
    bio: string;
    joinDate: Date;
    imageUrl: Photo;
    videoUrl?: Video;
    socialLinks?: SocialLinks;
};

export interface Metrics {               
    views?: number;
    likes?: number;
    shares?: number;
}

export interface Post {
    author: Author;
    title: string;
    excerpt: string;
    featuredImg: Photo;      // URL of the featured image
    images?: Photo[];         // Array of images associated with the blog post
    body: string;             // Main content of the blog post
    categories: string[];     // List of categories for the blog post
    subcategories?: string[]; // Optional list of subcategories
    tags?: string[];          // Optional tags for the blog post
    featured?: boolean;       // Whether the post is featured or not
    metrics?: Metrics;
    publishedDate: Date;      // Date the blog post was published
    updatedDate?: Date;       // Date the blog post was last updated (optional)
    socialLinks?:SocialLinks;
};

