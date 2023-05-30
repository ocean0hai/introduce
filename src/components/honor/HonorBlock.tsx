import HonorItem from './HonorItem'
interface propsType{
  year:string,
  imgData:Array<any>
}
export default function HonorBlock({year,imgData}:propsType) {
  return (
    <div className='my-10'>
      <div className=' bg-gray-200'>
        <h2>{year}</h2>
      </div>
      {/* <div className='grid grid-cols-3 gap-3' > */}
      <div className='flex flex-wrap' >
        {
          imgData.map((item,index)=>{
            return <HonorItem key={index} {...item}  /> 
          })
        }
      </div>

    </div>
  )
}
