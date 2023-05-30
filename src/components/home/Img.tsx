
interface propsType{
  imgsrc:string
}
export default function Img({imgsrc}:propsType) {
  return (
    <div className='w-[600px] h-[400px] mt-10 mx-auto'>
      <img className='w-full h-full' src={imgsrc} alt="" />
    </div>
  )
}
