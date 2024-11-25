import { useRef, useEffect, RefObject, createRef } from "react";
import React from "react";
import { createDynamicRefs } from "@/utility/functions";
import { agileDevelopment, customSoftware, designThinking, digitalTransformation, importantFactors, overview } from "@/library/const";

export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
};

// Custom hook to create and manage refs
export const useBlogPageSectionRefs = (): {
    scrollRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLBodyElement>;
    blogRef: RefObject<HTMLDivElement>;
    ctnRef: RefObject<HTMLDivElement>;
    refs: RefIDObject[];
} => {
    // Static Refs

    // /im-a-programmer refs static
    const scrollRef = useRef<HTMLDivElement>(null);
    const blogRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLBodyElement>(null);
    const ctnRef = useRef<HTMLDivElement>(null);

    const refs = [
        { ref: blogRef, id: 'blog-main' },
    ];

    return {
        scrollRef,
        bodyRef,
        ctnRef,
        blogRef,
        refs,
    };
};
