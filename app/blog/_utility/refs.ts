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
    ctnRef: RefObject<HTMLDivElement>;
    blogRef: RefObject<HTMLDivElement>;
    refs: RefIDObject[];
    mainCategoriesRef: RefObject<HTMLDivElement>;
    categoriesRefs: RefIDObject[];
    blogCategoryFinanceRef: RefObject<HTMLDivElement>;
    categoryFinanceRefs: RefIDObject[];
    slugPageRef: RefObject<HTMLDivElement>;
    slugPageRefs: RefIDObject[];

} => {
    // Static Refs

    const bodyRef = useRef<HTMLBodyElement>(null);
    const ctnRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // /blog refs static
    const blogRef = useRef<HTMLDivElement>(null);
    const refs = [
        { ref: blogRef, id: 'blog-main' },
    ];

    // /blog/categories refs static
    const mainCategoriesRef = useRef<HTMLDivElement>(null);
    const categoriesRefs = [
        { ref: mainCategoriesRef, id: 'blog-categories-main' },
    ];


    // /blog/categories refs static
    const blogCategoryFinanceRef = useRef<HTMLDivElement>(null);
    const categoryFinanceRefs = [
        { ref: blogCategoryFinanceRef, id: 'blog-category-finance' },
    ];


    // /blog slug page refs static
    const slugPageRef = useRef<HTMLDivElement>(null);
    const slugPageRefs = [
        { ref: slugPageRef, id: 'blog-slug-page' },
    ];



    return {
        scrollRef,
        bodyRef,
        ctnRef,
        blogRef,
        refs,
        categoriesRefs,
        mainCategoriesRef,
        blogCategoryFinanceRef,
        categoryFinanceRefs,
        slugPageRef,
        slugPageRefs,
    };
};
