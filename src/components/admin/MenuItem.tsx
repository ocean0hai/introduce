import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate,useLocation } from 'react-router-dom'
import { Table } from 'antd'
interface propsType{
  path:string,
  icon:string,
  label:string
}
export default function MenuItem({
  path,
  icon,
  label
}:propsType) {
  const location=useLocation()
  const navigate=useNavigate()
  function goPath(){
    navigate('/admin/'+path+'manage')
  }
  return (
    <>
      <button 
        onClick={goPath} 
        style={{background:'/admin/'+path+'manage'===location.pathname ? 'white':'' }} 
        className=' h-20 w-full flex text-[30px] mx-auto border-0 rounded-xl hover:bg-white'>
        <div className='mt-6 mx-auto'>
          <Icon className='w-10 h-10 mx-4 align-middle' icon="ic:baseline-error-outline"  />
          <span className=''>{label}</span>
        </div>
      </button>
    </>
  )
}
