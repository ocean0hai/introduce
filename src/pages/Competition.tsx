import CompetitionItem from "@/components/competition/CompetitionItem"
const comData=[
  {
    name:'',
    imgSrc:'',
    text:'',
    link:''
  }
]

export default function Competition() {
  return (
    <div className="w-[1400px] mx-auto ">
      <div className="bg-red-500">
        <h1 className="text-[50px] ml-10  py-5">
          比赛
        </h1>
      </div>
      <CompetitionItem></CompetitionItem>  
      <CompetitionItem></CompetitionItem>  
      <CompetitionItem></CompetitionItem>  
    </div>
  )
}
