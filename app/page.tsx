import { ResolvingMetadata, Metadata } from 'next';
import { getBlogs } from './_database/controllers/blog'
import HomeModule from "./_home/components/HomeModule";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



// either Static metadata
export const metadata: Metadata = {
  title: 'Home | Maliek Davis',
  description: 'Welcome to Maliek-Davis.com. Find innovative news, projects, and tutorials surrounding technology, finance, real estate and more.',
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
      },
  },
  category: 'maliek davis software engineer real estate investor entrepreneur'
}
export default async function Home() {


  // force creation at build time for SEO purposes
  const posts = await getBlogs();
  // destructure posts object
  const featuredPosts = posts?.featuredPosts;
  // const allPosts = posts?.allPosts;

  console.log(featuredPosts);


  return (
    <>
      <HomeModule featuredPosts={featuredPosts} />
    </>
  );


}
