import React from 'react'
import { FlipWordsDemo } from './FlipWordsDemo'
import { GlobeDemo } from './GlobeDemo'

const HeroPage = () => {
  return (
    <div className='flex h-16 items-center justify-between max-w-7xl mx-auto mt-64 px-4 sm:px-6 lg:px-8'>

        <div className='flex items-start  flex-col w-1/2'>
            
            <FlipWordsDemo/>

            <p className='mt-2 text-md text-gray-500 px-4'>Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
          
        <button className="inline-flex m-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Explore More
        </button>

        
  
        
        
      

        </div>
        <div className=' w-1/2'>
            <GlobeDemo/>
        </div>

    </div>
  )
}

export default HeroPage