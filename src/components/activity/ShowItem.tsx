import React from 'react'

export default function ShowItem() {
  return (
    <div className='flow-root bg-gray-200 my-3'>
      <div className=' text-3xl ml-20 mt-10'>
        聚餐  
      </div> 
      <div className='text-2xl my-5 ml-10'> 
        时间:2023年10月1日 
      </div>
      <div className='flex justify-around mb-7'>
        <img className='w-[400px]' src="../../../public/123.jpg" alt="" />
        <img className='w-[400px]' src="../../../public/123.jpg" alt="" />
        <img className='w-[400px]' src="../../../public/123.jpg" alt="" />
      </div>
    </div>
  )
}
