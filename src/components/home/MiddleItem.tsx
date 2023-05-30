import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'
interface propsType{
  iconstr:string,
  title:string,
  text:string,
  path:string
}
export default function MiddleItem({
  iconstr,
  title,
  text,
  path
}:propsType) {
  const nacigate=useNavigate()
  return (
    <>
     <div className='w-[450px] border-4 shadow-2xl  rounded-3xl'>
          <div className='w-56 h-52 mx-auto'>
            <Icon className="w-full h-full" icon={iconstr}/>
          </div>
            <div className="text-[40px]  text-center">{title}</div>
          <div className="mx-7 text-lgi text-2xl">{text}</div>
          <div className=" text-center mt-10 mb-5">
            <button onClick={()=>nacigate(path)} className=" border-0 w-32 h-16 rounded-full">认识更多</button>
          </div>
      </div> 
    </>
  )
}
