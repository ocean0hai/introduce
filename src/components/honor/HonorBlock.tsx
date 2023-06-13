import HonorItem from './HonorItem'
interface propsType{
  year:string,
  data:Array<any>
}
export default function HonorBlock({year,data}:propsType) {
  return (
    <div className='my-10'>
      <div className=' bg-gray-200'>
        <h1>{year}</h1>
      </div>
      {/* <div className='grid grid-cols-3 gap-3' > */}
      <div className='flex flex-wrap' >
        {
          data.map((item,index)=>{
            return <HonorItem key={index} {...item}  /> 
          })
        }
      </div>

    </div>
  )
}
