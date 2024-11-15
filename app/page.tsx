import { getBlogs } from './_database/controllers/blog'
import HomeModule from "./_home/components/HomeModule";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

export default async function Home() {


  // force creation at build time for SEO purposes
  const posts = await getBlogs();
  // destructure posts object
  const featuredPosts = posts?.featuredPosts;
  // const allPosts = posts?.allPosts;


  return (
    <>
      <HomeModule featuredPosts={featuredPosts} />
    </>
  );


}
