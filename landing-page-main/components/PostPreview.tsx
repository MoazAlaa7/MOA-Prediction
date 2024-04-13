import React from 'react'
import { PostMetadata } from './postMetaData'
import Link from 'next/link'
const PostPreview = (props:PostMetadata) => {
  return (
    <div className='border border-slate-200 p-4 rounded-md shadow-md bg-white  dark:bg-indigo-950'> {/* Make sure to provide a unique key */}
      <Link href={`${props.link}`} target="_blank" rel="noopener noreferrer" className='group block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 max-w-xs mx-auto rounded-lg p-6 bg-white dark:bg-indigo-100 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-100 hover:ring-sky-100 dark:hover:bg-white  duration-300'>
        <p className='text-sm text-slate-400 '>{props.date}</p>
        <h2 className=' font-bold text-blue-500 hover:underline '>{props.title}</h2>
        <p className='text-slate-500'>{props.subtitle}</p>
      </Link>
    </div>
  )
}

export default PostPreview