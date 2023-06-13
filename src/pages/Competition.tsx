import CompetitionItem from "@/components/competition/CompetitionItem"
import useGetTable from "@/hooks/useGetTable"   

export default function Competition() {
  const {data}=useGetTable('competition')
  console.log(data);
  
  return (
    <div className="w-[1400px] mx-auto ">
      <div className="bg-red-500">
        <h1 className="text-[50px] ml-10  py-5">
          比赛
        </h1>
      </div>
      {
        data.map(item=>{
          return(
            <CompetitionItem key={item.id} {...item} />  
          )
        })
      }
    </div>
  )
}
