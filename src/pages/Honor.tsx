import HonorBlock from "@/components/honor/HonorBlock"
import useGetTable from "@/hooks/useGetTable"
import { honorts } from "@/utils/honor"

export default function Honor() {
  const {data}=useGetTable('honor')
  const datatime=honorts(data) 
  return (
    <div className="w-[1400px] mx-auto">
      <div className="w-full bg-cyan-50">
        <h1 className="py-10 text-center ml-10 text-[40px]">荣誉</h1>
      </div>
      {
        Object.keys(datatime).map((item,index)=>{
          return  <HonorBlock key={index} year={item} data={datatime[item]} /> 
        })
      }
    </div>
  )
}
