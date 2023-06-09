import MiddleItem from "./MiddleItem"
const data=[
  {
    path:'/index/research',
    title:'研究',
    iconstr:'game-icons:archive-research',
    text:'Rear projection removes traditional mechanics from the equation.\
Choose from a variety of different faces and appearances. \
Update and adapt with the push of a button. IP protection – US Patent 9,810,975'
  },
  {
    path:'/index/competition',
    title:'比赛',
    iconstr:"material-symbols:all-match-sharp",
    text:'Rear projection removes traditional mechanics from the equation.\
Choose from a variety of different faces and appearances. \
Update and adapt with the push of a button. IP protection – US Patent 9,810,975'
  },
  {
    path:'/index/honor',
    title:'荣誉',
    iconstr:"mdi:trophy",
    text:'Rear projection removes traditional mechanics from the equation.\
Choose from a variety of different faces and appearances. \
Update and adapt with the push of a button. IP protection – US Patent 9,810,975'
  }
]

export default function Middle() {

  return (
    <div className='w-[1400px] my-16 mx-auto flex justify-around mt-3'>
       {
        data.map((item,index)=>{
          return(<MiddleItem key={index} {...item}/>)
        })
       } 
      
    </div>
  )
}
