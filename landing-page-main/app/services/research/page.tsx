import React from 'react'
import Link from 'next/link'
import getPostMetaData from '@/components/getPostMetadata'
import PostPreview from '@/components/PostPreview'
import Header from '../../../components/Header'



function Research() {
  const postMetaData = getPostMetaData();
  // Take only the first three slugs
  const firstThreeSlugs = postMetaData.slice(0, 6);

  const postPreviews = firstThreeSlugs.map((post) => (
    <PostPreview key={post.slug}{...post}/>
  ));

    return (
      <div className=' pt-36'>
        <Header />
        <div className='mx-auto  max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4'>

          {postPreviews}
        </div>
      </div>
    );
  }

export default Research ;