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
        <h1 className="text-[50px] ml-10  py-5">
          {t('competition')}
        </h1>
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
