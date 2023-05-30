import React from 'react'

import { Carousel } from 'react-responsive-carousel'
interface dataType{
  img:string,
  text:string
}
 const data:Array<dataType>=[]
  for (let i = 0; i < 10; i++) {
    data.push({
      img:'../../public/123.jpg',
      text:`Legend ${i}`
    }) 
  }
export default function CarouselImg() {
  
  return (
    <div className='w-[1400px] mx-auto h-[500px] mb-10'>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {
           data.map((item,index)=>{
            return(
              <div className='w-full h-[500px]' key={index}>
                  <img className='w-full h-full' src={item.img}/>
                  <p className="legend">{item.text}</p>
              </div>
            )
          })

        }
      </Carousel>
    </div>
  )
}
