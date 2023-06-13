interface propsType{
  id:number,
  name:string,
  time:string,
  imgsrc1:string,
  imgsrc2:string,
  imgsrc3:string,
}
export default function ShowItem({
  name,
  time,
  imgsrc1,
  imgsrc2,
  imgsrc3
}:propsType) {
  return (
    <div className='flow-root bg-gray-200 my-3'>
      <div className=' text-3xl ml-20 mt-10'>{name}</div> 
      <div className='text-2xl my-5 ml-10'> 
        时间:{time}
      </div>
      <div className='flex justify-around mb-7'>
        <img className='w-[400px]' src={imgsrc1} alt="" />
        <img className='w-[400px]' src={imgsrc2} alt="" />
        <img className='w-[400px]' src={imgsrc3} alt="" />
      </div>
    </div>
  )
}
