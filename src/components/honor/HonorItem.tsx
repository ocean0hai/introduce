
interface propsType{
  time:string,
  name:string,
  imgsrc1:string
}
export default function HonorItem({time,name,imgsrc1}:propsType) {
  return (
    <div className="w-[450px] mx-2">
      <div>
        <h2>比赛-{name}</h2>
        <h2>时间-{time}</h2>
      </div>
      <div className="w-full">
        <img className="w-[450px]" src={imgsrc1} alt="" />
      </div>
    </div>
  )
}
