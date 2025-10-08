import React from 'react'
import ExpandableImage from './ExpandableImage';
type BlockProps = {
  image: string;
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Block({
image,
title
}: BlockProps) 
 {
    return(
      <div className='w-1/4 h-auto dark:bg-gray-700 flex m-6 flex-col bg-white  '>
        <div className='w-full h-3/4 overflow-hidden shrink-0 pr-2 '>
          <ExpandableImage src={image} alt={title} className='w-full h-full object-cover m-1 rounded-lg rounded-es-xl rounded-ee-xl ' />
        </div>
          <div className=' justify-center py-5 flex items-center '>
            <p className='font-bold text-xl mb-2'>{title}</p>
          </div>
      </div>
    )
}