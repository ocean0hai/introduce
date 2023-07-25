import CompetitionItem from "@/components/competition/CompetitionItem"
import { useTranslation } from "react-i18next"
const competeArr:Array<any>=[]
for (let i = 0; i < 3; i++) {
 competeArr.push({
  name:`${i}`,
  text:`${i}`,
  link:`${i}`,
  imgsrc1:'1'

 }) 
}
export default function Competition() {
  const {t}=useTranslation() 
  return (
    <>
      <div className="bg-red-500">
        <div className="text-center md:text-[50px] py-3 md:py-5">
          {t('competition')}
        </div>
      </div>
      {
        competeArr.map((item,i)=>{
          return(
            <CompetitionItem key={i} {...item} />  
          )
        })
      }
    </>
  )
}
