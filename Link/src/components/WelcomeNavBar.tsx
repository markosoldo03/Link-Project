import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'

type BlockProps = {
  name: string
} & React.HTMLAttributes<HTMLDivElement>;

export default function WelcomeNavBar({name}: BlockProps) {
    const [open, setOpen] = useState(false);
  return (
    <div className=' flex flex-col justify-center items-center transparent '>
            <div className='cursor-pointer top-20 w-25 h-1/2 flex justify-center'
                             onMouseEnter={() => setOpen(true)} 
                             onMouseLeave={() => setOpen(false)}>
                <div className={` max-w-30 w-20 max-h-15 h-5 bg-gray-200 dark:bg-[#393E46]/75
                                 rounded-es-xl rounded-ee-xl flex justify-center
                                  items-center transition-opacity duration-300 
                                  ease-in-out ${ open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                    <ChevronDownIcon className='w-6 h-6 dark:text-white text-black '/>
                </div>

                <div className={`absolute max-w-52/53  w-full max-h-1/2 h-full m-1 bg-white/98 text-black dark:bg-[#393E46]/98 dark:text-white
                                 rounded-2xl shadow-lg transition-all duration-300 z-10 
                                 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                    <h1 className='absolute inset-0  flex justify-center items-center text-4xl font-extrabold text-center bg-gradient-to-r
                                      from-cyan-400 via-blue-500 to-purple-600
                                      bg-clip-text text-transparent animate-none drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]'>
                                      {name}
                              
                    </h1>
                </div>     
            </div>
        </div>
  )
}
