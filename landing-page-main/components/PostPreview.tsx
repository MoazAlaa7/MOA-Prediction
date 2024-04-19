import React from 'react'
import { PostMetadata } from './postMetaData'
import Link from 'next/link'
const PostPreview = (props:PostMetadata) => {
return (
    <div className='border border-gray-300 p-4 rounded-md shadow-md bg-indigo-100 dark:bg-indigo-900'>
      <Link href={props.link} target="_blank" rel="noopener noreferrer" passHref>
        <div className='block transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-105 rounded-lg p-6 bg-white dark:bg-gray-100 ring-1 ring-gray-900/5 shadow-lg space-y-3 hover:bg-blue-100 hover:ring-blue-100 ' style={{height:'300px'}}>
          <p className='text-sm text-gray-400'>{props.date}</p>
          <h2 className='font-bold text-blue-500 hover:underline'>{props.title}</h2>
          <p className='text-gray-600'>{props.subtitle}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostPreview