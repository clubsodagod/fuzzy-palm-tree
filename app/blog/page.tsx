
import React, { useEffect, useRef, useState } from 'react'
import { AppContainer, Header, ScrollableItemCtn, SectionWrapper } from '../_components';
import { motion } from 'framer-motion';
import styles from "./styles.module.css";
import { IBlog, IBlogPopulated } from '@/library/db/models/blog';
import { initBlogHomePageClient, } from '@/utility/blog-section/blog-page-functions';
import BlogCard2D from './_components/BlogCard';
import MotionPageWrapper from '../_components/common/MotionPageWrapper';
import MotionSectionWrapper from '../_components/common/MotionSectionWrapper';
import { MotionDiv } from '../_components/framer/MotionDiv';
import { MotionH3 } from '../_components/framer/MotionH3';
import { MotionH5 } from '../_components/framer/MotionH5';
import { MotionH6 } from '../_components/framer/MotionH6';
import { MotionP } from '../_components/framer/MotionP';
import { MotionH1 } from '../_components/framer/MotionH1';
import { Typography } from '@mui/material';
import BlogModule from './_components/BlogModule';



// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

export const dynamic = 'force-dynamic'

export default async function BlogPage() {

    // force creation at build time for SEO purposes
    const posts = await initBlogHomePageClient();
    // destructure posts object
    const {
        featuredPosts,
        allPosts
    } = posts!;


    if (featuredPosts && allPosts) {
        return  (
            <BlogModule 
            featuredPosts={featuredPosts}
            allPosts={allPosts}
            />
        )
    }
}

