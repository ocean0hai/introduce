import { Carousel } from 'react-responsive-carousel'
interface dataType{
  img:string,
  text:string
}
 const data:Array<dataType>=[]
  for (let i = 0; i < 3; i++) {
    data.push({
      img:i+1+'',
      text:`Legend ${i}`
    }) 
  }
export default function CarouselImg() {
  
  return (
    <div className=' h-[500px] mb-10'>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {
           data.map((item,index)=>{
            return(
              <div className='w-full h-[500px]' key={index}>
                  <img className='w-full h-full' src={'../../../public/swippers/'+item.img+'.jpg'}/>
                  <p className="legend">{item.text}</p>
              </div>
            )
          })

        }
      </Carousel>
    </div>
  )
}
