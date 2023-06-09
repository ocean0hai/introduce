import React from 'react'
interface propsType{
  children:string,
  onClick:any
}
//bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300
export default function Button({
  children,
  onClick
}:propsType) {

  return (
    <button 
    onClick={onClick}
    className='
      border-0 
      w-52 
      h-20
     bg-yellow-400 
     text-white 
      rounded-full 
     hover:bg-yellow-500
    active:bg-yellow-600
      no-underline
    '>
        <span className='text-[30px]'>
          {children}
        </span> 
    </button>
  )
}
