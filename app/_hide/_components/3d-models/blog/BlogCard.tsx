import { Post } from '@/library/types/common'
import { Html, RoundedBox } from '@react-three/drei'
import React, { forwardRef, MutableRefObject } from 'react'
import * as THREE from 'three'
import { GroupType } from '../../scenes/BlogScene'
import { IBlogPopulated } from '@/app/_database/models/blog'



export type BlogCardProps = {
    post: IBlogPopulated;
} & JSX.IntrinsicElements['group'];




const BlogCard = forwardRef<GroupType | undefined, BlogCardProps>(({ post, ...props }, ref) => {





    const TopContainer = () => {

        return (
            <div className='blog-card-top-ctn' id='three-object'>
                <div className={`blog-card-img-ctn`} id='three-object'>
                    <img src={post.featuredImg.portrait} height={"20%"} className='blog-card-feat-img' id='three-object' />
                </div>



                <h3 className='blog-card-h3' id='three-object'>
                    {post.title}
                </h3>

                <div className='blog-card-author-ctn' id='three-object'>
                    <div className='blog-card-author-img-wrapper' id='three-object'>
                        <img src={post.author.photo.landscape} className='blog-card-author-img' id='three-object' />
                    </div>
                    <div className='blog-card-author-credentials-ctn' id='three-object'>
                        <p>
                            Author <span className="blog-card-author-span" id='3d-object'>{post.author.firstName} {post.author.
                                lastName}</span>
                        </p>
                        <p>
                            Date {post.createdAt.toISOString()}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const BottomContainer = () => {

        return (
            <div className="blog-card-bottom-ctn">

                <div className="blog-card-excerpt-txt-ctn">
                    <p className="blog-card-excerpt-txt">
                        {post.content}
                    </p>
                </div>
                <div className="blog-card-actions-ctn">
                    <p className="blog-card-actions-txt">
                        all of the blog card actions
                    </p>
                </div>
            </div>
        )

    };


    return (
        <group ref={ref as React.MutableRefObject<GroupType>} {...props} dispose={null}>
            <RoundedBox
                args={[24, 32, 1]} // Width, height, depth. Default is [1, 1, 1]
                radius={1} // Radius of the rounded corners. Default is 0.05
                smoothness={25} // The number of curve segments. Default is 4
                bevelSegments={0} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
                <Html
                    as='div'
                    wrapperClass='blog-card-html-wrapper'
                    prepend
                    portal={ref as unknown as MutableRefObject<HTMLElement>}
                    // fullscreen
                    // sprite
                    position={[0, 0, 0]}
                    distanceFactor={10}
                    zIndexRange={[24, 24]}
                    transform
                >
                    <div className={`blog-card-wrapper`} id='three-object'>

                        <div className='blog-card-ctn' id='three-object'>

                            <TopContainer />

                            <BottomContainer />
                        </div>

                    </div>


                </Html>

            </RoundedBox>
        </group>

    )
});

BlogCard.displayName = 'BlogCard';

export default BlogCard