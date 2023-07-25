import HonorItem from "@/components/honor/HonorItem"
import { useTranslation } from "react-i18next"
const honorArr:Array<any>=[]
for (let i = 0; i < 5; i++) {
  honorArr.push({
    name:'全国大学生创新比赛',
    time:'2023-2-5',
    img:'1'
  }) 
}
export default function Honor() {
  const {t}=useTranslation()
  return (
    <div >
      <div className="w-full bg-cyan-50">
        <h1 className="py-10 text-center ml-10 text-[40px] font-extrabold">{t('honor')}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
         {
        honorArr.map((item,i)=>{
          return (
            <HonorItem key={i} {...item} />
          )
        })
      }
      </div>
      
    </div>
  )
}
