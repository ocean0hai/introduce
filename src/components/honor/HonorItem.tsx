
interface propsType{
  createTime:string,
  name:string,
  imgSrc:string
}
export default function HonorItem({createTime,name,imgSrc}:propsType) {
  return (
    <div className="w-[450px] mx-2">
      <div>
        <h2>比赛-{name}</h2>
        <h2>时间-{createTime}</h2>
      </div>
      <div className="w-full">
        <img className="w-[450px]" src={imgSrc} alt="" />
      </div>
    </div>
  )
}
