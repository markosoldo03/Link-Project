import React from 'react'
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
        <div className='w-1/3 h-auto bg-gray-700 flex flex-col m-3 '>
      <div className='w-full h-3/4 overflow-hidden shrink-0 pr-2 '>
          <img className='w-full h-full object-cover m-1 rounded-lg ' src={image}></img>
          </div>
          <div className=' justify-center py-5 flex items-center '>
            <p className='font-bold text-xl mb-2'>{title}</p>
          </div>
      </div>
    )
}