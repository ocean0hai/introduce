import React from 'react'
import ShowItem from '@/components/activity/ShowItem'
export default function Activity() {
  return (
    <div className='w-[1400px] mx-auto'>
      <div>
        <div className='text-[40px] bg-cyan-300 p-10'>丰富多彩的活动</div>
        <ShowItem />
        <ShowItem />
      </div>
       
    </div>
  )
}
